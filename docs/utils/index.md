# Overview

The [vue-utils](https://github.com/viur-framework/vi-vue-utils) serve as an interface between the [ViUR framework](https://www.viur.dev/) and the frontend in [Vue.js](https://vuejs.org/).

- HTTP Requests from ViUR backend.
- Login screen for Vue.js applications with a ViUR backend.
- Auto rendering of so called ViUR backend skeletons in a Vue.js application.

[## Tips and tricks for your individual bones](./tips.md)

## HTTP Requests

```js
import {Request, ListRequest, destroyStore} from '@viur/vue-utils'

const simpleRequest = ref() //reactive variable
Request.get("https://jsonplaceholder.typicode.com/todos/1").then(async (resp: Response)=>{
    simpleRequest.value = await resp.json() //decode and set reactive variable
})


let userList = ListRequest(
    "teststore", // unqiue name of the Pinia store
    {url:"/user/list", params:{"limit":10}}
)

//fetches all users
userList.fetchAll().catch((e)=>{
    console.log(e)
    console.log(e.statusCode)
    console.log(e.statusText)
    console.log(e.response)
})

// if the results and the request is not needed anymore
destroyStore(userList)
```

## Login Screen

coming soon...

## Bone rendering

::: code-group

```js:line-numbers [main.js]
// Global Configuration in main.js of your Vue.js application 
import { createApp } from "vue";

// !important use imports before importing the App.vue
import bone from "@viur/vue-utils/bones/edit/bone.vue";
import Wrapper_nested from "@viur/vue-utils/bones/edit/wrapper_nested.vue";
import App from "./App.vue";

// always import as dependency for auto rendering
import CKEditor from "@ckeditor/ckeditor5-vue";

const app = createApp(App);

// auto rendering dependency
app.use(CKEditor);

// registering as components
app.component("Bone", bone);
app.component("Wrapper_nested", Wrapper_nested);

app.mount("#app");
```

```vue:line-numbers [MyComponent.vue]
// Example component for auto rendering
<template>
<div v-for="boneName in state.structure" :key="boneName">
    <bone
        :is="getBoneWidget(state.structure[boneName].type)"
        v-show="state.structure[boneName].visible"
        :name="boneName"
        :structure="state.structure"
        :errors="state.errors[boneName] ? state.errors[boneName] : []"
        :skel="state.skellist"
        @change="changeEvent(boneName, $event)"
    >
    </bone>
</div>

// implement a button for example if u want to edit data after rendering
<button @click="saveData">
    Save
</button>
</template>

<script>
import { onBeforeMount, reactive } from "vue";
import { Request } from "@viur/vue-utils";
import { getBoneWidget } from "@viur/vue-utils/bones/edit/index";

export default {
    props:{},
    components:[],
    setup(props, ctx) {
        const state = reactive({
            skellist: [],
            structure: {},
            errors: {},
            formData: {},
        })

        function changeEvent(boneName, ev) {
            formData[boneName] = ev.value
        }

        function saveData() {
            // use formData to update data on ViUR server with 'Request.securePost()'.

            // use your code here
        }

        onBeforeMount() {
            // use Request to update state.skellist and state.structure
            // Note: u can use component props instead and use the Request class in parent components

            // use your code here
        }

        return{
            state,
            getBoneWidget,
            changeEvent,
            saveData,
        }
    }
}
</script>

```

:::

## Error: textbone --- ckeditor has no default export

only if you use only JS and not TS

in vite.config.mjs add the following code

before build-Object:

```js
optimizeDeps: {
    include: ['@viur/ckeditor5-build-classic'],
},
```

in Build-Object add after rollupOptions

```js
commonjsOptions: {
    include: ['@viur/ckeditor5-build-classic'],
}
````
