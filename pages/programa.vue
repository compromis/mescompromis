<template>
  <div class="programa">
    <programa-header />
    <transition name="fade">
      <div :class="{'programa-container': true, 'container-has-content': $route.name !== 'programa___val' && $route.name !== 'programa___cas' }">
        <div class="container-fluid">
          <nuxt-child />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import ProgramaHeader from '@/components/ProgramaHeader'

  export default {
    components: {
      ProgramaHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .programa {
    background-color: $navy;
    padding-top: calc(100vh - 3.5rem);

    &-container {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: .5s ease-in-out;

      &.container-has-content {
        max-height: 10000000000000000px;
        opacity: 1;
        margin-top: -20vh;
      }
    }
  }
  
  .container-fluid {
    position: relative;
    background: $white;
    padding: 4rem;
    z-index: 200;
    max-width: 1340px;
    margin: 0 auto;
    border-radius: $border-radius;
    min-height: 2000px;
  }

  @include media-breakpoint-down(lg) { 
    .container-fluid {
      padding: 1rem;
    }
  }
</style>