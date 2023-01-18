<template>
  <div>
    <table class="table">
      <thead>
        <th>順序</th>
        <th>姓名</th>
        <th>電話</th>
        <th>地址</th>
      </thead>
      <tbody>
        <tr v-for="(ticket, index) in tickets" :key="ticket.id">
          <td>{{ index + 1 }}</td>
          <td>{{ ticket.fullName }}</td>
          <td>{{ ticket.phone }}</td>
          <td>{{ ticket.address }}</td>
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
      tickets: [],
    };
  },
  methods: {},
  mounted() {
    this.tickets = this.res;
  },
};
</script>

<style scoped></style>
