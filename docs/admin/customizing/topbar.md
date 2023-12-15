# Adding a Topbar Action
A top bar action is a Vue component that is hooked into the top bar of the administration.

## Registration
All plugin registrations take place in the `App.vue` file. It is recommended to use the onMounted hook here.
The Vue component must first be imported.

```js
import MyTopbarPlugin from '@/components/MyTopbarPlugin.vue'
...
onMounted(() => {
    dbStore.state["topbar.actions"].push(MyTopbarPlugin)
})
```

## The Component
This is a normal Vue component that does not have to adhere to any api. However, all Pinia stores can be accessed and thus interacted with the administration.