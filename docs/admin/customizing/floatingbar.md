# Adding a Floatingbar Action
A floatingbar action is a Vue component that is hooked into the floatingbar of a handler of the administration.

## Registration
All plugin registrations take place in the `App.vue` file. It is recommended to use the onMounted hook here.
The Vue component must first be imported.

```js
import MyFloatingbarPlugin from '@/components/MyFloatingbarPlugin.vue'
...
onMounted(() => {
    dbStore.state["floatingbar.actions"].push(MyFloatingbarPlugin)
})
```

## The Component
All Pinia stores can be accessed and thus interacted with the administration. 
In addition to the Pinia stores, various handler objects are provided so that they can be used to manipulate the handlers. These include the following objects:

- `handlerState`: reactive State of the handler, like selections
- `currentlist`: the current RequestList instance, to change filters, or other stuff
- `reloadAction`: trigger the handler internal reload action
- `nextpage`: fetch the next batch if possible
- `setLimit`: change the batch size

These objects can be injected and used as usual in vueJs.
```js
const handlerState = inject("handlerState")
```