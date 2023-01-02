<template>
  <div class="wrap">
    <Side />
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap{
  padding-left:280px;
  .container{
    padding:0 40px 80px 40px;
  }
}
</style>