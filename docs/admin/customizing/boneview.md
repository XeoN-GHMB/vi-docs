# Adding a new Bone View Widget
Currently, registered view widgets are only used in the list handler. Only existing bones can be overwritten. No new cells can be added.

## Registration
All plugin registrations take place in the `App.vue` file. It is recommended to use the onMounted hook here.
The Vue component must first be imported.

```js
import MyCustomStringBoneView from '@/components/MyCustomStringBoneView.vue'
...
onMounted(() => {
    dbStore.state["bones.view"] = {
        "str.custom": MyCustomStringBoneView
    }
})
```

### ViUR Core Bone Types
To set a custom bone type, you do not need to create a new bone and inherit it from another Bone.
Instead, you can set the type according to the definition in the skeleton.
```python

url = StringBone(descr = "My Custom Bone") 
url.type = "str.custom"

```

## The Component
he widget must provide the following `props`:

- `bonename`: the bonename
- `skel`: the skeleton
- `structure`: the structure
- `idx`: current index in list
- `rendered` the default rendered String

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