<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="item in servers"
                    @click="view(item)">
                Server #{{ item.id }} - Status: {{ item.status }}
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from "../../main"
export default {
  data: function() {
    return {
      servers: [
        {
          id: 1,
          status: "Critical"
        },
        {
          id: 2,
          status: "Stable"
        },
        {
          id: 3,
          status: "Stable"
        },
        {
          id: 4,
          status: "Stable"
        },
        {
          id: 5,
          status: "Restarting..."
        }
      ]
    }
  },
  methods: {
    view: function(selectedServer) {
      eventBus.$emit('selectServer', selectedServer);
    }
  },
  created() {
    eventBus.$on('serverResolved', (newServer) => {
      this.servers.forEach(function(server, index) {
        if (server.id === newServer.id) {
          this.servers[index].status = newServer.status
        }
      })
    })
  }
}
</script>

<style>

</style>
