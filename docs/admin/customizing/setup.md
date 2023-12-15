# Administration Development
To develop on the administration, the vi-admin repository is mounted as a submodule in the project under sources. 
It must be ensured that the submodules contained are also checked out.

The vue-utils and vue-components packages can then be added for editing using the following command. The sources for this can then be found under /packages.

```zsh
npm run install-dev
```
The local package changes should not be committed. The changes to the vue-utils and vue-components must be built into new npm packages. After the updates are available as new versions, they can be installed with the following command.
```zsh
npm run install-prod
```

# Add a Custom Admin
There is currently no automatic or simple way to make the admin plugin-compatible. You can proceed as follows:

- download the vi-admin source code
- put the code unter sources/admin
- add vue-utils and vue-components as submodule unter sources/admin/packages/vue-utils and sources/admin/packages/vue-components

With this setup you can use the install-dev commands described above