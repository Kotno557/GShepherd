<template>
  <div>
    <table class="table">
      <thead>
        <th>排名</th>
        <th>名稱</th>
      </thead>
      <tbody>
        <tr v-for="(option, index) in options" :key="option.id">
          <td>{{ index + 1 }}</td>
          <td>{{ option.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['res'],
  data() {
    return {
      options: [],
    };
  },
  methods: {
    sortByAmount(a, b) {
      // TODO: deal with -1, not 0
      if (a.amount === b.amount) {
        return a.id < b.id;
      }
      return a.amount < b.amount;
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
