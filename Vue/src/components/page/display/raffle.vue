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
import axios from 'axios';
import Global from '../../../Global';

export default {
  props: ['eventId'],
  data() {
    return {
      tickets: [],
    };
  },
  methods: {
    getRecord(){
      axios.get(`${Global.backend}/record`)
      .then((res)=>{
        for(let item of res.data){
          if(item.eventId===this.eventId){
            this.tickets.push(item);
          }
        }
        console.log(this.tickets);
      })
      .catch((err)=>{
        alert('讀取票記錄錯誤...');
        console.log(err);
      })
    }
  },
  mounted() {
    this.getRecord();
  },
};
</script>

<style scoped></style>
