<template>
  <div :class="['counter', number === 0 && time.hours === 0 ? 'counter-hidden' : '', `counter-${color}`, isBig ? 'counter-big' : '']">
    <div v-if="!isTime" class="counter-number">{{ number | formatNumber }}{{ symbol }}</div>
    <div v-else class="counter-number">{{ time.hours }}h {{ time.minutes }}m {{ time.seconds }}s</div>
    <div class="counter-description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    props: {
      isTime: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: 'orange',
      },
      increment: {
        type: Number,
        default: null,
      },
      symbol: {
        type: String,
        default: ''
      },
      decimals: {
        type: Boolean,
        default: false,
      },
      isBig: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        date: new Date(2019, 3, 28),
        interval: null,
        number: 0,
        time: { hours: 0, minutes: 0, seconds: 0 }
      }
    },
    mounted () {
      this.interval = setInterval(()=>{ this.calculate() }, 100);
    },
    methods: {
      calculate() {
        const now = new Date()
        const diff = (now - this.date)/100
        const result = this.decimals ? this.increment * diff : Math.floor(this.increment * diff)
        if (this.isTime) {
          const hours = Math.floor(result / 10 / 60 / 60)
          let minutes = Math.floor(result / 10 / 60)
          let seconds = Math.floor(result / 10 )
          minutes = minutes - (hours * 60)
          seconds = seconds - (minutes * 60) - (hours * 60 * 60)
          this.time = {
            hours,
            minutes,
            seconds
          }
        } else {
          this.number = result
        }
      }
    },
    filters: {
      formatNumber: function(value) {
        return new Intl.NumberFormat('es-ES').format(value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .counter {
    font-size: 1.25rem;
    font-weight: bold;
    transition: .5s ease-in-out;
    max-width: 500px;
    margin: 0 2.5rem 2.5rem 0;

    &-number {
      font-size: 3rem;
      background-color: $teal;
      border-radius: $border-radius-lg;
      padding: .75rem 1.75rem;
      width: fit-content;
      font-variant: tabular-nums;
      margin-bottom: .5rem;
    }

    &-description {
      margin-top: 1rem;
      color: $teal;
      max-width: 400px;
    }

    &-hidden {
      opacity: 0;
    }

    &-big {
      width: 100%;
      max-width: 100%;
      margin-right: auto;
      .counter-number {
        font-size: 5rem;
      }
    }

    &-orange {
      .counter-number {
        background-color: $orange;
      }
      .counter-description {
        color: $orange;
      }
    }

    &-red {
      .counter-number {
        background-color: $red;
      }
      .counter-description {
        color: $red;
      }
    }

    &-yellow {
      .counter-number {
        background-color: $yellow;
      }
      .counter-description {
        color: $yellow;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .counter {
      margin-right: 0;
      &-number,
      &-big .counter-number {
        font-size: 2rem;
        padding: .5rem .75rem;
      }

      &-description {
        font-size: 1.1rem;
        margin-right: 2rem;
      }
    }
  }
</style>
