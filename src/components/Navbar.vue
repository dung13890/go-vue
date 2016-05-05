<template>
  <div class="navbar">
    <ui-toolbar brand="Index" title="GxxGle" show-brand flat>
      <div slot="actions">
        <ui-icon-button type="flat" icon="arrow_back">
        </ui-icon-button>
      <div>
    </ui-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [{
        id: 'settings',
        text: 'Settings'
      }, {
        id: 'about',
        text: 'About'
      }, {
        id: 'help',
        text: 'Help'
      }]
    }
  },
}
</script>