<template>
  <div>
    <ul class="programa-section-index section-2">
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones')">0. {{ $t('programa.intro') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-politiques-inclusives')">1. {{ $t('programa.21') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-educacio')">2. {{ $t('programa.22') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-cultura')">3. {{ $t('programa.23') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-salut')">4. {{ $t('programa.24') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-ocupacio')">5. {{ $t('programa.25') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-habitatge')">6. {{ $t('programa.26') }}</nuxt-link></li>
      <li><nuxt-link :to="localePath('programa-cuidar-de-les-persones-esport')">7. {{ $t('programa.27') }}</nuxt-link></li>
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