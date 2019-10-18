<template>
  <div class="programa-header">
    <div class="programa-carousel">
      <carousel v-model="centeredSlide" :center-mode="true" :per-page="1" :space-padding="stagePadding" :pagination-enabled="false" @page-change="slideChanged">
        <slide :class="{'programa-carousel-slide slide-just': true, 'is-active-slide': activeSlide === 0 && centeredSlide === 0}">
          <nuxt-link :to="localePath('programa-financament-just')" class="btn btn-just" @click="setActiveSlide(0)">
            <div class="container">
              <span>Finançament<br />just</span>
            </div>
          </nuxt-link>
        </slide>
        <slide :class="{'programa-carousel-slide slide-terra': true, 'is-active-slide': activeSlide === 1 && centeredSlide === 1}">
          <nuxt-link :to="localePath('programa-protegim-la-terra')" class="btn btn-terra" @click="setActiveSlide(1)">
            <div class="container">
              <span>Protegim<br />la terra</span>
            </div>
          </nuxt-link>
        </slide>
        <slide :class="{'programa-carousel-slide slide-gent': true, 'is-active-slide': activeSlide === 2 && centeredSlide === 2}">
          <nuxt-link :to="localePath('programa-cuidem-de-la-gent')" class="btn btn-gent" @click="setActiveSlide(2)">
            <div class="container">
              <span>Cuidem de<br/>la gent</span>
            </div>
          </nuxt-link>
        </slide>
        <slide :class="{'programa-carousel-slide slide-drets': true, 'is-active-slide': activeSlide === 3 && centeredSlide === 3}">
          <nuxt-link :to="localePath('programa-guanyem-drets')" class="btn btn-drets" @click="setActiveSlide(3)">
            <div class="container">
              <span>Guanyem<br />Drets</span>
            </div>
          </nuxt-link>
        </slide>
      </carousel>
      <div role="button" @click="slideTo('prev')" class="programa-nav programa-nav-prev" aria-label="Anterior"></div>
      <div role="button" @click="slideTo('next')" class="programa-nav programa-nav-next" aria-label="Següent"></div>
      <transition name="fade">
        <div class="programa-back" v-if="$route.name !== 'programa___val' && $route.name !== 'programa___cas'">
          <div class="container">
            <nuxt-link :to="localePath('programa')"><fa :icon="['fas', 'arrow-left']" /> Programa</nuxt-link>
          </div>
        </div>
      </transition>
      <div :class="['programa-pagination', activeSlide !== null ? 'has-active-slide' : '']">
        <div class="container">
          <ul>
            <li class="programa-pagination-number">
              <transition-group name="fade" mode="out-in">
                <span key="0" class="number" v-if="centeredSlide === 0">1</span>
                <span key="1" class="number" v-if="centeredSlide === 1">2</span>
                <span key="2" class="number" v-if="centeredSlide === 2">3</span>
                <span key="3" class="number" v-if="centeredSlide === 3">4</span>
              </transition-group>
              <span class="outof">/4</span>
            </li>
            <li class="programa-pagination-item"><nuxt-link :to="localePath('programa-financament-just')" :class="activeSlide == 0 ? 'active' : ''"><span>Finançament Just</span></nuxt-link></li>
            <li class="programa-pagination-item"><nuxt-link :to="localePath('programa-protegim-la-terra')" :class="activeSlide == 1 ? 'active' : ''"><span>Protegim la terra</span></nuxt-link></li>
            <li class="programa-pagination-item"><nuxt-link :to="localePath('programa-cuidem-de-la-gent')" :class="activeSlide == 2 ? 'active' : ''"><span>Cuidem de la gent</span></nuxt-link></li>
            <li class="programa-pagination-item"><nuxt-link :to="localePath('programa-guanyem-drets')" :class="activeSlide == 3 ? 'active' : ''"><span>Guanyem<br />drets</span></nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'programa-header',

    data() {
      return {
        slides: { 'financament-just': 0, 'protegim-la-terra': 1, 'cuidem-de-la-gent': 2, 'guanyem-drets': 3 },
        centeredSlide: 0,
        activeSlide: null,
        stagePadding: 300
      }
    },

    mounted () {
      this.calcStagePadding()
      window.addEventListener('resize', this.calcStagePadding)

      const routeName = this.$route.name.replace(/programa-/g, '').replace(/___val/g, '').replace(/___cas/g, '')
      if (this.slides[routeName] !== undefined) {
        this.navigateTo = this.slides[routeName]
        this.activeSlide = this.slides[routeName]
      }
    },

    watch: {
      '$route': function (route) {
        const routeName = this.$route.name.replace(/programa-/g, '').replace(/___val/g, '').replace(/___cas/g, '') 
        if (this.slides[routeName] !== undefined) {
          this.centeredSlide = this.slides[routeName]
          this.activeSlide = this.slides[routeName]
        } else {
          this.activeSlide = null
        }
      }
    },

    methods: {
      calcStagePadding () {
        let stagePadding = window.innerWidth * 0.12
        document.documentElement.style.setProperty('--stage-padding', `${stagePadding}px`)
        this.stagePadding = stagePadding
      },

      slideTo(direction) {
        if (direction == 'next' && this.centeredSlide + 1 < 4) {
          this.centeredSlide++
        }
        else if (direction == 'prev' && this.centeredSlide - 1 > -1) {
          this.centeredSlide--
        }

        if (this.activeSlide !== null) {
          this.activeSlide = this.centeredSlide
        }

        window.scrollTo(0, 0)
      },

      setActiveSlide (slide) {
        if (this.centeredSlide != slide) return false
        this.activeSlide = slide
      },

      goToSlide (slide) {
        this.centeredSlide = slide
      },

      slideChanged (slide) {
        if (slide !== this.activeSlide) {
          this.$router.push('/programa')
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  :root {
    --stage-padding: 300px;
    --slide-padding: 4rem;
  }

  .programa {
    &-carousel {
      position: fixed;
      top: $navbar-height;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;

      &-slide {
        position: relative;
        height: calc(100vh - 3.5rem);
        display: flex;
        align-items: center;
        justify-content: stretch;

        .btn {
          display: flex;
        }

        .container {
          display: flex;
          align-items: center;
        }

        .btn {
          color: $body-color;
          font-size: calc(1rem + 4vw);
          font-weight: bold;
          width: 100%;
          margin: 0 2vw;
          padding: 4vw 4vw;
          border-radius: $border-radius-xl;
          text-align: left;
          transition: 0.4s ease-in-out;
          min-height: 0;

          span {
            display: block;
            line-height: 1;
            transition: 0.4s ease-in-out;
          }

          &:hover {
            color: $white;
            transform: scale(1.05);
            padding: 8vw 5vw;
          }
        }

        &.is-active-slide {
          z-index: 1;

          .btn {
            min-height: 100%;
            margin: 0 calc(-1 * var(--stage-padding));
            width: 100vw;
            border-radius: 0;
            color: $white;
            padding: 8vw 5vw;

            &:hover {
              transform: scale(1);
            }

            span {
              transform: translateY(-6vw);
            }
          }
        }
      }
    }

    &-back {
      position: absolute;
      left: 0;
      right: 0;
      top: 3rem;
      transition: .5 ease-in-out;
      z-index: 2;

      a {
        color: $white;
        font-size: 1.25rem;
      }
    }

    &-nav {
      position: absolute;
      top: 0;
      bottom: 0;
      width: var(--stage-padding);
      z-index: 200;

      &-next {
        right: 0;
      }

      &-prev {
        left: 0;
      }
    }

    &-pagination {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 2vw;
      transition: .5 ease-in-out;

      ul {
        color: $white;
        display: flex;
        list-style: none;
        font-weight: bold;
        padding: 0;
        margin: 0;
      }

      &.has-active-slide {
        bottom: calc(20vh + 3rem);
      }

      &-item {
        display: flex;
        font-size: 1.6rem;
        width: 15rem; // Responsive!!
        line-height: 1.2;

        a {
          display: block;
          color: $white;
          margin-left: 1rem;
          padding: .75rem;
          opacity: .5;
          transition: .5s ease-in-out;
          border-radius: $border-radius;
          align-self: stretch;
          width: 100%;

          &:hover {
            opacity: 1;
            text-decoration: none;
          }

          &.active {
            opacity: 1;
            background: $white;
            color: $navy;
          }
        }

        &:nth-child(2) {
          margin-left: 2rem;
        }
      }

      &-number {
        position: relative;
        width: 7rem;
        font-size: 4rem;
        line-height: 1;

        .number {
          position: absolute;
          top: .75rem;
          left: 0;
        }

        .outof {
          position: absolute;
          top: .75rem;
          right: 0;
          flex-shrink: 0;
        }
      }
    }
  }

  .btn {
    &-terra {
      background-color: $red;

      &:hover {
        background-color: $red;
      }
    }

    &-gent {
      background-color: $yellow;

      &:hover {
        background-color: $yellow;
      }
    }

    &-drets {
      background-color: $teal;

      &:hover {
        background-color: $teal;
      }
    }

    &-just {
      background-color: $orange;

      &:hover {
        background-color: $orange;
      }
    }
  }

  @include media-breakpoint-down(lg) {
    .programa {
      &-pagination {
        &-item {
          width: 1.5rem;
          height: 1.5rem;
          margin: 0 .5rem;

          a {
            border: 2px $white solid;
            margin: 0;
            padding: 0;
          }

          span {
            display: none;
          }
        }

        &-number {
          width: 3.5rem;
          font-size: 2rem;

          .number,
          .outof {
            top: 0;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .programa {
      .btn {
        border-radius: $border-radius-lg;
      }
    }
  }
</style>
