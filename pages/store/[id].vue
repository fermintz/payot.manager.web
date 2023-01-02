<template>
  <div class="store_detail">
    <header class="row between">
      <div class="left">
        <el-button color="#f5f5f7" round>
          <span class="material-icons">arrow_back</span>
        </el-button>
        <h2>
          런드리 24힐스테이트 스칸센점
        </h2>
      </div>

      <div class="btns">
        <el-button round @click="notify = true">
          <span>A/S알림톡 발송</span>  
        </el-button>
        <el-button round color="#292929">
          <span>저장하기</span>
        </el-button>
      </div>
    </header>

    <div class="tab_head row between">
      <div class="tabs row">
        <a 
          v-for="(item, index) in ['업체정보','장비목록','키오스크','CS이력']"
          :key="index"
          :class="{active:tabs === index}"
          @click="tabs = index"
        >
          {{ item }}
        </a>
      </div>

      <div class="info row">
        <div class="item">
          <span>최초등록일</span>
          <strong>2022-12-19</strong>
        </div>
        <div class="item">
          <span>마지막 수정일시</span>
          <strong>2022-12-24 : 13:56</strong>
        </div>
      </div>
    </div>

    <div class="tab_body" v-show="tabs === 0">
      <el-row :gutter="20">
        <el-col :md="17" class="left">
          <div class="box form">
            <dl>
              <dt>이용중인 서비스</dt>
              <dd>
                <el-checkbox-group v-model="checkList" size="large">
                  <el-checkbox label="kiosk" >키오스크</el-checkbox>
                  <el-checkbox label="smart" >스마트페이</el-checkbox>
                </el-checkbox-group>
              </dd>
            </dl>
            <dl>
              <dt>키오스크 회원등급</dt>
              <dd>
                <el-radio-group v-model="radio1" size="large">
                  <el-radio :label="1">프리미엄</el-radio>
                  <el-radio :label="2">일반</el-radio>
                  <el-radio :label="3">무료</el-radio>
                  <el-radio :label="4">무료(와포스)</el-radio>
                </el-radio-group>
              </dd>
            </dl>
          </div>
          <div class="box form">
            <dl>
              <dt>관리자 아이디</dt>
              <dd>
                <input type="text" value="010-8525-4561" disabled>
              </dd>
            </dl>
            <dl>
              <dt>관리자 비밀번호</dt>
              <dd>
                <input type="password" placeholder="4자리 이상 12자리 이하">
              </dd>
            </dl>
          </div>
          <div class="box form">
            <dl>
              <dt>사업자구분</dt>
              <dd>
                <el-radio-group v-model="radio2" size="large">
                  <el-radio :label="1">일반사업자</el-radio>
                  <el-radio :label="2">법인사업자</el-radio>
                </el-radio-group>
              </dd>
            </dl>
            <dl>
              <dt>프렌차이즈명</dt>
              <dd>
                <input type="text" placeholder="선택해주세요 (셀렉트)">
              </dd>
            </dl>
            <dl>
              <dt>매장명</dt>
              <dd>
                <input type="text" placeholder="매장명을 입력해주세요">
              </dd>
            </dl>
            <dl>
              <dt>연락처</dt>
              <dd>
                <input type="text" placeholder="'-' 제외한 숫자만 입력">
              </dd>
            </dl>
            <dl>
              <dt>매장주소</dt>
              <dd>
                <div class="cell">
                  <input type="text" placeholder="검색버튼으로 검색해주세요">
                </div>
                <div class="cell">
                  <el-button>검색</el-button>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>상세주소</dt>
              <dd>
                <input type="text" placeholder="상세주소를 입력해주세요">
              </dd>
            </dl>
            <dl>
              <dt>사업자번호</dt>
              <dd>
                <input type="text" placeholder="'-' 제외한 숫자만 입력">
              </dd>
            </dl>
            <dl class="bank">
              <dt>계좌정보</dt>
              <dd>
                <div class="cell">
                  <label>은행명</label>
                  <input type="text" placeholder="은행명을 입력해주세요">
                </div>
                <div class="cell">
                  <label>계좌번호</label>
                  <input type="text" placeholder="계좌번호 입력해주세요">
                </div>
                <div class="cell">
                  <label>계좌주명</label>
                  <input type="text" placeholder="계좌주명 입력해주세요">
                </div>
              </dd>
            </dl>
            <dl class="pa">
              <dt>비고</dt>
              <dd>
                <el-input
                  v-model="textarea"
                  type="textarea"
                  placeholder="내용을 입력해주세요"
                  rows="4"
                />
              </dd>
            </dl>
          </div>
          <div class="box form">
            <dl>
              <dt>PG</dt>
              <dd>
                <div class="cell">
                  <label>MID</label>
                  <input type="text" placeholder="입력해주세요">
                </div>
                <div class="cell">
                  <label>KEY_HASH</label>
                  <input type="text" placeholder="입력해주세요">
                </div>
              </dd>
            </dl>
            <dl>
              <dt>VAN</dt>
              <dd>
                <div class="cell">
                  <label>TID</label>
                  <input type="text" placeholder="입력해주세요">
                </div>
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :md="7" class="right">
          <sideCS />
        </el-col>
      </el-row>
    </div> <!-- tab-1 -->

    <div class="tab_body" v-show="tabs === 1">
      <div class="system_log">
        <span>√ Vite server hmr 11 files in 741.230ms</span>
        <span>√ Vite server hmr 14 files in 741.239ms</span>
        <span>ERROR  오전 10:27:28 [vite] Internal server error: [sass] expected ")".</span>                                                                     
      </div>
      <el-row :gutter="20">
        <el-col :md="8">
          <div class="box eq_list">
            <div class="box-head">
              <h4>장비목록</h4>
              <div class="btns">
                <el-button @click="machindeAdd = true">장비등록</el-button>
              </div>
            </div>
            <el-divider></el-divider>
            <ul>
              <li v-for="(item, index) in 10" :key="index" @click="eqSelected = index" :class="{active:eqSelected === index}">
                <div class="info">
                  <strong>{{item}}번 세탁기</strong>
                  <p>48:55:19:7E:3A:F6</p>
                </div>
                <span class="material-icons">arrow_right</span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :md="16">
          <EqDetail />
        </el-col>
      </el-row>
    </div>

    <div class="tab_body" v-show="tabs === 2">
      <el-row :gutter="20">
        <el-col :md="17" class="left">
          <kioskDetail />
          <kioskDetail />
        </el-col>
        <el-col :md="7" class="right">
          <sideCS />
        </el-col>
      </el-row>
    </div>

    <div class="tab_body" v-show="tabs === 3">
      <el-row :gutter="20">
        <el-col :md="17" class="left">
          <div class="box cs_list">
            <div class="box-head">
              <h4>관리내역</h4>
            </div>

            <ul>
              <li class="between">
                <div class="text">
                  <strong>이상조치로 키오스크 재부팅 함</strong>
                  <span>2022.12.21 10:44</span>
                </div>
                <el-button text circle> 
                  <span class="material-icons">close</span>
                </el-button>
              </li>
              <li class="between" v-for="item in 9" :key="item">
                <div class="text">
                  <strong>동전 씹힘현상으로 인해 기기 재부팅 실행행</strong>
                  <span>2022.12.19 17:12</span>
                </div>
                <el-button text circle> 
                  <span class="material-icons">close</span>
                </el-button>
              </li>
            </ul>
            <div class="bottom">
              <el-pagination background="#f5f5f7" layout="prev, pager, next" :total="1000" />
            </div>
            
          </div>
        </el-col>
        <el-col :md="7" class="right">
          <div class="box cs_text_form">
            <div class="box-head">
              <h4>CS 내용입력</h4>
            </div>
            <el-input v-model="csTextarea" type="textarea" rows="10" placeholder="CS한 내용을 기록해주세요"></el-input>
            <el-button>
              입력완료
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

  <ModalMachineAdd v-model="machindeAdd"/>
  <ModalNotify v-model="notify"/>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const textarea = ref<any>('')
const csTextarea = ref<any>('')
const adminMemo = ref<any>('')
const checkList = ref(['kiosk','smart'])
const radio1 = ref(1)
const radio2 = ref(1)
const tabs = ref(0)
const eqSelected = ref(0)

const machindeAdd = ref(false)
const notify = ref(false)


const sticky = () => {

  const header = document.getElementsByTagName('header')
  addEventListener('scroll',()=>{
    const {x, y} = useWindowScroll()

    if(y.value >= 10){
      header[0].classList.add('active')
    }else{
      header[0].classList.remove('active')
    }
  })  
}

onMounted(()=>{
  sticky()
})

</script>

<style lang="scss" scoped>
header{
  height:90px;
  transition: height 0.3s, padding 0.3s;
  &.active{
    position:sticky;
    left:0;
    top:0;
    z-index:2;
    background:#fff;
    width:100%;
    padding:0 20px;
    height:80px;
    border-radius:0 0 20px 20px;
    transition: height 0.3s ,padding 0.3s;

    border-top:0;
    box-shadow: 3px 3px 20px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.05);
  }

  .left{
    display:flex;
    align-items: center;
    .el-button{
      width:40px;
      height:40px;
    }
    h2{
      font-size:24px;
      margin-left:10px;
      font-weight:600;
    }
  }

  .btns{
    display:flex;
    align-items: center;
    gap:10px;
    .el-button{
      height:40px;
      padding:0 15px;
      margin:0;
      span{
        font-size:14px;
      }
    }
  }
}

.tab_head{
  border-bottom:3px solid #e2e2e2;
  margin-bottom:30px;
  .tabs{
    position: relative;
    bottom:-3px;
    a{
      display:flex;
      align-items: center;
      justify-content: center;
      padding:0 30px;
      font-size:18px;
      height:60px;
      cursor: pointer;
    }
    a:hover{
      border-bottom:3px solid #0066ff;
    }
    a.active{
      font-weight:500;
      color:var(--el-color-primary);
      border-bottom:3px solid var(--el-color-primary);
    }
  }
  .info{
    .item{
      font-size:12px;
      color:#797979;
      text-align:right;

      strong{
        color:#292929;
      }

      span{
        margin-right:5px;
        
      }
    }
    .item:first-child::after{
      content:'/';
      margin:0 10px;
    }
  }
}

.system_log{
  height:120px;
  background:#292929;
  color:#c2c2c2;
  padding:15px;
  border-radius:15px;
  margin-bottom:20px;
  span{
    display:block;
    font-size:14px;
    line-height:1.4;
  }
}

.eq_list{
  padding:24px 24px;
  ul{
    display:flex;
    flex-direction: column;
    gap:10px;
    li{
      display:flex;
      justify-content: space-between;
      align-items: center;
      border:1px solid #e2e2e2;
      cursor: pointer;
      padding:15px;
      border-radius:10px;
      .info{
        strong{
          display:block;
          font-size:16px;
          font-weight:500;
        }
        p{
          font-size:14px;
          margin:0;
          margin-top:8px;
          color:#797979;
        }
      }

      span{
        font-size:32px;
        color:#fff;
      }

      &:hover{
        border:1px solid #0066ff;
      }

      &.active{
        border:2px solid #0066ff;
        span{
          color:#0066ff
        }
      }
    }
  }
}

.cs_list{
  ul{
    display:flex;
    flex-direction: column;
    gap:10px;
    li{
      background:hsl(240, 11%, 96%);
      padding:15px;
      border-radius:10px;
      .text{
        strong,span{
          display:block;
        }
        strong{}
        span{
          font-size:13px;
          color:#797979;
          margin-top:8px;
        }
      }
      .el-button{
        height:40px;
        width:40px;
      }
    }
  }
  .bottom{
    display:flex;
    justify-content: center;
    .el-pagination{
      margin-top:20px;
    }
  }
}

.cs_text_form{
  position: sticky;
  top:100px;
  .el-button{
    margin-top:10px;
    width:100%;
    height:40px;
    background:#292929;
    color:#fff;
  }
}
</style>