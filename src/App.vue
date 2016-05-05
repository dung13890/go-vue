<template>
  <div id="app">
    <Sidebar></Sidebar>
    <Navbar></Navbar>
    <ui-alert type="success">成功了！！！</ui-alert>
    <ui-menu :options="menuOptions"></ui-menu>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

let menuOptions = [
  {
    id: 'edit',
    text: 'Edit',
    icon: 'edit',
    keyboardShortcut: 'Ctrl+E'
  }, {
    id: 'duplicate',
    text: 'Duplicate',
    icon: 'content_copy',
    keyboardShortcut: 'Ctrl+D'
  }, {
    id: 'share',
    text: 'Share',
    icon: 'share',
    keyboardShortcut: 'Ctrl+Shift+S',
    disabled: true
  }, {
    type: 'divider'
  }, {
    id: 'delete',
    text: 'Delete',
    icon: 'delete',
    keyboardShortcut: 'Del'
  }
]

export default {
  data() {
    return {
      showSidebar: false,
      currentComponent: menu[0],
      menu,
      menuOptions,
    }
  },
  components: {
    Navbar,
    Sidebar,
  }
}
</script>

<style>
@import './assets/css/material-icons.css';
@import './assets/css/keen-ui.min.css';
</style>
