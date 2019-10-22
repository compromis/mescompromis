<template>
  <div>
    <mes-nav />
    <transition name="page-fade" mode="out-in">
      <nuxt />
    </transition>
    <mes-footer />
  </div>
</template>

<script>
import MesNav from '@/components/MesNav'
import MesFooter from '@/components/MesFooter'

export default {
  components: {
    MesNav,
    MesFooter
  }
}
</script>

<style>
</style>
