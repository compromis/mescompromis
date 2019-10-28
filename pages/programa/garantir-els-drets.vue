<template>
  <div>
    <ul class="programa-section-index section-3">
      <li><nuxt-link :to="localePath('programa-garantir-els-drets')">0. {{ $t('programa.intro') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-garantir-els-drets-drets-de-la-ciutadania')">1. {{ $t('programa.31') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-garantir-els-drets-proteccio-pensions')">2. {{ $t('programa.32') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-garantir-els-drets-feminismes')">3. {{ $t('programa.33') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-garantir-els-drets-joves')">4. {{ $t('programa.34') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-garantir-els-drets-drets-lgtbi')">5. {{ $t('programa.35') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-garantir-els-drets-cooperacio')">6. {{ $t('programa.36') }}</nuxt-link></li>
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