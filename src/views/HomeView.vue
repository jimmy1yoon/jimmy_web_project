<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <input type="text" v-model="input1"/>
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>

    <select class="form-control" v-model="region" @change="changeRegion">
      <option :key="i" value="d.v" v-for="(d,i) in options">{{ d.t }}
      </option>
    </select>

    <table class="table table-bordered" v-if="table_show">
      <tr :key="i" v-for="(d,i) in options">
        <td> {{ d.v }}</td>
        <td> {{ d.t }}</td>
      </tr>
    </table>" -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return {
      title: "Jimmy Page",
      // input1: "abcd",
      // options:[
      //   {v:"S",t:"Seoul"},
      //   {v:"J",t:"Jeju"},
      //   {v:"B",t:"Busan"},
      // ],
      // region: "B",
      // table_show: false,
    }
  },
  // watch:{
  //   input1(){
  //     console.log(this.input1);
  //   }
  // },
  // methods: {
  //   getData(){
  //     alert(this.input1);
  //   },
  //   setData(){
  //     this.input1 = "1234";
  //   },
  //   changeRegion(){
  //     alert(this.region);
  //   },
  // },
  // beforeCreate() {console.log("beforeCreate")},
  // created() {console.log("created")},
  // beforeMount(){console.log("beforeMount")},
  // mounted(){console.log("mounted")},
  // beforeUpdate(){console.log("beforeUpdate")},
  // updated(){console.log("updated")},
  // beforeDestroy(){console.log("beforeDestroy")},
  // destroyed(){console.log("destroyed")},
};

</script>
