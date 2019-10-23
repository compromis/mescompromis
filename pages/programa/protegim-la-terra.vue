<template>
  <div>
    <ul>
      <li><nuxt-link to="/programa/protegim-la-terra/">Emergència climàtica</nuxt-link></li>
      <li><nuxt-link to="/programa/protegim-la-terra/agricultura">Agricultura</nuxt-link></li>
      <li><nuxt-link to="/programa/protegim-la-terra/desenvolupament-rural">Desenvolupament rural</nuxt-link></li>
      <li><nuxt-link to="/programa/protegim-la-terra/territori">Territori</nuxt-link></li>
      <li><nuxt-link to="/programa/protegim-la-terra/model-economic-per-a-la-transicio-ecologica">Model econòmic per a la transició ecològica</nuxt-link></li>
      <li><nuxt-link to="/programa/protegim-la-terra/nou-model-turistic">Nou model turístic</nuxt-link></li>
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