<template>
  <div class="container" style="margin-top: 3%">
    <div class="quotespace">
      <div>
        <h4>Quote</h4>
        <textarea name="quoteText" rows="4" cols="80" v-model="quote"></textarea>
        <br />
        <br />
        <div class="text-center">
          <button class="btn btn-md" @click="submitQuote">Add Quote</button>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  data: function() {
    return {
      quote: ""
    }
  },
  methods: {
    submitQuote: function() {
      eventBus.$emit("quoteSubmitted", this.quote)
      this.quote = ""
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: #3a81c4;
  color: white;
}
.quotespace {
  display: flex;
  justify-content: center;
}
</style>
