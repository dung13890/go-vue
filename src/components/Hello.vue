<template>
  <div class="hello">
    <ui-button>test</ui-button>
  </div>
</template>

<script>
import { UiButton } from 'keen-ui'

export default {
  components: {
    UiButton,
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
