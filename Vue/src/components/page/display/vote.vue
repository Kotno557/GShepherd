<template>
  {{ options }}
  <button @click="sort">!</button>
  <div style="border-radius: 10px;">
    <table class="table table-hover">
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
import Test from '../joinPage/test.vue';

export default {
  props: ['eventId'],
  data() {
    return {
      options: [],
      events: []
    };
  },
  methods: {
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
          this.sort();
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
    },
    sort() {
      for(let i=0;i<this.options.length;i++){
        for(let j=0;j<this.options.length;j++){
          if(this.options[j].poll>this.options[j].poll){
            let temp=this.options[j];
            this.options[j]=this.options[i];
            this.options[i]=temp;
          }
        }
      }
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
