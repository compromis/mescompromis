<template>
  <section class="hero" role="banner">
    <div :class="['hero-motto', `is-on-slide-${currentSlide}`]">
      <span class="hero-motto-title">Acordar</span>
      <span class="hero-motto-subtitle">la política útil</span>
      <div class="hero-nav">
        <ul class="hero-nav-items">
          <li class="item-1"><nuxt-link :to="localePath('programa')">Programa</nuxt-link></li>
          <li class="item-2"><nuxt-link to="/">Candidatura</nuxt-link></li>
          <li class="item-3"><nuxt-link to="/">Actua!</nuxt-link></li>
          <li class="item-4"><nuxt-link to="/">Notícies</nuxt-link></li>
        </ul>
      </div>
    </div>
    <div class="hero-slides">
      <b-carousel id="carousel-no-animation" fade @sliding-start="(slide) => { this.currentSlide = slide }">
        <b-carousel-slide>
          <template v-slot:img>
            <div class="hero-slides-background hero-slides-hands"></div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <div class="hero-slides-background hero-slides-hug"></div>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'hero',

    data() {
      return {
        currentSlide: 0
      }
    }
  }
</script>

<style lang="scss">
@import '../sass/variables';

.hero {
  height: calc(100vh - 3.5rem);
  display: flex;
  align-items: center;
  position: relative;

  &-slides {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -10;


    &-background {
      height: calc(100vh - 3.5rem);
      background-repeat: no-repeat;
      background-color: $body-bg;
    }

    &-hands {
      background-image: url('../assets/images/high-five.png');
      background-position: top right;
      background-size: auto 150%;
    }

    &-hug {
      background-image: url('../assets/images/hug.png');
      background-position: right top;
      background-size: auto 100%;
    }
  }

  &-motto {
    display: flex;
    flex-direction: column;
    margin-left: 6vw;

    &-title {
      font-size: calc(4rem + 3vw);
    }

    &-subtitle {
      font-size: calc(2.5rem + 2vw);
      margin-left: calc(2rem + 2.75vw);
    }

    span {
      width: fit-content;
      padding: 0 1.5rem;
      margin-bottom: calc(0.75rem + 0.25vw);
      border-radius: $border-radius-lg;
      font-weight: bold;
      background: $yellow;
      color: $body-color;
      transition: 0.4s ease-in-out;
    }

    &.is-on-slide-1 {
      span {
        background: $teal;
      }
    }
  }

  &-nav {
    position: relative;
    margin-top: 2rem;

    &-items {
      display: grid;
      position: relative;
      z-index: 2;
      grid-template-columns: repeat(4, 1fr);
      list-style: none;
      margin: 0;
      padding: 0;
      grid-gap: 2rem;
      justify-content: stretch;
      align-items: center;
      height: 150px;

      a {
        position: relative;
        display: flex;
        min-height: 100px;
        font-size: 1.75rem;
        font-weight: bold;
        background: $navy;
        color: $white;
        border-radius: $border-radius-lg;
        padding: 1rem 1.5rem;
        align-items: center;
        transition: .5s ease-in-out;
        overflow: hidden;
        transform: scale(1);

        &:hover {
          transform: scale(1.1);
          padding: 2.5rem 1.5rem;
          text-decoration: none;
          color: $white;

          &::before {
            left: 0;
            bottom: 0;
          }
        }

        &::before {
          content: '';
          position: absolute;
          // top: 0;
          left: -100%;
          bottom: -100%;
          width: 100%;
          height: 100%;
          background: $teal;
          z-index: -1;
          transition: .5s ease-in-out;
          border-radius: $border-radius-lg;
        }
      }

      .item-2 {
        a::before {
          background: $orange;
        }
      }

      .item-3 {
        a::before {
          background: $red;
        }
      }

      .item-4 {
        a::before {
          background: $yellow;
        }
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .hero {
    &-nav {
      &-items {
        grid-gap: 1rem;
         height: 80px;

        a {
          min-height: auto;
          font-size: 1.5rem;
          padding: 1rem;

          &:hover {
            padding: 1.25rem 1rem;
          }
        }
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .hero {
    height: calc(100vh - 3.5rem);
    align-items: flex-end;

    &-motto {
      margin: 1rem;
      width: 100%;

      &-title {
        font-size: 3.25rem;
      }

      &-subtitle {
        font-size: 1.9rem;
      }

      span {
        padding: 0 .75rem;
        margin-bottom: 0.4rem;
        border-radius: $border-radius;
      }
    }

    &-slides {
      &-background {
        height: calc(100vh - 3.5rem);
      }

      &-hands {
        background-size: 140%;
        background-position: right center;
      }
      &-hug {
        background-size: 125%;
        background-position: bottom center;
      }
    }

    &-nav {
      &-items {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.75rem;
        height: auto;

        a {
          min-height: auto;
          font-size: 1.1rem;
          border-radius: $border-radius;
          padding: 0.75rem;

          &:hover {
            padding: 0.75rem;
          }

          &:active {
            transform: scale(1.1);
          }

          &::before {
            display: none;
          }
        }
      }
    }
  }
}
</style>
