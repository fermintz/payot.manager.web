<template>
  <div class="main">
    <div class="top between">
      <div class="search row">
        <input type="text" placeholder="업체명 검색">
        <el-button text circle>
          <span class="material-icons">search</span>
        </el-button>
      </div>
    </div>

    <el-row :gutter="20">
      <el-col :lg="6" :md="12">
        <div class="box report">
          <div class="row">
            <div class="icon">
              <span class="material-icons">
                store
              </span>
            </div>
            <div class="cont">
              <span>등록된 매장수</span>
              <strong>634</strong>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12">
        <div class="box report">
          <div class="row">
            <div class="icon">
              <span class="material-icons">
                local_laundry_service
              </span>
            </div>
            <div class="cont">
              <span>등록된 총 장비수</span>
              <strong>1281</strong>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12">
        <div class="box report">
          <div class="row">
            <div class="icon">
              <span class="material-icons">
                people
              </span>
            </div>
            <div class="cont">
              <span>등록된 회원수</span>
              <strong>140,281</strong>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12">

      </el-col>

      <el-col :lg="12" :md="24">
        <div class="box chart">
          <div class="box-head">
            <h4>월별 매장증가 추이(막대그래프)</h4>
          </div>
          <div class="chart-box">
            
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="24">
        <div class="box chart">
          <div class="box-head">
            <h4>일간 이용률(라인그래프)</h4>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :lg="12" :md="24">
        <div class="box chart">
          <div class="box-head">
            <h4>월별 매장증가 추이(막대그래프)</h4>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12">
        <div class="box chart">
          <div class="box-head">
            <h4>일간 이용률(라인그래프)</h4>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12">
        <div class="box chart">
          <div class="box-head">
            <h4>일간 이용률(라인그래프)</h4>
          </div>
        </div>
      </el-col>

      <el-col :lg="18" :md="24">
        <div class="box">
          <div class="box-head">
            <h4>최근 등록된 업체</h4>
          </div>

          <div class="table">
            <el-table 
              :data="tabledats" 
              style="width: 100%" 
              table-layout="auto" 
              size="large"
            >
              <el-table-column prop="store" label="업체명">
                <template #default="scoped">
                  <nuxt-link to="/store/1" class="store_name">
                    {{scoped.row.store}}
                  </nuxt-link>
                </template>
              </el-table-column>
              <el-table-column prop="ceo" label="점주명" width="80"/>
              <el-table-column prop="address" label="주소지" />
              <el-table-column prop="phone" label="연락처" width="150" />
              <el-table-column prop="service" label="이용중인 서비스" />
              <el-table-column prop="members" label="회원등급" />
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :md="6">
        
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts" setup>

const tabledats = [
  {
    id: 1,
    store: '워시마스터24 셀프빨래방 경주성건동점',
    ceo: '박성준',
    address:'경북 경주시 금성로368번길 27',
    phone: '010-8525-4561',
    service: '키오스크',
    members: '프리미엄',
  },
  {
    id: 2,
    store: '셀프빨래방 진주 뉴라온스테이점',
    ceo: '이동조',
    address:'경기 고양시 덕양구 삼송로 240',
    phone: '010-4878-1333',
    service: '키오스크, 스마트페이, 페이코',
    members: '프리미엄',
  },
  {
    id: 3,
    store: '월드크리닝 청주지점',
    ceo: '연은례',
    address: '충북 청주시 흥덕구 직지대로639번길 75',
    phone: '010-4981-6904',
    service: '키오스크, 스마트페이, 페이코',
    members: '프리미엄',
  },
]


</script>

<style lang="scss" scoped>
.main{
  padding:40px 0;

  .box{
    margin-bottom:20px;
  }
  .top{
    margin-bottom:20px;
    .search{
      position: relative;
      border:1px solid #c2c2c2;
      border-radius:20px;
      overflow:hidden;
      background:#f5f5f7;
      input{
        border:0;
        width:300px;
        height:40px;
        outline: none;
        padding:0 40px 0 15px;
        background:unset;
      }
      .el-button{
        position: absolute;
        right:0;
        width:40px;
        height:40px
      }
    }
  }
  

  .report{
    padding:18px;
    .row{
      gap:15px;
    }
    .icon{
      display:flex;
      align-items: center;
      justify-content: center;
      width:70px;
      height:70px;
      background:#edf1f7;
      border-radius:24px;
      span{
        font-size:32px;
        color:#0066ff;
      }
    }
    .cont{
      span,strong{
        display:block;
      }
      span{
        font-size:14px;
      }
      strong{
        font-size:28px;
        font-weight:600;
        margin-top:8px;
      }
    }
    
  }
}

.chart{
  min-height:360px;
}
</style>