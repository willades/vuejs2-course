<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                  :name="name"
                  @nameWasReset="name = $event"
                  :resetFn="resetName"
                  :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                  :userAge="age"
                  @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data: function() {
    return {
      name: "Will",
      resertFn: Function,
      age: 24
    }
  },
  methods: {
    changeName: function() {
      this.name = "Anna";
    },
    resetName: function() {
      this.name = "Will"
    }
  },
  components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
  }
}
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
