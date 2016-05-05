<template>
  <div class="sidebar">
    <ul class="menu">
      <div class="menu-header">Components</div>
      <a class="menu-item"
		v-for="item in menu | orderBy 'id'" v-text="item.text" :href="'#/' + item.id"
	  ></a>
	</ul>
  </div>
</template>

<script>
let menu = [
  {
    id: 'ui-alert-docs',
    text: 'UiAlert'
  }, {
    id: 'ui-autocomplete-docs',
    text: 'UiAutocomplete'
  }, {
    id: 'ui-button-docs',
    text: 'UiButton'
  }, {
    id: 'ui-checkbox-docs',
    text: 'UiCheckbox'
  }, {
    id: 'ui-collapsible-docs',
    text: 'UiCollapsible'
  }, {
    id: 'ui-confirm-docs',
    text: 'UiConfirm'
  }, {
    id: 'ui-fab-docs',
    text: 'UiFab'
  }, {
    id: 'ui-icon-button-docs',
    text: 'UiIconButton'
  }, {
    id: 'ui-icon-docs',
    text: 'UiIcon'
  }, {
    id: 'ui-menu-docs',
    text: 'UiMenu'
  }, {
    id: 'ui-modal-docs',
    text: 'UiModal'
  }, {
    id: 'ui-popover-docs',
    text: 'UiPopover'
  }, {
    id: 'ui-preloader-docs',
    text: 'UiPreloader'
  }, {
    id: 'ui-progress-circular-docs',
    text: 'UiProgressCircular'
  }, {
    id: 'ui-progress-linear-docs',
    text: 'UiProgressLinear'
  }, {
    id: 'ui-radio-docs',
    text: 'UiRadio'
  }, {
    id: 'ui-radio-group-docs',
    text: 'UiRadioGroup'
  }, {
    id: 'ui-rating-docs',
    text: 'UiRating & UiRatingPreview'
  }, {
    id: 'ui-ripple-ink-docs',
    text: 'UiRippleInk'
  }, {
    id: 'ui-snackbar-docs',
    text: 'UiSnackbar & UiSnackbarContainer'
  }, {
    id: 'ui-switch-docs',
    text: 'UiSwitch'
  }, {
    id: 'ui-tabs-docs',
    text: 'UiTabs'
  }, {
    id: 'ui-textbox-docs',
    text: 'UiTextbox'
  }, {
    id: 'ui-toolbar-docs',
    text: 'UiToolbar'
  }, {
    id: 'ui-tooltip-docs',
    text: 'UiTooltip'
  }
]

export default {
  data() {
    return {
      menu,
    }
  },
}
</script>

<style>
</style>