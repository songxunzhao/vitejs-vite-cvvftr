<template>
  <h1>{{ msg }}</h1>
  <p class="import-meta-url">{{ url }}</p>
  <Button>CommonButton</Button>
  <ImportType></ImportType>
</template>

<script>
import Button from '../components/button'
import ImportType from "../components/ImportType.vue";

export default {
  async setup() {
    const url = import.meta.env.SSR
      ? import.meta.url
      : document.querySelector('.import-meta-url').textContent
    return {
      msg: 'About',
      url
    }
  },
  components: {
    ImportType,
    Button
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
