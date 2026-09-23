---
description: "Install one official Twin Docker container per camera, with persistent configuration volumes and local storage."
---

# Installing Twin

Twin is the edge digital twin of one camera. Install it on a Docker host at the customer's site so that it can reach the camera locally and connect to Lens in the cloud. A twenty-camera installation uses twenty containers, each with its own configuration and identity.

<figure><img src="../../.gitbook/assets/kilo-twin-tapo-live.jpg" alt="Twin dashboard showing a connected camera and Lens connection"><figcaption><p>A configured Twin shows the local camera and its connection to Lens.</p></figcaption></figure>


## Prepare the host

Use a Docker-capable host with an **amd64** or **arm64** processor. On Linux, run Docker Engine. On Windows or macOS, run Docker Desktop with Linux containers and keep Docker Desktop running while the cameras are in use. It needs access to the camera's RTSP stream, an internet connection for Lens, and sufficient CPU, memory, and bandwidth for the chosen feeds. If recording locally, allocate persistent storage and configure retention.

Obtain the camera's RTSP URL and camera credentials from its administrator or manufacturer. A substream can reduce the work required for previews and motion detection. Keep the local Twin administration interface on a trusted network.

The official image and available versions are on [Docker Hub: chirpiot/lens-twin](https://hub.docker.com/r/chirpiot/lens-twin).

### Verify the Docker engine

If Docker is not installed, use the [official installation guide](https://docs.docker.com/get-started/get-docker/). Start Docker Desktop on Windows or macOS and wait for the engine to be ready, with Linux containers selected. For a Linux host, start Docker Engine using the [service instructions for that installation](https://docs.docker.com/engine/daemon/start/).

Check access from the same terminal and user account that will launch the container:

```sh
docker info
```

The command must return server information without connection or permission errors. A successful `docker --version` only establishes that the CLI is installed; it does not prove the engine is running or accessible. Resolve failures using [Access and Troubleshooting](access-and-troubleshooting.md#diagnose-a-problem) before proceeding.

Keep both the Docker engine and host available throughout camera operation. Host sleep, shutdown, or stopping Docker interrupts every Twin on that host.

## Start one Twin

The following Bash example publishes the administration interface only on the Docker host's loopback address. It prompts for a **temporary Twin setup password** rather than putting the password in shell history. Use a unique value and retain it until account setup is complete. For Windows, use the [PowerShell command](#windows-and-macos).

```bash
read -rsp 'Temporary setup password for this Twin: ' TWIN_PASSWORD
printf '\n'
export TWIN_PASSWORD
docker run -d --name camera-01-twin --restart unless-stopped \
  -p 127.0.0.1:8080:80 \
  -e TWIN_USERNAME=admin -e TWIN_PASSWORD \
  -v camera-01-config:/home/twin/data/config \
  -v camera-01-recordings:/home/twin/data/recordings \
  chirpiot/lens-twin:1.0.1
unset TWIN_PASSWORD
```

Open `http://127.0.0.1:8080` on that host and complete the account setup below. On a remote server, use your established secure administrative access, such as an SSH tunnel, to reach this local port.

### First login and current password

Twin has **no default production username or password** and requires initial credentials on a fresh installation. The example supplies `admin` through `TWIN_USERNAME`; the prompt supplies the temporary setup password through `TWIN_PASSWORD`. Keeping `admin` is allowed.

For administrators using the installation command displayed in Lens, replace its `CHANGE-ME` placeholder with a unique temporary password. Do not use the literal placeholder. The inline value can be read in shell history and container settings, so do not reuse a password from another account.

The initial credential secures the installation before commissioning is complete. Twin then requires you to set the permanent credential in its local browser interface:

1. Log in with the configured initial username (`admin` in the example) and temporary password.
2. In **Set your credentials**, supply the temporary password as **Current password**.
3. Set the permanent credential in **New password**, then repeat it in **Confirm new password**.
4. Keep **New username (optional)** empty to retain the current username, or provide a replacement.
5. Choose **Save and continue** to complete setup.
6. Log in again with the permanent password and the retained or replacement username.

These are local Twin credentials, separate from the operator's Kilo account and the camera's own login.

If someone else installed Twin, obtain the initial credentials from that administrator. There is no universal factory password to enter. Use the initial password supplied when this particular Twin was installed.

Choose a new password with at least eight non-space characters, including uppercase and lowercase letters, a number, and a symbol. You can change your local login later by opening your user menu and choosing **Change password**.

The credential variables initialize a new installation only; changing them does not reset an account already saved in the configuration volume. Keep that volume when replacing or upgrading the container to preserve the saved credentials, identity, and settings.

## Add more cameras

Repeat the setup with a different container name, host port, and both volume names for every camera. For example, `camera-02-twin` can use port `8081` and `camera-02-config` and `camera-02-recordings`.

Do not share or clone a populated configuration volume between Twins. Each instance generates its own **Twin Key** on first startup, and that key identifies it when paired with Lens. Keep the original configuration when restarting or upgrading the same camera's Twin.

Recording is off on a fresh installation. Complete [Connecting a Camera](connecting-a-camera.md), then enable [local recording](local-recordings.md) if required.

## Windows and macOS

Run the [Docker engine check](#verify-the-docker-engine) before either example. The Bash command above applies to macOS; on Windows, use PowerShell and supply a temporary setup password when prompted:

```powershell
$twinInitialSecret = Read-Host 'Temporary setup password for this Twin' -AsSecureString
$env:TWIN_PASSWORD = [System.Net.NetworkCredential]::new('', $twinInitialSecret).Password
docker run -d --name camera-01-twin --restart unless-stopped `
  -p 127.0.0.1:8080:80 `
  -e TWIN_USERNAME=admin -e TWIN_PASSWORD `
  -v camera-01-config:/home/twin/data/config `
  -v camera-01-recordings:/home/twin/data/recordings `
  chirpiot/lens-twin:1.0.1
Remove-Item Env:TWIN_PASSWORD
```

Open the same local address and complete [First login and current password](#first-login-and-current-password). The Docker host must be able to reach the camera's private IP address. If automatic camera discovery does not reach the camera from Docker Desktop, enter the camera address or RTSP stream manually.

## Restart and upgrade

For a normal restart, run `docker restart camera-01-twin`. For an image upgrade:

1. Back up the Twin's persistent configuration and any recordings you need to keep.
2. Select the intended image version from the official Docker Hub repository and pull it with `docker pull chirpiot/lens-twin:<version>`.
3. Stop and remove only the old container with `docker stop camera-01-twin` and `docker rm camera-01-twin`.
4. Run the installation command again with the new image tag and the **same** configuration and recording volume names, port, and other installation options.
5. Sign in with the saved local credentials and verify local video and the Lens connection.

Do not remove the volumes during an upgrade. Replacing the container briefly interrupts its camera feed; the retained configuration keeps the camera's identity and pairing.
