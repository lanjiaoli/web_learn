<template>
    <div>
        <h1>child</h1>

        <p>{{msg}}</p>

        <button @click='passmsg'>走你</button>
    </div>
</template>
<script>
import bus from '../uity/bus'
export default {
    props:{
        msg:{
            type: String,
            default:''
        },
    },
    methods:{
        passmsg(){
            this.$emit('showMsg','I am a child');
        }
    },
    mounted() {
        // 监听 bug总线的事件
        bus.$on("msg" , (val)=>{
            console.log(val);
            this.msg = val;
        })
       
    },
}
</script>

<style lang="">
    
</style>