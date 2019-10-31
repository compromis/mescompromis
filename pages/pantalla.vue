<template>
  <fullscreen ref="fullscreen" @change="fullscreenChange">
    <div class="sense-govern">
      <div class="sense-govern-header">
        <div class="container">
          <div class="hashtag"><span>{{ $t('sense_govern.hashtag') }}</span></div>
          <b-carousel
            v-model="slide"
            :interval="10000">
            <b-carousel-slide>
              <timer />
              <div class="lawless"><span>{{ $t('sense_govern.lawless') }}</span></div>
            </b-carousel-slide>
            <b-carousel-slide>
              <counter :increment="2.51458" symbol="€" color="orange" is-big>Hem deixat de rebre els valencians i les valencianes mentre no es reforma la Llei de Finançament</counter> 
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <button type="button" @click="toggleFullscreen" v-if="!fullscreen" class="fullscreen-button">Fullscreen</button>
  </fullscreen>
</template>

<script>
  import Timer from '@/components/Timer'
  import Counter from '@/components/Counter'

  export default {
    components: {
      Timer,
      Counter
    },

    layout: 'bare',

    data () {
      return {
        fullscreen: false,
        slide: 0
      }
    },

    methods: {
      fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen
      },

      toggleFullscreen () {
        this.$refs.fullscreen.toggle();
      },
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';

  .sense-govern {
    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(../assets/images/lawless.jpg);
      background-size: cover;
      background-position: center;
      height: 100vh;
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

  .fullscreen {
    background: $body-bg !important;

    &-button {
      position: fixed;
      top: 2rem;
      right: 2rem;
      z-index: 1000;
    }
  }

  .carousel {
    &-item {
      height: 500px;
      width: 100%;
    }
  }

  .counter {
    &-number {
      font-size: 8rem !important;
    }

    &-description {
      display: inline-block;
      font-size: 1.75rem;
      text-align: left;
      background: $navy;
      color: $white;
      border-radius: $border-radius-lg;
      padding: 1rem;
      width: 100%;
      max-width: 100% !important;
      margin: 0 auto;
    }
  }

</style>
