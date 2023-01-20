<template>
  <div class="d-flex justify-content-center align-items-center my-3">
    <div class="card" style="width: 42rem;">
      <img class="card-img-top"
        src="https://www.thesprucepets.com/thmb/1Sc4hYFwXaM7Wg15KdW86tPDwDc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-977898246-1942d4364fa64bd2ba792a86f4f24715.jpg"
        alt="Card image cap">
      <div class="card-body text-center">
        <h3>目前所有參加人數總共有 <span class="text-danger display-5">{{ tickets.length }}</span> 位</h3>
      </div>
    </div>
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
    getRecord() {
      axios.get(`${Global.backend}/record`)
        .then((res) => {
          for (let item of res.data) {
            if (item.eventId === this.eventId) {
              this.tickets.push(item);
            }
          }
          console.log(this.tickets);
        })
        .catch((err) => {
          alert('讀取抽獎記錄錯誤...');
          console.log(err);
        })
    }
  },
  mounted() {
    this.getRecord();
  }
};
</script>

<style scoped>

</style>
