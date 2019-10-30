<template>
  <div :class="{'timeroo-wrapper': true, 'timeroo-hidden': days === 0}">
    <div class="timeroo">
      <div class="timeroo-col"><span class="timeroo-number timeroo-number-lg">{{ days }}:</span><span class="timeroo-label timeroo-label-days">dies</span></div>
      <div class="timeroo-col"><span class="timeroo-number timeroo-number-md">{{ hours | formatNumber }}:</span><span class="timeroo-label">hores</span></div>
      <div class="timeroo-col"><span class="timeroo-number timeroo-number-xs">{{ minutes | formatNumber }}:</span><span class="timeroo-label">minuts</span></div>
      <div class="timeroo-col"><span class="timeroo-number timeroo-number-xs">{{ seconds | formatNumber }}</span><span class="timeroo-label">segons</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timer',

  data () {
    return {
      date: new Date(2019, 3, 28),
      interval: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervals: {
        second: 1000,
        minute: 1000 * 60,
        hour: 1000 * 60 * 60,
        day: 1000 * 60 * 60 * 24
      }
    }
  },

  mounted () {
    this.interval = setInterval(() => { this.updateDiffs() }, 1000)
  },

  destroyed () {
    clearInterval(this.interval)
  },

  methods: {
    updateDiffs () {
      let diff = Math.abs(Date.now() - this.date.getTime())
      this.days = Math.floor(diff / this.intervals.day)
      diff -= this.days * this.intervals.day
      this.hours = Math.floor(diff / this.intervals.hour)
      diff -= this.hours * this.intervals.hour
      this.minutes = Math.floor(diff / this.intervals.minute)
      diff -= this.minutes * this.intervals.minute
      this.seconds = Math.floor(diff / this.intervals.second)
    }
  },

  filters: {
    formatNumber: function (value) {
      return (value <= 9) ? '0' + value : value
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';
.timeroo {
  display: flex;
  padding: 1rem 3rem 2rem 2rem;
  border-radius: $border-radius-xl;
  background-color: $navy;
  font-size: 8rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 2rem;
  color: $white;
  align-items: flex-end;
  font-variant-numeric: tabular-nums;

  &-col {
    display: flex;
    flex-direction: column;
  }

  &-wrapper {
    display: flex;
    justify-content: center;
    transition: .5s ease-in-out;
  }

  &-number {
    &-lg {
      font-size: 12rem;
    }

    &-md {
      font-size: 10rem;
    }
  }

  &-label {
    opacity: 0.4;
    font-size: 2rem;

    &-days {
      padding-left: 2rem;
    }
  }

  &-hidden {
    opacity: 0;
  }
}

@include media-breakpoint-down(lg) {
  .timeroo {
    font-size: 5rem;
    &-number {
      &-lg {
        font-size: 9rem;
      }

      &-md {
        font-size: 7rem;
      }
    }
    &-label {
      font-size: 1.5rem;

      &-days {
        padding-left: 1.5rem;
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .timeroo {
    font-size: 4rem;

    &-number {
      &-lg {
        font-size: 8rem;
      }

      &-md {
        font-size: 6rem;
      }
    }
    &-label {
      font-size: 1.25rem;

      &-days {
        padding-left: 1.25rem;
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .timeroo {
    font-size: 2rem;
    padding: .5rem 1.5rem 1rem 1rem;
    border-radius: $border-radius-lg;

    &-number {
      &-lg {
        font-size: 3.5rem;
      }

      &-md {
        font-size: 2.5rem;
      }
    }
    &-label {
      font-size: .75rem;

      &-days {
        padding-left: .45rem;
      }
    }
  }
}
</style>
