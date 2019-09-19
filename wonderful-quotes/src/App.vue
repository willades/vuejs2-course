<template>
  <div>
    <progress-bar :numQuotes="quotes.length"></progress-bar>
    <quote-space></quote-space>
    <div class="container">
      <quote-display
        v-for="(quote, index) in quotes"
        :quoteText="quote"
        @click.native="deleteQuote(index)">
      </quote-display>
    </div>
      <div class="container alert alert-info">Info: Click on a Quote to delete it</div>
  </div>
</template>

<script>
import { eventBus } from './main'
import ProgressBar from './components/ProgressBar.vue'
import QuoteSpace from './components/QuoteSpace.vue'
import QuoteDisplay from './components/QuoteDisplay.vue'
export default {
  data: function() {
    return {
      numQuotes: 5,
      quotes: [
        "My first quote is actually pretty long"
      ]
    }
  },
  components: {
    'progressBar': ProgressBar,
    'quoteSpace': QuoteSpace,
    'quoteDisplay': QuoteDisplay
  },
  methods: {
    deleteQuote: function(index) {
      console.log("Clicked!")
      this.quotes.splice(index, 1)
    }
  },
  created() {
    eventBus.$on("quoteSubmitted", quote => {
      if (this.quotes.length < 10) {
        this.quotes.push(quote);
      } else {
        alert("Please delete a quote before adding another")
      }
    })
  }
}
</script>

<style>
</style>
