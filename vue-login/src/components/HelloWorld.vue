<template>
  <div id="app">
   <label for="username">账号：</label> <input type="text" name="username" id="username" v-model="username" placeholder="请输入账号" >
  <label for="pwd">密码：</label><input type="password" name="pwd" v-model="pwd"  placeholder="请输入密码">
  <input type="submit" name="submit" id="pwd" @click="login()">
  </div>
  
</template>
<script type="text/javascript">
  export default{
    data(){
      return{
        username:'',
        pwd:''
      }

    },
    methods:{
      login(){
        this.$http.get('/api/login/getUsername')
        .then(function(response){
          console.log(response);
          let params={
            username:this.username,
            pwd:this.pwd
          };
          return this.$http.post('/api/login/createUsername',params);
        })
        .then(function(response){
          console.log(response);
        })
        .catch(function(reject){
          console.log(reject);
        });

      }
    }
  }
</script>