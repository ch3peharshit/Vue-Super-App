<template>
  <div class="m-auto">
  <h2 class="text-3xl text-center my-4">Food count : {{ foodCount }}</h2>
  <ul class="border border-black rounded p-2">
  <li class="flex justify-between" v-for="(food, index) in foods" :key="food.toString()">
    <div>{{ food.item }} </div>
    <button @click="removeFood(index)">x</button>
  </li>
  </ul>
   <form class="mt-10" @submit.prevent="addHero">
  <input type="text" class="border border-black border-dotted rounded px-2" v-model="foodItem" />
  <button
    class="
      border
      rounded
      bg-gradient-to-r
      from-blue-700
      to-blue-500
      text-white
      ml-2
      px-2
    "
    type="submit"
  >
    Add item
  </button>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodItem: "",
      foods: [
        { item: "Chicken Biryani" },
        { item: "Tandoori Chicken" },
        { item: "Peperoni Pizza" },
        { item: "Gulab Jamun" },
        { item: "Bira Boom" },
      ],
    };
  },
  computed: {
    foodCount() {
      return this.foods.length;
    },
  },
  methods: {
    addFood() {
      if (this.foodItem === "") {
        return;
      }
      this.foods.push({ item: this.foodItem });
    },
    removeFood(index) {
      console.log(this.foods);

      this.foods = this.foods.filter((food, i) => i !== index);
      console.log(this.foods);
    },
  },
};
</script>

<style>
</style>