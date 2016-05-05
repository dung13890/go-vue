<template>
  <div id="app">
    <hello></hello>
    <ui-button :color="danger">test2</ui-button>
  </div>
</template>

<script>
import Hello from './components/Hello'
import { UiButton } from 'keen-ui'

export default {
  components: {
    Hello,
    UiButton,
  }
}
</script>

<style>
</style>
