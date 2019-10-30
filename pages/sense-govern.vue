<template>
  <div class="sense-govern">
    <div class="sense-govern-header">
      <div class="container">
        <timer />
        <div class="lawless"><span>sense govern</span></div>
      </div>
    </div>
    <div class="sense-govern-content">
      <div class="container"><counter :increment="1" symbol="kg">Text</counter></div>
    </div>
  </div>
</template>

<script>
  import Timer from '@/components/Timer'
  import Counter from '@/components/Counter'

  export default {
    components: {
      Timer,
      Counter
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .sense-govern {
    &-header {
      display: flex;
      height: 75vh;
      align-items: center;
      justify-content: center;
      background-image: url(../assets/images/lawless.jpg);
      background-size: cover;
    }

    &-content {
      background-color: $navy;
      color: $white;
      padding-top: 2rem;
    }
  }

  .lawless {
    text-align: center;

    span {
      font-size: 4rem;
      background: $red;
      font-weight: bold;
      border-radius: $border-radius-lg;
      padding: .5rem 1.5rem;
    }
  }

  @include media-breakpoint-down(lg) {
    .lawless span {
      font-size: 3.5rem;
    }
  }

  @include media-breakpoint-down(md) {
    .lawless span {
      font-size: 2.5rem;
    }
  }

  @include media-breakpoint-down(sm) {
    .lawless span {
      font-size: 1.5rem;
      padding: .5rem 1rem;
    }
  }
</style>
