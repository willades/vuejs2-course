<template>
    <div>
      <h1>Filters & Mixins</h1>
      <hr>
      <input v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>
      <app-list></app-list>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';
export default {
  mixins: [fruitMixin],
  created() {
    console.log("List created hook")
  }
}
</script>

<style>

</style>
