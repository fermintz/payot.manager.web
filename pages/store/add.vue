<template>
  <div class="store_add">
    <header class="row between">
      <div class="left">
        <h2>
          업체등록
        </h2>
      </div>
    </header>

    <el-row :gutter="20">
      <el-col :md="17">
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
                <input type="text" placeholder="아이디를 입력해주세요">
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
                  :autosize="{ minRows: 0.8, maxRows: 0 }"
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
        <div class="box finish">
          <p>
            업체등록 후 장비 및 상품설정을 진행해주세요
          </p>
          <el-button>
            등록완료
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
const textarea = ref<any>('')
const csTextarea = ref<any>('')
const adminMemo = ref<any>('')
const checkList = ref(['kiosk','smart'])
const radio1 = ref(1)
const radio2 = ref(1)
const tabs = ref(0)
const eqSelected = ref(0)
</script>

<style lang="scss" scoped>
header{
  height:90px;
  transition: height 0.3s, padding 0.3s;

  .left{
    display:flex;
    align-items: center;
     h2{
      font-size:24px;     
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

.finish{
  position: sticky;
  top:20px;
  p{
    margin-bottom:20px;
  }
  .el-button{
    width:100%;
    height:50px;
    background:#0066ff;
    color:#fff;
    border:0;
  }
}
</style>