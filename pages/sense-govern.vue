<template>
  <div class="sense-govern">
    <timer class="timer" />
  </div>
</template>

<script>
  import Timer from '@/components/Timer'

  export default {
    components: {
      Timer
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .timer {
    background: $navy;
    color: $white;
  }
</style>