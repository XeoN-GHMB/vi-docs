# Adding a new Bone Edit Widget
A Bone Edit widget is a Vue component that is registered with Type.

## Registration
All plugin registrations take place in the `App.vue` file. It is recommended to use the onMounted hook here.
The Vue component must first be imported.

```js
import MyCustomStringBone from '@/components/MyCustomStringBone.vue'
import { addBoneWidget } from "@viur/vue-utils/bones/edit/index"
...
onMounted(() => {
    addBoneWidget("str.custom",MyCustomStringBone)
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
The widget must provide the following `props`:

- `name`: the bonename
- `value`: the bone value
- `index`: in case of a multiple bone the position
- `lang`: in case of a multilanguage bone the current language

In addition you might want to use the provided 'boneState':
```js
const boneState = inject("boneState")
```
The boneState contains the following informations:
```js
const state: any = reactive({
      bonestructure: the bone structure from core,
      bonevalue: current Value,
      multilanguage: Boolean,
      languages: languages,
      readonly: Boolean,
      required: Boolean,
      hasTooltip: Boolean,
      multiple: Boolean,
      params: boneparams,
      isEmpty:Boolean,
      errorMessages: Array
    })
```