<template>
  <div class="container" style="margin-top: 5%">
    <h3>Quotes Added</h3>
    <div class="quotebar">
        <div
          class="quotebar text-center progress"
          :style="{width: numQuotes * 10 + '%'}">
          {{ numQuotes }} / 10
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['numQuotes']
}
</script>

<style scoped>
.quotebar {
    width: 100%;
    height: 30px;
    font-size: 16px;
    background-color: #eee;
    transition: width 500ms;
}
.progress {
  background-color: #3a81c4;
  margin: 0;
  color: white;
}
.text-center {
    text-align: center;
}
</style>
