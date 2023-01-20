<template>
  <div style="border-radius: 10px;">
    <table class="table table-hover">
      <thead>
        <tr class="table-primary">
          <th scope="col">順位</th>
          <th scope="col">想法</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(idea, index) in thought" class="table-light">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ idea }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['eventId'],
  data() {
    return {
      thought: []
    };
  },
  methods: {
    getRecord() {
      axios.get(`${Global.backend}/record`)
        .then((res) => {
          for (let item of res.data) {
            if (item.eventId === this.eventId) {
              this.thought.push(item.idea);
            }
          }
          console.log('Get ideas: ', this.thought);
        })
        .catch((err) => {
          alert('無法讀取投票資料...');
          console.log(err);
        });
    },
  },
  mounted() { 
    this.getRecord();
  },
};
</script>

<style scoped>

</style>
