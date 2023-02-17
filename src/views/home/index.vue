<template>
  <div class="home">
    <div class="list" ref="list" @scroll.prevent="scrollListener">
      <div :style="{ paddingTop: topBlankFill + 'px', paddingBottom: bottomBlankFill + 'px' }">
        <p class="box" v-for="item in showList" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from '@/store/use.js'

const useStoreObj = useStore()
const list = ref()
const itemHeigh = 40
let itemNum = ref(0)
let startIndex = ref(0)
let allList = []

const getList = () => {
  for (let i = 0; i < 100; i++) {
    allList[i] = i + 1
  }
}
getList()

// 获取容器可以展示的个数
const getItemNum = () => {
  itemNum.value = ~~(list.value.offsetHeight / itemHeigh) + 2
}

// 滚动时动态获取容器开始元素的索引
const scrollListener = () => {
  startIndex.value = ~~(list.value.scrollTop / itemHeigh)
}

// 容器最后一个元素的索引
const endIndex = computed(() => {
  /* let lastIndex = startIndex.value + itemNum.value
  if (!allList[lastIndex]) {
    lastIndex = allList.length
  } */
  return startIndex.value + itemNum.value
})

const showList = computed(() => {
  return allList.slice(startIndex.value, endIndex.value)
})

// 上空白高度
const topBlankFill = computed(() => {
  return startIndex.value * itemHeigh
})

// 下空白高度
const bottomBlankFill = computed(() => {
  return (allList.length - endIndex.value) * itemHeigh
})

onMounted(() => {
  getItemNum()
})

</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
}
.list {
  padding: 0 10px 10px 10px;
  height: 400px;
  overflow-y: auto;
}
.list .box {
  margin: 10px 0 0 0;
  height: 30px;
  background-color: #fff;
  text-align: center;
}

</style>