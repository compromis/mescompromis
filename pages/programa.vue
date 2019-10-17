<template>
  <div class="programa">
    <programa-header />
    <transition name="fade">
      <div class="container" v-if="$route.name !== 'programa___val'">
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
  
  .container {
    position: relative;
    background: $white;
    padding: 4rem;
    margin-top: -25vh;
    z-index: 200;
    min-height: 2000px;
  }
</style>