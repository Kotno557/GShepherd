<template>
  <div>
    <table class="table table-hover rounded">
      <thead>
        <tr class="table-primary">
          <th scope="col">排名</th>
          <th scope="col">名稱</th>
          <th scope="col">票數</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(option, index) in options" :key="option.id" class="table-light">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ option.name }}</td>
          <td>{{ option.poll }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { getUnixTime } from 'date-fns';
import Global from '../../../Global';

export default {
  props: ['eventId'],
  data() {
    return {
      options: [],
      events: []
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
    getRecord() {
      axios.get(`${Global.backend}/record`)
        .then((res) => {
          for (let item of res.data) {
            if (item.eventId === this.eventId) {
              for (let option of this.options) {
                if (item.option === option.name) {
                  option.poll++;
                }
              }
            }
          }
          console.log('Poll options: ', this.options);
        })
        .catch((err) => {
          alert('無法讀取投票資料...');
          console.log(err);
        });
    },
    getEventInfo() {
      axios.get(`${Global.backend}/event/${this.eventId}`)
        .then((res) => {
          for (let name of res.data.options) {
            this.options.push({ name: name, poll: 0 });
          }
          console.log('Get options: ', this.options);
        })
        .catch((err) => {
          alert('無法取得選項資訊...');
          console.log(err);
        })
    }
  },
  mounted() {
    this.getEventInfo();
    this.getRecord();
  }
}
</script>

<style scoped>

</style>
