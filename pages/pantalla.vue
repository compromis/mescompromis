<template>
  <fullscreen ref="fullscreen" @change="fullscreenChange">
    <transition name="fade">
    <div v-show="!showVideo" class="sense-govern">
      <div class="sense-govern-header">
        <div class="container">
          <div class="hashtag"><span>niunminutmes.com</span></div>
            <b-carousel
              v-model="slide"
              :interval="10000">
              <b-carousel-slide>
                <timer />
                <div class="lawless"><span>{{ $t('sense_govern.lawless') }}</span></div>
              </b-carousel-slide>
              <b-carousel-slide>
                <counter :increment="2.51458" symbol="€" color="orange" is-big>{{ $t('sense_govern.counter_1') }}</counter> 
              </b-carousel-slide>
              <b-carousel-slide>
                <counter :increment="0.23" symbol="t" color="yellow" is-time is-big>{{ $t('sense_govern.counter_2') }}</counter>
              </b-carousel-slide>
              <b-carousel-slide>
                <counter :increment="0.04" symbol="t" color="teal" is-time is-big>{{ $t('sense_govern.counter_3') }}</counter>
              </b-carousel-slide>
              <b-carousel-slide>
                <counter :increment="1.0327" symbol="t" color="red" is-big>{{ $t('sense_govern.counter_4') }}</counter>
              </b-carousel-slide>
              <b-carousel-slide>
                <counter :increment="0.00001651445" symbol="€" color="teal" decimals is-big>{{ $t('sense_govern.counter_5') }}</counter>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="video video-1" v-if="showVideo === 1">
        <video width="100%" height="100%" autoplay loop ref="video">
          <source src="../assets/videos/video1.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
    <transition name="fade">
      <div class="video video-2" v-if="showVideo === 2">
        <video width="100%" height="100%" autoplay loop ref="video">
          <source src="../assets/videos/video2.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
    <transition name="fade">
      <div class="video video-3" v-if="showVideo === 3">
        <video width="100%" height="100%" autoplay loop ref="video">
          <source src="../assets/videos/video3.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
    <transition name="fade">
      <div class="video video-4" v-if="showVideo === 4">
        <video width="100%" height="100%" autoplay loop ref="video">
          <source src="../assets/videos/video4.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
        <transition name="fade">
      <div class="video video-5" v-if="showVideo === 5">
        <video width="100%" height="100%" autoplay loop ref="video">
          <source src="../assets/videos/video5.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
        <transition name="fade">
      <div class="video video-6" v-if="showVideo === 6">
        <video width="100%" height="100%" autoplay loop ref="video">
          <source src="../assets/videos/video6.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
        <transition name="fade">
      <div class="video video-7" v-if="showVideo === 7">
        <video width="100%" height="100%" autoplay loop ref="video">
          <source src="../assets/videos/video7.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
        <transition name="fade">
      <div class="video video-8" v-if="showVideo === 8">
        <video width="100%" height="100%" autoplay loop ref="video">
          <source src="../assets/videos/video8.mp4" type="video/mp4">
        </video>
      </div>
    </transition>
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
        slide: 0,
        showVideo: null
      }
    },

    mounted () {
      window.addEventListener('keyup', (event) => {
        if (event.code == 'Digit1') { 
          this.showVideo = 1
        }
        if (event.code == 'Digit2') { 
          this.showVideo = 2
        }
        if (event.code == 'Digit3') { 
          this.showVideo = 3
        }
        if (event.code == 'Digit4') { 
          this.showVideo = 4
        }
        if (event.code == 'Digit5') { 
          this.showVideo = 5
        }
        if (event.code == 'Digit6') { 
          this.showVideo = 6
        }
        if (event.code == 'Digit7') { 
          this.showVideo = 7
        }
        if (event.code == 'Digit8') { 
          this.showVideo = 8
        }
        if (event.code == 'Digit0') { 
          this.showVideo = null
        }
        if (event.code == 'KeyP') {
          this.$refs.video.pause()
        }
        if (event.code == 'KeyO') {
          this.$refs.video.play()
        }
      })
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
    background: #FEFBF3 !important;

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

    &-caption {
      left: 0;
      right: 0;
    }
  }

  .counter {
    &-number {
      font-size: 9rem !important;
      margin: 0 auto;
    }

    &-description {
      display: inline-block;
      font-size: 2rem;
      text-align: left;
      background: $navy;
      color: $white;
      border-radius: $border-radius-lg;
      padding: 1rem;
      width: 100%;
      max-width: 900px !important;
      margin: 0 auto;
    }
  }

  .video {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FEFBF3;
    z-index: 10000;

    video {
      height: 100vh;
      width: 100vw;
    }
  }

  .container-scaled {
    transform: scale(1.35);
  }
</style>
