<template>
  <!-- <div> app {{$store.state.user.profile.account}} <button @click="$store.commit('user/setUser',{account:'fasfsd'})">修改用户信息</button></div> -->
    <div class="container">
    <!-- 修改数据，测试是否持久化 -->
    App {{$store.state.user.profile.account}}
      <button @click="$store.commit('user/updateName',{account:'dfsafsds'})">设置用户信息</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
