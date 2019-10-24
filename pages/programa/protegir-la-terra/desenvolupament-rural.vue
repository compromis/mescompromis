<template>
  <div>
    <div v-if="$i18n.locale === 'val'" v-html="contentVal.html"></div>
    <div v-if="$i18n.locale === 'cas'" v-html="contentCas.html"></div>
  </div>
</template>

<script>
  import contentVal from '@/content/val/programa/protegir-la-terra/desenvolupament-rural.md'
  import contentCas from '@/content/cas/programa/protegir-la-terra/desenvolupament-rural.md'

  export default {
    data () {
      return {
        contentVal,
        contentCas
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>