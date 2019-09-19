export const exercise = {
  data() {
    return {
      exFour: "Exercise 4"
    }
  },
  computed: {
    computedMixin() {
      var textArray = this.exFour.split("");
      var revArray = textArray.reverse();
      var revText = revArray.join("");
      return revText + ` (${revText.length})`;
    }
  }
}
