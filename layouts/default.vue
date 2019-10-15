<template>
  <div>
    <button @click="localeChange('val')">Val</button>
    <button @click="localeChange('cas')">Cas</button>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    localeChange (newLocale) {
      this.$i18n.locale = newLocale
      this.$router.push('/' + (newLocale === 'cas' ? 'cas' : ''))
    }
  }
}
</script>

<style>
</style>
