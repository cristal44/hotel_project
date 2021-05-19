
import { reactive } from "vue";

export const store = {
  state: reactive({
    numbers: [1, 2, 3]
  }),
  addNumber(newNumber) {
    this.state.numbers.push(newNumber);
  }
};