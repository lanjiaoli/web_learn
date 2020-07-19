<template>
  <div id="app">
    <h1>222</h1>
    <button @click="passMsg">传递</button>
    <Mparater>1111</Mparater>
  </div>
</template>


<script>
import Mparater from './views/Parater'
import bus from './uity/bus'
export default {
  components:{
    Mparater,
  },
  methods: {
    passMsg(){
      bus.$emit('msg', '这是一个自定义的bus传递')
    }
  },
}
</script>
<style lang="sass">
#app{
  background-color: $theme-color;
}
</style>