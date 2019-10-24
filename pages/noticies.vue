<template>
  <div class="container">
    <h2>Notícies</h2>
    <div v-if="loading" class="loading">
      Carregant...
    </div>
    <div v-else>
      <div v-if="articles.length">
        <div v-for="(article, index) in articles" :key="article.id">
          <a :href="article.link" :class="['article-item', index == 0 ? 'article-item-featured' : '']" target="_blank" rel="noopener">
            <h3 v-html="article.title.rendered" class="article-title"></h3>
            <p v-html="article.excerpt.rendered" class="article-excerpt"></p>
            <img :src="article._embedded['wp:featuredmedia'][0].source_url" :alt="article._embedded['wp:featuredmedia'][0].alt_text" class="article-thumbnail">
          </a>
        </div>
        <div class="button-container">
          <a href="https://comprom.is" target="_blank" rel="noopener" class="btn btn-lg btn-secondary">Més notícies en compromís.net</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
   data() {
     return {
       articles: [],
       loading: false
     }
   },


   mounted() {
     this.fetchArticles()
   },

   methods: {
     fetchArticles() {
       this.loading = true
       console.log('absdfkjhasf')
       const categories = this.$i18n.locale === 'cas' ? '&categories=1939' : '&categories_exclude=1939'
       axios.get(`https://compromis.net/wp-json/wp/v2/posts/?per_page=4&_embed${categories}`)
        .then((response) => {
          this.articles = response.data
          console.log(response)
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
        .finally(() => {
          this.loading = false
        })
     }
   },
  }
</script>

<style lang="scss" scoped>
@import '../sass/variables';
h2 {
  font-size: 6rem;
  font-weight: bold;
  padding: 2.5rem 0
}

.button-container {
  text-align: center;
  padding: 2rem 0 4rem;
}

 .article {
  &-item {
    display: grid;
    grid-column-gap: 2.25rem;
    grid-row-gap: 0.75rem;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "image title"
                          "image excerpt";
    color: $navy;
    transition: 0.4s ease-in-out;
    padding-bottom: 1.25rem;

    &:hover {
      color: $teal;
      text-decoration: none;
      .article-thumbnail {
        opacity: 0.8;
      }
      .article-excerpt {
        color: $navy;
      }
    }
  }

  &-item-featured {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 2rem;

    .article-title {
      font-size: 2.75rem;
    }
    .article-excerpt {
      align-self: end;
    }
  }

  &-title {
    margin-bottom: 0;
    font-size: 2.15rem;
    font-weight: bold;
    grid-area: title;
  }

  &-thumbnail {
    margin-bottom: 0.5rem;
    width: 100%;
    grid-area: image;
    transition: 0.4s ease-in-out;
  }

  &-excerpt {
    grid-area: excerpt;
    font-size: 1.15rem;
    transition: 0.4s ease-in-out;
    &:hover {
      color: $navy;
    }
  }
 }

 .loading {
   height: 400px;
   font-size: 4rem;
   color: $beige;
   display: flex;
   align-items: center;
   justify-content: center;
 }

@include media-breakpoint-down(lg) {
  .article {
    &-item {
      grid-template-columns: 0.75fr 1fr;
    }
    &-title {
      font-size: 1.5rem;
    }
    &-excerpt {
      grid-area: excerpt;
      font-size: 1rem;
    }
  }
}

@include media-breakpoint-down(md) {
  h2 {
    font-size: 4rem;
    font-weight: bold;
    padding: 1.5rem 0
  }

  .article {
    &-item {
      grid-template-columns: 1fr;
      grid-template-areas: "image"
                            "title"
                          "excerpt"
    }

    &-item-featured {
      padding-bottom: 1rem;

      .article-title {
        font-size: 1.65rem;
      }
      .article-excerpt {
        align-self: end;
      }
    }

    &-title {
      font-size: 1.65rem;
    }

    &-excerpt {
      grid-area: excerpt;
      font-size: 1.1rem;
    }
  }
}

</style>
