<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <h3>Input data</h3>
                  <div class="form-group">
                    <label for="fullname">First Name:</label>
                    <input
                      id="fullname"
                      type="text"
                      class="form-control"
                      v-model="firstName">
                  </div>
                  <div class="form-group">
                    <label for="fullname">Last Name:</label>
                    <input
                      id="fullname"
                      type="text"
                      class="form-control"
                      v-model="lastName">
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      id="email"
                      type="text"
                      class="form-control"
                      v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="password">Password:</label>
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      v-model="password">
                  </div>
                  <div class="form-group">
                    <label for="show-yes">Yes:</label>
                    <input
                      id="show-yes"
                      type="radio"
                      value="Yes"
                      v-model="storeData">
                    <label for="show-no">No:</label>
                    <input
                      id="show-no"
                      type="radio"
                      value="No"
                      v-model="storeData">
                  </div>
                  <button
                          class="btn btn-primary"
                          @click.prevent="submitted = true">Submit!
                  </button>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName }} {{ lastName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      storeData: "",
      submitted: false
    }
  }
}
</script>

<style>
</style>
