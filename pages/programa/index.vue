<template>
  <div class="programa-index">
    <div v-if="$i18n.locale === 'val'" v-html="contentVal.html"></div>
    <div v-if="$i18n.locale === 'cas'" v-html="contentCas.html"></div>
  </div>
</template>

<script>
  import contentVal from '@/content/val/programa/index.md'
  import contentCas from '@/content/cas/programa/index.md'

  export default {
    data () {
      return {
        contentVal,
        contentCas
      }
    },

    head () {
      return {
        title: 'Programa - Compromís-Más País'
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>