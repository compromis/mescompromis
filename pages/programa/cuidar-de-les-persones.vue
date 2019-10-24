<template>
  <div>
    <ul class="programa-section-index section-2">
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones')">0. Introducció</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-politiques-inclusives')">1. Polítiques inclusives</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-educacio')">2. Educació</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-cultura')">3. Cultura</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-salut')">4. Salut</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-ocupacio')">5. Ocupació</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-habitatge')">6. Habitatge</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-esport')">7. Esport</nuxt-link></li>
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

  .programa-section-index.section-2 {
    a {
      color: #ffac06;
      border-color: #ffac06;

      &.nuxt-link-exact-active {
        background: #ffac06;
        color: $white;

        &:hover {
          background: darken(#ffac06, 10%);
          border-color: darken(#ffac06, 10%);
        }
      }

      &:hover {
        background: mix(#ffac06, $white, 10%);
      }
    }
  }
</style>