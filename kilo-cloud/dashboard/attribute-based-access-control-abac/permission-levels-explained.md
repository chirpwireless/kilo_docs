# Permission Levels Explained

The Kilo platform supports team collaboration and organizational management through **Attribute-Based Access Control (ABAC)**.\
Access is structured around **Organizations**, which represent businesses, clients, or operational groups using the Kilo platform.

### Organization

An **Organization** in Kilo is the central administrative entity that groups together users, devices, and subscriptions under one management domain.\
Organizations allow companies or partners to operate on the platform with clear ownership, billing, and access boundaries.

Every organization has:

* A unique **name** and **type** (for example, “Serg’s IoT”).
* Its own **Users**, **Subscription**, and **Settings** pages.
* A single **Owner**, who holds ultimate administrative control.

#### Organization Settings

Owners can configure and manage the organization through the **Settings** page:

* **Edit organization name**
* **Transfer ownership** to another invited user
  * Ownership transfer must be confirmed by the current Owner.
  * The new Owner gains full control after accepting ownership.
* **Manage users**, including adding, editing, or removing members
* **Define access rights** across all pages and modules

Authorized users can log in, select their organization, and navigate between **Users**, **Subscription**, and **Settings** directly from the dashboard sidebar.

***

### Owner

The **Organization Owner** is the highest-level administrator with full authority over the organization’s structure, settings, and user access.\
This role is automatically assigned to the account that created the organization or transferred to another user by the current Owner.

**Capabilities:**

* Full visibility of all organization users
* Can **add new users** by entering their name and email
* Can assign per-page permissions (**Edit**, **View**, or **No access**)
* Must click **Add user** to confirm and send invitations
* Can **edit or remove** users at any time
* Can manage **Organization Settings**, including renaming and ownership transfer
* Cannot be deleted or modified by any other user

> **Example:** As an organization owner, you have centralized control over your organization—you can manage its settings, define access rights, and structure internal roles so your team can collaborate efficiently.

***

### User

A **User** is anyone invited to join an organization by the **Owner**.\
Users can have either **Editor** or **Viewer** access, depending on the permissions assigned to them.

It’s important to note that a user may already have their **own Kilo account** that contains personal devices, data, or even their own organizations.\
For example, you might have created and used your own Kilo account to manage devices. Later, someone else can invite you to **their organization** — where you’ll have **limited rights** based on the permissions they assign (for example, _View-only_ or _Edit access_ for certain pages).

This design enables seamless collaboration between organizations and users across the platform.\
A single user can:

* Manage their own devices and organizations.
* Be a member of multiple organizations.
* Have different permissions in each organization (for example, Owner in one, Viewer in another).

Once the invited user accepts the email invitation:

* They appear in the organization’s **user list**.
* They gain access only to the pages specified by the **Owner** or **Editor**.
* Their permissions can later be updated or revoked by the **Owner** or an authorized **Editor**.

This ensures that each employee, contractor, or partner sees exactly what they need — and nothing more.

***

### Editor

An **Editor** has nearly the same rights as the Owner but lacks certain administrative privileges.\
Editors are typically department leads or technical managers responsible for daily operations inside the platform.

**Capabilities:**

* Has access to all pages and modules assigned by the Owner
* Can **create, edit, and manage** data across those pages
* Can **add, edit, or remove** users if given organization-management rights
* Can assign **Edit**, **View**, or **No access** permissions to users
* **Cannot delete or modify** the Owner’s account
* **Cannot access** the **Organization Settings** page

> **In essence:** Editors have complete operational control for managing platform content and users, but they cannot change core administrative configurations such as billing, naming, or ownership transfer.

***

### Viewer

A **Viewer** is a read-only member of the organization.\
This role is designed for users who need visibility into data but should not modify it.

**Capabilities:**

* Sees only the pages explicitly assigned by the Owner or Editor
* Can view dashboards, reports, and device data
* Cannot create, edit, or delete entities
* Cannot manage users or settings

> **In essence:** Viewers can monitor the organization’s activity but cannot take any actions that alter data or configurations.

***

### Summary Table

| Level      | View Users  | Add/Edit Users | Assign Page Access | Modify Owner | Organization Settings | Edit Platform Data | View Platform Data |
| ---------- | ----------- | -------------- | ------------------ | ------------ | --------------------- | ------------------ | ------------------ |
| **Owner**  | ✅           | ✅              | ✅                  | ❌            | ✅                     | ✅                  | ✅                  |
| **Editor** | ✅           | ✅ (delegated)  | ✅                  | ❌            | ❌                     | ✅                  | ✅                  |
| **Viewer** | ✅ (limited) | ❌              | ❌                  | ❌            | ❌                     | ❌                  | ✅                  |

***

### Business Value

This permission model provides a foundation for scalable team collaboration and organizational management.\
It allows organizations to:

* Define clear roles and access levels
* Maintain operational security while enabling collaboration
* Manage multiple users efficiently across teams or departments

> **In short:** ABAC for organizations ensures flexibility, scalability, and control—essential for corporate clients and platform dealers managing multiple users and internal hierarchies.
