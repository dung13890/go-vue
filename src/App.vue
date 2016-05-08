<template>
  <My-Header></My-Header>
  <Vue-Helmet title="sss"><Vue-Helmet>
  <main>
    <div class="container">
      <div id="app" class="row">
        <Vue-Markdown class="col s12 m9 l10"></Vue-Markdown>
        <!-- div id="mian-text" class="col s12 m9 l10">
          <div id="introduction" class="section scrollspy">
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
          </div>
          <div id="structure" class="section scrollspy">
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
          </div>
          <div id="initialization" class="section scrollspy">
            <p>Content </p>
          </div>
        </div -->
        <div class="col hide-on-small-only m3 l2">
          <div id="my-toc" class="toc-wrapper pin-top">
            <!-- ul class="section table-of-contents">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#structure">Structure</a></li>
              <li><a href="#initialization">Intialization</a></li>
            </ul -->
          </div>
        </div>
      </div>
    </div>
  </main>
  <My-Footer><My-Footer>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import VueMarkdown from './components/VueMarkdown'
import VueHelmet from 'vue-helmet'

$(document).ready(function() {
  $('.scrollspy').scrollSpy()
})

export default {
  components: {
    MyHeader,
    MyFooter,
    VueMarkdown,
    VueHelmet,
  },
  data: () => ({
    out: '222',
  }),
  events: {
    'parsed': function (htmlString) {
      console.log(6868, htmlString)
      this.out = htmlString
    },
  },
}
</script>

<style>
header, main, footer {
  padding-left: 240px;
}
@media only screen and (max-width : 992px) {
  header, main, footer {
    padding-left: 0;
  }
}
</style>
