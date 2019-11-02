<template>
  <b-navbar toggleable="lg" fixed="top" variant="mes">
    <b-navbar-brand to="/">
      <div class="compromis-logo">
        <compromis-logo />
      </div>
      <div class="maspais-logo">
        <maspais-logo />
      </div>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto d-lg-none">
      <b-nav-item v-if="$i18n.locale !== 'val'" @click="localeChange('val')">Valencià</b-nav-item>
      <b-nav-item v-if="$i18n.locale !== 'cas'" @click="localeChange('cas')">Castellano</b-nav-item>
    </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="localePath('programa')">{{ $t('nav.manifesto') }}</b-nav-item>
        <b-nav-item :to="localePath('candidatura')">{{ $t('nav.candidates') }}</b-nav-item>
        <b-nav-item :to="localePath('actua')">{{ $t('nav.takeaction') }}</b-nav-item>
        <b-nav-item :to="localePath('noticies')">{{ $t('nav.news') }}</b-nav-item>
        <b-nav-item :to="localePath('niunminutmes')">{{ $t('nav.lawless') }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://www.facebook.com/coaliciocompromis" target="blank"><fa :icon="['fab', 'facebook-square']" /> <span class="d-lg-none">Facebook</span></b-nav-item>
        <b-nav-item href="https://twitter.com/compromis" target="blank"><fa :icon="['fab', 'twitter']" /> <span class="d-lg-none">Twitter</span></b-nav-item>
        <b-nav-item href="https://www.instagram.com/compromis_net/" target="blank"><fa :icon="['fab', 'instagram']" /> <span class="d-lg-none">Instagram</span></b-nav-item>
        <b-nav-item href="https://www.compromis.net/whatsapp" target="blank"><fa :icon="['fab', 'whatsapp']" /> <span class="d-lg-none">WhatsApp</span></b-nav-item>
        <b-nav-item href="https://t.me/compromis" target="blank"><fa :icon="['fab', 'telegram']" /> <span class="d-lg-none">Telegram</span></b-nav-item>
        <b-nav-item v-if="$i18n.locale !== 'val'" @click="localeChange('val')">Valencià</b-nav-item>
        <b-nav-item v-if="$i18n.locale !== 'cas'" @click="localeChange('cas')">Castellano</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import CompromisLogo from './CompromisLogo'
  import MaspaisLogo from './MaspaisLogo'

  export default {
    name: 'mes-nav',

    components: {
      CompromisLogo,
      MaspaisLogo
    },

    methods: {
      localeChange (newLocale) {
        this.$i18n.locale = newLocale
        const name = (newLocale === 'val') ? this.$route.name.replace(/___cas/g, '___val') : this.$route.name.replace(/___val/g, '___cas')
        this.$router.push({ name })
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

        &:hover {
          color: $teal;
        }
      }
    }

    .navbar-brand {
      display: flex;
      padding: 0;

      .compromis-logo {
        svg {
          width: 9rem;
          height: 1.75rem;
        }
      }

      .maspais-logo {
        position: relative;
        top: -4px;
        margin-left: .75rem;

        svg {
          width: 8rem;
          height: 2rem;
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    .navbar {
      &-brand {
        .letters {
          display: none;
        }

        .compromis-logo,
        .maspais-logo {
          width: 2rem;
          overflow: hidden;
        }
      }

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
