<template>
  <b-navbar toggleable="lg" fixed="top" variant="mes">
    <b-navbar-brand :to="localePath('/')">
      Logo
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="localePath('programa')">{{ $t('nav.manifesto') }}</b-nav-item>
        <b-nav-item :to="localePath('candidatura')">{{ $t('nav.candidates') }}</b-nav-item>
        <b-nav-item :to="localePath('actua')">{{ $t('nav.takeaction') }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="$i18n.locale !== 'val'" @click="localeChange('val')">Valencià</b-nav-item>
        <b-nav-item v-if="$i18n.locale !== 'cas'" @click="localeChange('cas')">Castellano</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'mes-nav',
    methods: {
      localeChange (newLocale) {
        this.$i18n.locale = newLocale
        this.$router.push('/' + (newLocale === 'cas' ? 'cas' : ''))
      }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';

  .bg-mes {
    background: $white;
  }

  .navbar-light {
    .navbar-nav {
      a.nav-link {
        color: $navy;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .navbar {
      &-toggler {
        border: 0;

        &-icon {
          background-image: none !important;
          position: relative;

          &::before,
          &::after {
            content: '';
            position: absolute;
            background: $body-color;
            height: 2px;
            left: 3px;
            right: 3px;
            top: 25%;
            transition: .4s ease-in-out;
          }

          &::after {
            content: '';
            top: auto;
            bottom: 25%;
          }
        }

        &[aria-expanded="true"] {
          .navbar-toggler-icon {
            &::after {
              transform: rotate(45deg) translateY(-9px);
            }
            &::before {
              transform: rotate(-45deg) translateY(8px);
            }
          }
        }
      }
    }
  }
</style>