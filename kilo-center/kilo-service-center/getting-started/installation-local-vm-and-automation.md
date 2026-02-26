# Installation: Local VM and Automation

### Goal

Create repeatable local environments for testing and team onboarding.

### Local VM Pattern

Provision a Linux VM, clone the repository, and follow the steps from Installation: Docker Compose. Docker Compose is the recommended approach for VM-based setups since it handles infrastructure dependencies automatically.

### What to Keep Consistent

Keep these stable across VM environments:

* Docker Compose service set (`postgres`, `redis`, `mosquitto`)
* KC-Core, KC-Gateway, and KC-Web startup flow via `start-dev.sh`
* Port mappings and health check endpoints

### Why Use This Mode

* Clean-room validation from a fresh machine
* Repeatable onboarding for new team members
* Pre-production environment rehearsals
