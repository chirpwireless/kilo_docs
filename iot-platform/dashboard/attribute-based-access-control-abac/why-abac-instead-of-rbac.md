# Why ABAC Instead of RBAC

### What Is ABAC?

Kilo uses **Attribute-Based Access Control (ABAC)** to manage who can view or edit different parts of the platform.\
ABAC is a modern, flexible access-control model designed to scale for enterprise and multi-tenant use.

Unlike traditional **Role-Based Access Control (RBAC)**, which limits users to predefined roles (Admin, Editor, Viewer), ABAC lets permissions depend on multiple **attributes** — for example, organization, department, or specific feature access.

#### Why ABAC Instead of RBAC

The decision to use ABAC was deliberate.\
RBAC is rigid: it works with static roles that quickly become hard to maintain as organizations grow.\
ABAC, by contrast, is **dynamic and context-aware** — ideal for **dealers**, **corporate clients**, and **large organizations** with varied internal structures.

With ABAC you get:

* **Granular permissions** – control access per page, module, or feature.
* **Dynamic rules** – access adapts automatically as user attributes change.
* **Reduced admin overhead** – no need to manage dozens of custom roles.
* **Enterprise scalability** – easy to apply consistent policies across sub-organizations.

***

### Key Capabilities

* Invite users to your organization and assign access per module.
* Define access levels for each page:
  * **Edit** – full edit and management rights
  * **View** – read-only access
  * **No access** – page hidden
* Update or remove users anytime.
* Delegate management rights safely using **Editor** and **Viewer** roles.

***

### Typical Use Cases

* Dealers managing multiple client accounts.
* Corporations dividing permissions between departments (e.g., Security vs. Operations).
* Integrators running multi-tenant deployments where visibility must be restricted.
