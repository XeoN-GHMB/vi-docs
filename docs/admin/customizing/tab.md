# Add a custom Tab
To add your own tab in the Admin, you must add your own route and define a view that is to be loaded when you enter the route.

## create a view
views are usually stored in the `src` folder in a `views` folder. The new view could look like this, for example, and may have the name `myview.vue`
```js
<template>
    Hello myview
</template>
<script>
    import {onMounted} from "vue";
    import {useDBStore} from "@viur/vue-components/stores/db";
    import {useContextStore} from "@viur/vue-components/stores/context";
    export default {
      props: {
      },
      setup(props, context) {
        onMounted(()=>{
          const dbStore = useDBStore()
          const contextStore = useContextStore()
          const tab = dbStore.getActiveTab() // global tab informations 
          // tab['name'] ="myview" //replace a Tab name
          // tab['icon'] = "user" // replace a Tab icon
    
          //contextStore.getCurrentContext()['selection'] #get selected entry, only available if customactions are used.
        })
        return {}
      }
    }
</script>
<style scoped>

</style>
```

## add a route to the view
To add a new route, it should be entered under `routes/index.ts`. For our myview view component it could look like this:
```js
...
const routes = [
  //define new Routes
  {
    path: "/app/myview",
    name: "myview",
    props: true,
    component: () => import("@/views/myview.vue")
  }
]
...
```
The admin works with a prefix to separate different applications from each other in the future. So all routes of the admin application start with `/db/`. 
For your own routes you should also use a prefix to separate your routes from the rest of the admin.

For more information about the vue router, see the documentation: https://router.vuejs.org

## navigate to the route
There are now 2 ways to navigate to this route. You can reach the route via a CustomAction or via your own navigation.

### Custom Action in Admininfo
In this case we add the route as custom action to a existing module. 
```py
adminInfo = {
            "name": "TestModul",
            "actions": ["myview"], # name of the custom action
            "customActions": {
                "myview": {
                    "name"   : "open My view",  # button name
                    "access" : ["root"],
                    "icon"   : "default___download",  # icon
                    "action" : "route", # type
                    "url"    : "/dt/myview",  # our route
                    "enabled": "True" # "1" if a selection is required for activation
                }
            },
        }

```

### open a Tab from any Place
Any route can be opened at any point via the db pinia Store. The addOpened function can be used for this purpose. 
The function can include the following parameters:

- `route`: route object, required
- `module`: modulename, optional
- `view`: view number of a defined moduleview, optional
- `name`: tab name, optional
- `icon`: tab icon, optional
- `library`: tab icon library, optional
- `contextInheritance` should we transfer the context, optional

The following call can therefore be used to create an independent tab:
```js
import { useRouter } from "vue-router"
...
const router = useRouter()
let route = router.resolve("/dt/myview")

dbStore.addOpened(route, null, null, 'My View', 'user')

```


