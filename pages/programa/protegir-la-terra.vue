<template>
  <div>
    <ul class="programa-section-index section-1">
      <li><nuxt-link :to="localePath('programa-protegir-la-terra')">0. Introducció</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-emergencia-climatica')">1. Emergència climàtica</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-agricultura')">2. Agricultura</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-desenvolupament-rural')">3. Desenvolupament rural</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-territori')">4. Territori</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-model-economic-per-a-la-transicio-ecologica')">5. Model econòmic per a la transició ecològica</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-protegir-la-terra-nou-model-turistic')">6. Nou model turístic</nuxt-link></li>
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