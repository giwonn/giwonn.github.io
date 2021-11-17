<template>
	<div id="editor"/>
  <button id="submit">submit</button>
</template>
<script>
import Editor from '@toast-ui/vue-editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
export default {
    components: {
        editor: Editor,
    }
}
</script>