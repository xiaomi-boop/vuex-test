<template>
  <div>
    <div class="action">
      <button @click="addNum">actionAdd</button>
      <button @click="reduceNum">actionReduce</button>
      <button @click="rideNum">actionRide</button>
      <button @click="exceptNum">actionExcept</button>
    </div>
    <div class="mutations">
      <button @click="mutationAddNum">mutationAdd</button>
      <button @click="mutationReduceNum">mutationReduce</button>
      <button @click="mutationRideNum">mutationRide</button>
      <button @click="mutationExceptNum">mutationExcept</button>
    </div>
    <div class="state">
      <h5>state对象方式:{{ this.num }}</h5>
      <h5>state数组方式:{{ this.number }}</h5>
    </div>
    <div class="getter">
      <h5>getter操作获取值类型:{{ this.type }}</h5>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  created() {
    console.log(this.$store.state.num);
  },
  computed: {
    // 将 this.$store.state.num 映射到this.num上 也可以使用对象{}的方式映射到别名上
    ...mapState(["num"]),
    ...mapState({
      number: "num",
    }),
    // 将this.$store.state.type_num操作的返回结果映射到this.type上， 如果store值和this的值相同的话可以["type_num"]的方式进行映射
    ...mapGetters({
      type: "type_num",
    }),
  },
  methods: {
    // mapMutations等同于this.$store.commit()操作，将store操作结果映射到this属性上，只能执行同步操作
    ...mapMutations({
      mutationAddNum: "ADD_NUM",
      mutationReduceNum: "REDUCE_NUM",
      mutationRideNum: "RIDE_NUM",
      mutationExceptNum: "EXCEPT_NUM",
    }),
    // mapActions等同于this.$store.dispatch()操作，只能执行异步操作，需要执行this.$store.commit()操作传递到mapMutations进行执行同步操作
    ...mapActions({
      addNum: "ADD_NUM",
      reduceNum: "REDUCE_NUM",
      rideNum: "RIDE_NUM",
      exceptNum: "EXCEPT_NUM",
    }),
  },
};
</script>

<style>
.action {
  margin-bottom: 1rem;
}
.action button {
  margin-right: 1rem;
  cursor: pointer;
}
.mutations {
  margin-bottom: 1rem;
}
.mutations button {
  margin-right: 1rem;
  cursor: pointer;
}
</style>
