<template>
  <div>
    <ul class="programa-section-index section-3">
      <li><nuxt-link to="/programa/garantim-drets">0. Introducció</nuxt-link></li>
      <li><nuxt-link to="/programa/garantim-drets/emergencia-climatica">1. Drets de la ciutadania</nuxt-link></li>
      <li><nuxt-link to="/programa/garantim-drets/agricultura">2. Protecció de les pensions, infancia i families</nuxt-link></li>
      <li><nuxt-link to="/programa/garantim-drets/desenvolupament-rural">3. Feminismes</nuxt-link></li>
      <li><nuxt-link to="/programa/garantim-drets/territori">4. Joves</nuxt-link></li>
      <li><nuxt-link to="/programa/garantim-drets/model-economic-per-a-la-transicio-ecologica">5. Drets LGTBI</nuxt-link></li>
      <li><nuxt-link to="/programa/garantim-drets/nou-model-turistic">6. Cooperació</nuxt-link></li>
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
  @import '../../sass/variables';

  .programa-section-index.section-3 {
    a {
      color: $teal;
      border-color: $teal;

      &.nuxt-link-exact-active {
        background: $teal;
        color: $white;

        &:hover {
          background: darken($teal, 10%);
          border-color: darken($teal, 10%);
        }
      }

      &:hover {
        background: mix($teal, $white, 10%);
      }
    }
  }
</style>