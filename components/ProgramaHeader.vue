<template>
  <div class="programa-header">
    <div :class="{ 'programa-carousel': true, 'has-active-slide': activeSlide }">
      <carousel :value="centeredSlide" :center-mode="true" :per-page="1" :space-padding="stagePadding" :pagination-enabled="false" @page-change="slideChanged">
        <slide :class="{'programa-carousel-slide slide-terra': true, 'is-active-slide': activeSlide === 0 && centeredSlide === 0}">
          <div
            class="btn btn-programa">
            <div class="container">
              Programa
            </div>
          </div>
        </slide>
        <slide :class="{'programa-carousel-slide slide-terra': true, 'is-active-slide': activeSlide === 1 && centeredSlide === 1}">
          <nuxt-link
            :to="localePath('programa-protegir-la-terra')"
            class="btn btn-terra"
            @click="setActiveSlide(1)">
            <div class="container">
              <span v-html="$t('programa.1')"></span>
            </div>
          </nuxt-link>
        </slide>
        <slide :class="{'programa-carousel-slide slide-gent': true, 'is-active-slide': activeSlide === 2 && centeredSlide === 2}">
          <nuxt-link
            :to="localePath('programa-cuidar-de-les-persones')"
            class="btn btn-gent"
            @click="setActiveSlide(2)">
            <div class="container">
              <span v-html="$t('programa.2')"></span>
            </div>
          </nuxt-link>
        </slide>
        <slide :class="{'programa-carousel-slide slide-drets': true, 'is-active-slide': activeSlide === 3 && centeredSlide === 3}">
          <nuxt-link
            :to="localePath('programa-garantir-els-drets')"
            class="btn btn-drets"
            @click="setActiveSlide(3)">
            <div class="container">
              <span v-html="$t('programa.3')"></span>
            </div>
          </nuxt-link>
        </slide>
        <slide :class="{'programa-carousel-slide slide-just': true, 'is-active-slide': activeSlide === 4 && centeredSlide === 4}">
          <nuxt-link
            :to="localePath('programa-financament-just')"
            class="btn btn-just"
            @click="setActiveSlide(4)">
            <div class="container">
              <span v-html="$t('programa.4')"></span>
            </div>
          </nuxt-link>
        </slide>
      </carousel>
      <div
        v-if="centeredSlide >= 1"
        role="button"
        @click="slideTo('prev')"
        class="programa-nav programa-nav-prev"
        aria-label="Anterior">
      </div>
      <div
        v-if="centeredSlide <= 3"
        role="button"
        @click="slideTo('next')"
        class="programa-nav programa-nav-next"
        aria-label="Següent">
      </div>
      <transition name="fade">
        <div :class="['programa-back', activeSlide ? 'has-active-slide' : '']" v-if="$route.name !== 'programa___val' && $route.name !== 'programa___cas'">
          <div class="container">
            <nuxt-link :to="localePath('programa')"><fa :icon="['fas', 'arrow-left']" /> Programa</nuxt-link>
          </div>
        </div>
      </transition>
      <div :class="['programa-pagination', activeSlide ? 'has-active-slide' : '']">
        <div class="container">
          <ul>
            <li class="programa-pagination-number">
              <transition-group name="fade" mode="out-in">
                <span key="0" class="number" v-if="centeredSlide === 0">0</span>
                <span key="1" class="number" v-if="centeredSlide === 1">1</span>
                <span key="2" class="number" v-if="centeredSlide === 2">2</span>
                <span key="3" class="number" v-if="centeredSlide === 3">3</span>
                <span key="4" class="number" v-if="centeredSlide === 4">4</span>
              </transition-group>
              <span class="outof">/4</span>
            </li>
            <li class="programa-pagination-item">
              <nuxt-link
                :to="localePath('programa-protegir-la-terra')"
                :class="{ 'active': activeSlide === 1, 'centered': centeredSlide === 1 }">
                <span v-html="$t('programa.1')"></span>
              </nuxt-link>
            </li>
            <li class="programa-pagination-item">
              <nuxt-link
                :to="localePath('programa-cuidar-de-les-persones')"
                :class="{ 'active': activeSlide === 2, 'centered': centeredSlide === 2 }">
                <span v-html="$t('programa.2')"></span>
              </nuxt-link>
            </li>
            <li class="programa-pagination-item">
              <nuxt-link
                :to="localePath('programa-garantir-els-drets')"
                :class="{ 'active': activeSlide === 3, 'centered': centeredSlide === 3 }">
                <span v-html="$t('programa.3')"></span>
              </nuxt-link>
            </li>
            <li class="programa-pagination-item">
              <nuxt-link
                :to="localePath('programa-financament-just')"
                :class="{ 'active': activeSlide === 4, 'centered': centeredSlide === 4 }">
                <span v-html="$t('programa.4')"></span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <b-carousel :class="{ 'programa-background': true, 'has-active-slide': activeSlide }" fade :interval="0" :value="centeredSlide">
        <b-carousel-slide>
          <template v-slot:img>
            <div class="programa-background-slide programa-background-slide-programa"></div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <div class="programa-background-slide programa-background-slide-terra"></div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <div class="programa-background-slide programa-background-slide-gent"></div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <div class="programa-background-slide programa-background-slide-drets"></div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <div class="programa-background-slide programa-background-slide-just"></div>
          </template>
        </b-carousel-slide>
      </b-carousel>
      <!--<div :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1490658772076-913028274fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80)' }"></div> -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0" width="0">
        <defs>
          <filter id="multiply-red">
            <feFlood flood-color="#ef4e38" flood-opacity="1" result="flood" />
            <feBlend mode="multiply" in1="flood" in2="SourceGraphic" />
          </filter>
          <filter id="multiply-teal">
            <feFlood flood-color="#3dbca6" flood-opacity="1" result="flood" />
            <feBlend mode="multiply" in1="flood" in2="SourceGraphic" />
          </filter>
          <filter id="multiply-yellow">
            <feFlood flood-color="#ffca05" flood-opacity="1" result="flood" />
            <feBlend mode="multiply" in1="flood" in2="SourceGraphic" />
          </filter>
          <filter id="multiply-orange">
            <feFlood flood-color="#f6911e" flood-opacity="1" result="flood" />
            <feBlend mode="multiply" in1="flood" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'programa-header',

    data() {
      return {
        slides: { 'protegir-la-terra': 1, 'cuidar-de-les-persones': 2, 'garantir-els-drets': 3, 'financament-just': 4 },
        slideNames: ['', 'protegir-la-terra', 'cuidar-de-les-persones', 'garantir-els-drets', 'financament-just'],
        centeredSlide: 0,
        currentBackground: 0,
        activeSlide: null,
        stagePadding: 300
      }
    },

    mounted () {
      this.calcStagePadding()
      window.addEventListener('resize', this.calcStagePadding)

      const routeName = this.getSection()
      const slide = this.slides[routeName]
      if (slide !== undefined) {
        this.activeSlide = slide
        this.centeredSlide = slide
      }
    },

    watch: {
      '$route': function (route) {
        const routeName = this.getSection()
        const slide = this.slides[routeName]
        if (slide !== undefined) {
          this.activeSlide = slide
          this.centeredSlide = slide
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
        if (direction == 'next' && this.centeredSlide + 1 < 5) {
          this.centeredSlide++
        }
        else if (direction == 'prev' && this.centeredSlide - 1 > -1) {
          this.centeredSlide--
        }

        if (this.activeSlide) {
          this.setActiveSlide(this.centeredSlide)
        }

        window.scrollTo(0, 0)
      },

      setActiveSlide (slide) {
        if (this.centeredSlide != slide) return false
        this.activeSlide = slide
        const slideName = this.slideNames[this.activeSlide]
        this.$router.push(this.localePath('programa-' + slideName))
      },

      goToSlide (slide) {
        this.centeredSlide = slide
      },

      slideChanged (slide) {
        this.centeredSlide = slide
        if (slide !== this.activeSlide) {
          this.$router.push(this.localePath('programa'))
        }
      },

      getSection () {
        const routeParts = this.$route.path.split('/')

        if (routeParts[1] === 'cas') {
          return routeParts[3]
        } else {
          return routeParts[2]
        }
      }
    },
  }
</script>

<style lang="scss">
  @import '../sass/variables';

  :root {
    --stage-padding: 300px;
    --slide-padding: 4rem;
  }

  .VueCarousel {
    margin-bottom: -24px;
  }

  .programa {
    &-carousel {
      position: relative;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      background-color: $navy;
      transition: 0s ease-in-out;

      &.has-active-slide {
        background-color: $white;
        transition: 1s ease-in-out;

        .btn {
          opacity: 0;
        }

        .is-active-slide {
          .btn {
            opacity: 1;
          }
        }
      }

      &-slide {
        position: relative;
        height: 110vh;
        display: flex;
        align-items: center;
        justify-content: stretch;

        .container {
          display: flex;
          align-items: center;
        }

        .btn {
          display: flex;
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
          transform: translateY(-10vh);

          span {
            display: block;
            line-height: 1;
            transition: 0.4s ease-in-out;
          }

          &:hover {
            transform: translateY(-10vh) scale(1.05);
            padding: 8vw 5vw;

            span {
              color: $white;
            }
          }
        }

        &.is-active-slide {
          z-index: 1;

          .btn {
            min-height: 131vh;
            margin: 0 calc(-1 * var(--stage-padding));
            width: 100vw;
            border-radius: 0;
            color: $white;
            padding: 8vw 5vw;
            background-color: transparent;

            &:hover {
              transform: translateY(-10vh) scale(1);
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
      transition: .5s ease-in-out;
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
      cursor: pointer;
      color: $white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4rem;

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
      bottom: 10vw;
      transition: .5s ease-in-out;

      ul {
        color: $white;
        display: flex;
        list-style: none;
        font-weight: bold;
        padding: 0;
        margin: 0;
      }

      &.has-active-slide {
        bottom: calc(30vh + 3rem);
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

          &.centered {
            opacity: 1;
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

    &-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      opacity: .5;
      transition: 0s ease-in-out;
      display: flex;
      align-items: stretch;

      .carousel-inner {
        display: flex;
        align-items: stretch;
      }

      &-slide {
        position: relative;
        height: 100%;
        width: 100%;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: $navy;
          background-blend-mode: multiply;
          filter: grayscale(100%);
          background-size: cover;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          height: 200px;
          left: 0;
          right: 0;
          background: linear-gradient(0deg, $navy 0%, $navy 10%, rgba($navy, 0));
        }

        &-programa::before {
          background-image: url(https://images.unsplash.com/photo-1499568509606-4f9b771232ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80);
          background-position: center bottom;
        }

         &-terra::before {
          background-image: url(https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80);
        }

         &-gent::before {
          background-image: url(https://images.unsplash.com/photo-1461088945293-0c17689e48ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80);
          background-position: center bottom;
        }

         &-drets::before {
          background-image: url(https://images.unsplash.com/photo-1561982479-c36896dad276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80);
          background-position: center 30%;
        }

         &-just::before {
          background-image: url(https://images.unsplash.com/photo-1524067217094-584e94e61106?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80);
        }
      }

      &.has-active-slide {
        .programa-background-slide {
          &::before {
            background-color: $white;
            transition: 1s ease-in-out;
          }

          &::after {
            background: linear-gradient(0deg, white 0%, white 10%, rgba(white, 0));
          }
        }
      }
    }
  }

  .btn {
    &-programa {
      color: $white !important;
      font-size: calc(1.5rem + 6vw) !important;
      padding: 4vw 4vw !important;

      &:hover {
        transform: translateY(-10vh) scale(1) !important;
        padding: 4vw 4vw !important;
      }
    }

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

  .slide {
    &-terra.is-active-slide {
      .btn {
        backdrop-filter: url(#multiply-red);
      }
    }

    &-gent.is-active-slide {
      .btn {
        backdrop-filter: url(#multiply-yellow);
      }
    }

    &-drets.is-active-slide {
      .btn {
        backdrop-filter: url(#multiply-teal);
      }
    }

    &-just.is-active-slide {
      .btn {
        backdrop-filter: url(#multiply-orange);
      }
    }
  }

  @include media-breakpoint-down(lg) {
    .programa {
      &-carousel {
        &-slide {
          .btn {
            padding-top: 10vh;
            padding-bottom: 10vh;
            font-size: 8vw;

            &:hover {
              padding-top: 12vh;
              padding-bottom: 12vh;
            }
          }

          &.is-active-slide {
            .btn {
              padding-left: 0;
              padding-right: 0;
              font-size: 10vw;

              span {
                transform: translateY(-12vw);
              }
            }
          }
        }
      }

      &-back {
        top: 1rem;
        left: 0;
        right: 0;
      }

      &-pagination {
        bottom: 18vh;
        left: 0;
        right: 0;

        &.has-active-slide {
          bottom: calc(30vh + 1rem);
        }

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
          width: 2.9rem;
          font-size: 1.65rem;

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
