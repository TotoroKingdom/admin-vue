<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <br/>
    <div class="shenli">
      <img  src="../assets/image/shenli.jpg">
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome 神里大小姐'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}
.shenli{
  height: 300px;
  width: 300px;
}
h1, h2 {
  font-weight: normal;
}
</style>
