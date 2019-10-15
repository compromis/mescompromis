<template>
  <div>
    <h1>{{ $t('greeting') }}</h1>
    <hero />
  </div>
</template>

<script>
import Hero from '../components/Hero'

export default {
  components: {
    Hero
  },
}
</script>

<style>

</style>
