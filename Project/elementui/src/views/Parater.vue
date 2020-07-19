<template>
    <div>
        <h1>Parent</h1>
        <h3>这是一个 计时器{{count}}</h3>
        <m-child msg="from Parent msg" @showMsg="showMsg"></m-child>
     <el-row :span = "2">
         <el-clo><div ></div></el-clo>
    </el-row>

    </div>
</template>

<script>
import MChild from './child'
import {mapState} from 'vuex'
export default {
    // computed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // },

    computed:mapState({
       count:'count' 
    }), 
    data(){
        return {
            msg:''
        }
    },
    methods: {
        showMsg(val){
            // console.log(val)
            // this.msg =  val
            // this.$store.commit('add')
            this.$store.dispatch('increamt')
        },
    },
    components:{
        MChild
    },
    mounted(){
        console.log(this.$children[0].msg)
    }


}
</script>


<style >
     .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

