<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1
                  v-my-on:click="changeColor"
                  :style="{color:myColor}">Directives Exercise</h1>
                <div
                  style="width: 100px; height: 100px; background-color: lightgreen"
                  v-my-on:mouseenter="mouseEnter"
                  v-my-on:mouseleave="mouseLeft">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      myColor: "blue"
    }
  },
  directives: {
    myOn: {
      bind(el, binding) {
        // el.onclick = function () {
        //   binding.value()
        // }
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    changeColor() {
      this.myColor == "red" ? this.myColor = "blue" : this.myColor = "red"
    },
    mouseEnter() {
      console.log("mouse entered");
    },
    mouseLeft() {
      console.log("mouse left");
    }
  }
}
</script>

<style>
</style>
