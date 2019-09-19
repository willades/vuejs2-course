<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ exOne | text-reverse }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ exTwo | add-length }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ computedText }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ computedMixin }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { exercise } from './exercise'
export default {
  mixins: [exercise],
  data() {
    return {
      exOne: "Exercise 1",
      exTwo: "Exercise 2",
      exThree: "Exercise 3"
    }
  },
  filters: {
    textReverse(value) {
      var textArray = value.split("");
      var revArray = textArray.reverse();
      var revText = revArray.join("")
      return revText;
    }
  },
  computed: {
    computedText() {
      var textArray = this.exThree.split("");
      var revArray = textArray.reverse();
      var revText = revArray.join("");
      return revText + ` (${revText.length})`;
    }
  }
}
</script>

<style>
</style>
