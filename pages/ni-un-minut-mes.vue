<template>
  <div class="sense-govern">
    <div class="sense-govern-header">
      <div class="container">
        <div class="hashtag"><span>{{ $t('sense_govern.hashtag') }}</span></div>
        <timer />
        <div class="lawless"><span>{{ $t('sense_govern.lawless') }}</span></div>
      </div>
    </div>
    <div class="sense-govern-content">
      <div class="container">
        <counter :increment="1" symbol="kg" color="orange">Text</counter>
      </div>
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
      align-items: center;
      justify-content: center;
      background-image: url(../assets/images/lawless.jpg);
      background-size: cover;
      background-position: center;
      padding: 15vh 0;
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

  .hashtag {
    text-align: center;

    span {
      display: inline-block;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      background: $white;
      color: $navy;
      padding: .5rem 1rem;
      border-radius: $border-radius;
    }
  }

  @include media-breakpoint-down(lg) {
    .lawless span {
      font-size: 3.5rem;
    }

    .hashtag span {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      padding: .25rem .75rem;
    }
  }

  @include media-breakpoint-down(md) {
    .lawless span {
      font-size: 2.5rem;
    }

    .hashtag span {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
      padding: .15rem .5rem;
    }
  }

  @include media-breakpoint-down(sm) {
    .lawless span {
      font-size: 1.5rem;
      padding: .5rem 1rem;
      border-radius: $border-radius;
    }

    .hashtag span {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      padding: 0.25rem .5rem;
    }
  }
</style>
