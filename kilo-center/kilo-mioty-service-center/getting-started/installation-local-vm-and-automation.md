---
description: Run KiloCenter in a local VM with automated provisioning — repeatable setup for testing and team onboarding via Docker.
---

# Installation: Local VM and Automation

A local virtual machine gives your team a repeatable place to install and exercise Kilo Center Community Edition. Use it to learn MIOTY network setup and test installation changes before applying them to the service center you operate.

### Goal

Create repeatable local environments for testing and team onboarding.

### Local VM Pattern

Provision a Linux VM, clone the repository, and follow the steps from Installation: Docker Compose. Docker Compose is the recommended approach for VM-based setups since it handles all services — including KC-Web — automatically.

```bash
cd kilocenter-modules
cp .env.example .env
docker compose run --rm certgen
docker compose up --build -d
```

Open `http://localhost/` to verify KC-Web is running.

### What to Keep Consistent

Keep these stable across VM environments:

* Docker Compose service set (`postgres`, `redis`, `mosquitto`, `kc-identity`, `kilocenter`, `kc-gateway`, `kc-web`)
* TLS certificate generation (run `certgen` before first start -- see Docker Compose Installation)
* Port mappings and health check endpoints

### Why Use This Mode

* Clean-room validation from a fresh machine
* Repeatable onboarding for new team members
* Pre-production environment rehearsals
