<template>
  <div class="store">
    <header class="between">
      <h2>업체목록</h2>
      <div class="right row">
        <div class="search_box row">
          <input type="text" placeholder="업체명으로 검색">
          <el-button text circle >
            <span class="material-icons">search</span>
          </el-button>
        </div>
        <div class="btns">
          <el-button round color="#292929">
            <span>업체등록</span>
          </el-button>
        </div>
      </div>
    </header>
    <div class="box">
      <el-table 
        :data="tableData" 
        style="width: 100%" 
        table-layout="auto" 
        size="large"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="id" width="80" sortable/>
        <el-table-column prop="store" label="업체명">
          <template #default="scoped">
            <nuxt-link to="/store/1" class="store_name">
              {{scoped.row.store}}
            </nuxt-link>
          </template>
        </el-table-column>
        <el-table-column prop="ceo" label="점주명" width="80"/>
        <el-table-column prop="address" label="주소지" />
        <el-table-column prop="phone" label="연락처" />

        <el-table-column prop="service" label="이용중인 서비스" />
        <el-table-column prop="members" label="회원등급" />
        <el-table-column prop="machines" label="등록기기" />
        <el-table-column label="옵션" fixed="right" width="120">
          <template #default>
            <div class="table-cell-btns row">
              <el-button>A/S 알림톡 발송</el-button>
              <el-button>삭제</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>

const tableData = ref(
  [
    {
      id: 1,
      store: '워시마스터24 셀프빨래방 경주성건동점',
      ceo: '박성준',
      address:'경북 경주시 금성로368번길 27',
      phone: '010-8525-4561',
      service: '키오스크',
      members: '프리미엄',
      machines: '1대',

    },
    {
      id: 2,
      store: '셀프빨래방 진주 뉴라온스테이점',
      ceo: '이동조',
      address:'경기 고양시 덕양구 삼송로 240',
      phone: '010-4878-1333',
      service: '키오스크, 스마트페이, 페이코',
      members: '프리미엄',
      machines: '5대',

    },
    {
      id: 3,
      store: '월드크리닝 청주지점',
      ceo: '연은례',
      address: '충북 청주시 흥덕구 직지대로639번길 75',
      phone: '010-4981-6904',
      service: '키오스크, 스마트페이, 페이코',
      members: '프리미엄',
      machines: '5대',
    },
  ]
)




</script>

<style lang="scss" scoped>
.store{
  header{
    height:90px;
    h2{
      font-size:24px;
      font-weight:600;
    }

    .right{
      gap:10px;
      .search_box{
        border:1px solid #e2e2e2;
        border-radius:20px;
        background:#fff;
        overflow:hidden;
        padding:0 5px;

        input{
          width:300px;
          height:40px;
          outline: none;
          border:0;
          padding:0 10px;
        }

        .el-button{
          padding:0;
          width:30px;
          height:30px;
          span{
            font-size:18px;
          }
        }
      }
      .btns{
        .el-button{
          height:40px;
          padding:0 15px;
          span{
            font-size:14px;
          }
        }
      }
    }
  }
}

.store_name{
  text-decoration: underline;
  text-underline-offset: 4px;
}
.store_name:hover{
  color:#0066ff;
}

.table-cell-btns{
  gap:5px;
  .el-button{
    margin:0;
  }
}

</style>