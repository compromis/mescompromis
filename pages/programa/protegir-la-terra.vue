<template>
  <div>
    <ul class="programa-section-index section-1">
      <li><nuxt-link :to="localePath('programa-protegir-la-terra')">0. {{ $t('programa.intro') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-emergencia-climatica')">1. {{ $t('programa.11') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-agricultura')">2. {{ $t('programa.12') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-desenvolupament-rural')">3. {{ $t('programa.13') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-territori')">4. {{ $t('programa.14') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-model-economic-per-a-la-transicio-ecologica')">5. {{ $t('programa.15') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-nou-model-turistic')">6. {{ $t('programa.16') }}</nuxt-link></li>
    </ul>
    <div class="programa-text">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>