# Why ABAC Instead of RBAC

### What Is ABAC?

Kilo uses **Attribute-Based Access Control (ABAC)** to manage who can view or edit different parts of the platform.\
ABAC is a modern, flexible access-control model designed to scale for **enterprise** and **multi-tenant** use.

Unlike traditional **Role-Based Access Control (RBAC)**, which limits users to predefined roles (like Admin, Editor, or Viewer), ABAC lets permissions depend on multiple **attributes** — such as organization, department, assigned pages, or user context.\
This allows Kilo to dynamically evaluate permissions for each user, organization, and resource, rather than relying on rigid roles.

***

### Why ABAC Instead of RBAC

The decision to use ABAC was deliberate.\
RBAC models are rigid — they work with static roles that become hard to maintain as organizations grow or as users join multiple clients and teams.

ABAC, by contrast, is **dynamic and context-aware**, making it ideal for **dealers**, **corporate clients**, and **large organizations** with complex structures.

With ABAC you get:

* **Granular permissions** – control access per page, module, or feature.
* **Dynamic rules** – access adapts automatically as user attributes change.
* **Reduced administrative overhead** – no need to manage dozens of static roles.
* **Enterprise scalability** – easily apply consistent policies across sub-organizations.

***

### Why It Matters for Kilo Users

ABAC is deeply integrated into how Kilo handles **Organizations**, **Users**, and **multi-account access**.\
When combined with Kilo’s organizational model, ABAC allows for full flexibility without sacrificing control or security.

#### Multi-Organization Support

Every Kilo account automatically includes one organization upon registration, but users can **create or join multiple organizations**.\
Each organization is completely isolated — it has its own **Owner**, **user list**, **devices**, and **permissions**.\
This makes it possible to:

* Separate access for different clients, departments, or projects.
* Operate as a **dealer or integrator**, managing multiple client organizations under one Kilo account.
* Assign different **owners** to each organization for distributed management.

> **Dealers of the Kilo platform** can create client organizations under their own account so that all connected client devices are properly attributed to them.\
> This ensures they **receive credit for devices** deployed under each client organization while maintaining complete separation of client data.

***

#### Cross-Organization Collaboration

With ABAC, a user may already have their **own Kilo account** (with personal devices or organizations) and still be added to another organization with **restricted access**.\
For example:

* A system integrator managing their own devices can also be invited to a client’s organization as a **Viewer** to monitor performance.
* A technician can work as an **Editor** for a service partner but as a **Viewer** in the manufacturer’s organization.

This structure enables smooth collaboration across independent teams while preserving privacy, security, and ownership boundaries.

***

### Key Capabilities

* Invite users to your organization and assign **page-level access** (Edit, View, or No Access).
* Define detailed permissions per feature or module.
* Update or remove users anytime without affecting other organizations.
* Delegate management safely using **Editor** and **Viewer** roles.
* Operate multiple organizations from a single account with independent access rules.

***

### Typical Use Cases

* **Dealers managing multiple client accounts** and earning credit for connected client devices.
* **Corporations** dividing permissions between departments (for example, Operations, Finance, Security).
* **Integrators** managing many customer environments with isolated data and access.
* **Technicians or consultants** who belong to multiple organizations with different access levels.

***

> **In summary:**\
> ABAC enables Kilo to provide enterprise-grade, flexible, and secure access management that adapts to real-world business needs — from single organizations to multi-client dealer networks.
