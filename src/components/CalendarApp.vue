<template>
  <div class="m-auto">
    <h2 class="text-2xl my-2 text-center">Vue Calendar</h2>
    <section class="mx-2 flex justify-between">
      <h3 class="font-bold">{{ currentMonthName }}</h3>
      <h3 class="font-bold">{{ currentYear }}</h3>
    </section>
    <section class="flex">
      <p
        class="text-center my-2"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonths(currentYear, currentMonth)"
        :key="num"
        :class="currentDateClass(num) ? 'text-red-500' : ''"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button class="px-2 border border-black rounded" @click="prev">
        Previous
      </button>
      <button class="px-2 border border-black rounded" @click="next">
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      currentDate: new Date().getDate(),
    };
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        { month: "long" }
      );
    },
  },
  methods: {
    daysInMonths() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth == 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth == 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(date) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        date
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate === currentFullDate;
    },
  },
};
</script>

<style>
</style>