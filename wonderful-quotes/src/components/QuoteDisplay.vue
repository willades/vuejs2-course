<template>
  <div class="col-sm-3">
    <div class="card quote-box">
      <span class="fancy">
        {{ quoteText }}
      </span>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  props: ['quoteText']
}
</script>

<style scoped>
.quote-box {
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10%;
}
.fancy {
  font-size: 35px;
  font-family: Snell Roundhand;
}
</style>
