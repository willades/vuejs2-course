<template>
  <div>
    <p>Server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'critical'
    }
  },
  methods: {
    changeStatus() {
      this.status = 'Normal';
    }
  }
}
</script>

<style lang="css">
</style>
