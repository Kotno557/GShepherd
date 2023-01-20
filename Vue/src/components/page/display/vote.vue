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
import axios from 'axios';
import { getUnixTime } from 'date-fns';
import Global from '../../../Global';

export default {
  props: ['eventId'],
  data() {
    return {
      options: {},
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
              this.options[item.option]++;
            }
          }
          console.log('Get event: ',res.data);
        })
        .catch((err)=>{
          alert('無法讀取投票資料...');
          console.log(err);
        }); 
    },
    getEventInfo() {
      axios.get(`${Global.backend}/event/${this.eventId}`)
        .then((res) => {
          this.options={};
          for (let item of res.data) {
            if (item.id === this.eventId) {
              for(let option in item.options){
                this.options[option]=0;
              }
            }
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
    getEventInfo();
    getRecord();
  }
}
</script>

<style scoped>

</style>
