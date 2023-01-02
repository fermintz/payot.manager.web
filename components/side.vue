<template>
  <div class="side">
    <div class="logo" @click="$router.push('/')">
      <img src="~/assets/img/payot_logo.png"/>
      <div class="name">
        <strong>페이오티</strong>
        <span>스토리 관리시스템</span>
      </div>
    </div>
    <nav>
      <nuxtLink to="/store">업체목록</nuxtLink>
      <nuxtLink to="/store/add">업체등록</nuxtLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.side{
  display:flex;
  flex-direction: column;
  align-items: center;
  background:#fff;
  position: fixed;
  height:100%;
  width:280px;
  top:0;
  left:0;
  .logo{
    display:flex;
    align-items: center;
    height:90px;
    cursor: pointer;
    
    img{
      height:50px;
      transition: all 0.3s;
    }
    .name{
      display:flex;
      flex-direction: column;
      margin-left:10px;
      gap:6px;
      strong,span{
        display:block;
      }
      strong{
        font-size:18px;
        font-weight:600;
        transition: all 0.3s;
      }
      span{
        font-size:12px;
        color:#797979;
        transition: all 0.3s;
      }
    }

    &:hover{
      img{
        height:52px;
        transition: all 0.3s;
      }
      strong{
        font-size:19px;
        transition: all 0.3s;
      }
      span{
        font-size:13px;
        transition: all 0.3s;
      }
    }
  }

  nav{
    display:flex;
    flex-direction: column;
    margin-top:40px;
    gap:25px;

    a{
      font-size:18px;
      font-family:'Noto Sans KR';
      color:#494949;

      &:hover{
        color:#0066ff;
      }
    }
  }
}
</style>