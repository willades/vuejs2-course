<template>
    <div class="col-xs-12 col-sm-6">
      <transition-group name="fade">
        <template v-if="displayServer.status != ''">
          <p>Status for server {{ displayServer.id }} for server: {{ displayServer.status }}</p>
          <button @click="resolve" name="button">Resolve Issues</button>
        </template>
      <p v-else>Currently not viewing any servers</p>
    </transition-group>
    </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  data: function() {
    return {
      displayServer: {
        id: -1,
        status: ''
      }
    }
  },
  methods: {
    resolve: function() {
      this.displayServer.status = "Stable"
      eventBus.$emit('serverResolved', {id: this.displayServer.id, status: "Stable"});
    }
  },
  created() {
      eventBus.$on('selectServer', (server) => {
      this.displayServer = server;
    })
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
