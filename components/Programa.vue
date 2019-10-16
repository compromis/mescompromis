<template>
  <div class="programa">
    <div class="programa-carousel">
      <carousel v-model="centeredSlide" :center-mode="true" :per-page="1" :space-padding="300" :pagination-enabled="false">
        <slide :class="{'programa-carousel-slide slide-just': true, 'is-active-slide': activeSlide === 0 && centeredSlide === 0}">
          <b-button class="btn-just" @click="setActiveSlide(0)"><span>Finançament just</span></b-button>
        </slide>
        <slide :class="{'programa-carousel-slide slide-terra': true, 'is-active-slide': activeSlide === 1 && centeredSlide === 1}">
          <b-button class="btn-terra" @click="setActiveSlide(1)"><span>Protegim la terra</span></b-button>
        </slide>
        <slide :class="{'programa-carousel-slide slide-gent': true, 'is-active-slide': activeSlide === 2 && centeredSlide === 2}">
          <b-button class="btn-gent" @click="setActiveSlide(2)"><span>Cuidem de la gent</span></b-button>
        </slide>
        <slide :class="{'programa-carousel-slide slide-drets': true, 'is-active-slide': activeSlide === 3 && centeredSlide === 3}">
          <b-button class="btn-drets" @click="setActiveSlide(3)"><span>Guanyem Drets</span></b-button>
        </slide>
      </carousel>
      <div role="button" @click="slideTo('prev')" class="programa-nav programa-nav-prev" aria-label="Anterior"></div>
      <div role="button" @click="slideTo('next')" class="programa-nav programa-nav-next" aria-label="Següent"></div>
      <ul class="programa-pagination">
        <li class="programa-pagination-number">
          <transition-group name="fade" mode="out-in">
            <span key="0" class="number" v-if="centeredSlide === 0">1</span>
            <span key="1" class="number" v-if="centeredSlide === 1">2</span>
            <span key="2" class="number" v-if="centeredSlide === 2">3</span>
            <span key="3" class="number" v-if="centeredSlide === 3">4</span>
          </transition-group>
          <span class="outof">/4</span>
        </li>
        <li class="programa-pagination-item"><a href="#" @click.prevent="goToSlide(0)" :class="centeredSlide == 0 ? 'active' : '' ">Finançament Just</a></li>
        <li class="programa-pagination-item"><a href="#" @click.prevent="goToSlide(1)" :class="centeredSlide == 1 ? 'active' : '' ">Protegim la terra</a></li>
        <li class="programa-pagination-item"><a href="#" @click.prevent="goToSlide(2)" :class="centeredSlide == 2 ? 'active' : '' ">Cuidem de la gent</a></li>
        <li class="programa-pagination-item"><a href="#" @click.prevent="goToSlide(3)" :class="centeredSlide == 3 ? 'active' : '' ">Guanyem<br />drets</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'programa',
    data() {
      return {
        centeredSlide: 0,
        activeSlide: null,
        isTransitioning: false
      }
    },
    methods: {
      slideTo(direction) {
        if (direction == 'next' && this.centeredSlide + 1 < 4) {
          this.centeredSlide++
        }
        else if (direction == 'prev' && this.centeredSlide - 1 > -1) {
          this.centeredSlide--
        }
      },

      setActiveSlide (slide) {
        if (this.centeredSlide != slide) return false
        this.activeSlide = slide
      },

      goToSlide (slide) {
        this.centeredSlide = slide
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '../sass/variables';

  .programa {
    background-color: $navy;

    &-carousel {
      position: relative;

      &-slide {
        height: calc(100vh - 3.5rem);
        display: flex;
        align-items: center;
        justify-content: stretch;

        &.is-active-slide {
          .btn {
            min-height: 100%;
            margin: 0 -300px;
            width: 140%;
            border-radius: 0;
            color: $white;

            &:hover {
              transform: scale(1);
            }
          }
        }
      }
    }

    &-nav {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 300px;
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
      left: calc(300px + 8rem);
      right: calc(300px + 8rem);
      color: $white;
      bottom: 4rem;
      display: flex;
      list-style: none;
      font-weight: bold;
      padding: 0;
      margin: 0;

      &-item {
        display: flex;
        font-size: 1.6rem;
        width: 15rem;
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
        }
      }
    }

    .btn {
      color: $body-color;
      font-size: 10rem;
      font-weight: bold;
      width: 100%;
      margin: 0 8rem;
      padding: 4rem 6rem;
      border-radius: $border-radius-xl;
      text-align: left;
      transition: 0.4s ease-in-out;
      min-height: 0;

      span {
        max-width: 65%;
        display: block;
        line-height: 1;
      }

      &:hover {
        color: $white;
        transform: scale(1.05);
        padding: 10rem 6rem;
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
  }
</style>
