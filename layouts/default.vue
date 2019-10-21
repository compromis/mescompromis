<template>
  <div>
    <mes-nav />
    <transition name="page-fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import MesNav from '@/components/MesNav'

export default {
  components: {
    MesNav
  }
}
</script>

<style>
</style>
