# Customizing the Fluidpageelement
The element is used to display the individual blocks of the Fluidpage. However, this is a complex, as yet unrefactored component

## Registration
All plugin registrations take place in the `App.vue` file. It is recommended to use the onMounted hook here.
The Vue component must first be imported.

```js
import Element from '@/components/Element.vue'
...
onMounted(() => {
    dbStore.state["fluidpage.element"] = Element
})
```

## The Component
Currently, the easiest way is to copy and customize the existing component from the vue-components.