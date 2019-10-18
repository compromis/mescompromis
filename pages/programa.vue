<template>
  <div class="programa">
    <programa-header />
    <transition name="fade">
      <div class="container-fluid" v-if="$route.name !== 'programa___val' && $route.name !== 'programa___cas'">
        <nuxt-child />
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
    padding-top: 100vh;
  }
  
  .container-fluid {
    position: relative;
    background: $white;
    padding: 4rem;
    
    z-index: 200;
    min-height: 2000px;
    max-width: 1340px;
    margin: 0 auto;
    margin-top: -25vh;
  }
</style>