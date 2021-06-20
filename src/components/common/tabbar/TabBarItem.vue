<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="isActiveStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
      //default如果是对象或者数组类型,必须是一个函数
    },
    activeStyle:{
      type:String,
      default:'red'
    }
  },
  computed: {
    isActive() {
      //计算属性动态选中
      //当前处于活跃状态的$route true
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveStyle(){
      //计算属性,如果处于激活状态,颜色使用props中的activeStyle属性的值
      return this.isActive?{color:this.activeStyle}:{}
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1px;
  text-align: center;
  height: 49px;
  font-size: 10px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}


</style>