<template>
  <div class="box cs">
    <h4>관리자메모(CS)</h4>
    <div class="form">
      <el-input
        v-model="adminMemo"
        type="textarea"
        placeholder="내용을 입력해주세요"
        rows="8"
      />
      <el-button>등록하기</el-button>
    </div>
    
    <el-divider></el-divider>

    <h4>CS이력(최근 5개)</h4>
    
    <ul>
      <li>
        <strong>키오스크 백색화면 현상으로 키오스크 재부팅을 실행함</strong>
        <span>2022.12.27 13:34</span>
      </li>
      <li>
        <strong>터치인식 불량으로 인한 키오스크 재부팅</strong>
        <span>2022.12.16 20:12</span>
      </li>
      <li>
        <strong>키오스크 프로그램 재설치</strong>
        <span>2022.12.01 16:31</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.box.cs{
  position: sticky;
  top:100px;
  h4{
    font-size:16px;
    font-weight:500;
    margin-bottom:15px;
  }

  .form{
    .el-button{
      width:100%;
      height:40px;
      margin-top:10px;
      background:#292929;
      color:#fff;
      border:0;
    }
  }

  ul{
    display:flex;
    flex-direction: column;
    gap:10px;
    li{
      background:#f5f5f7;
      padding:15px;border-radius:5px;
      span,strong{
        display:block;
      }
      strong{
        font-size:14px;
      }
      span{
        margin-top:5px;
        font-size:12px;
        color:#797979;
      }
    }
  }
}    
</style>