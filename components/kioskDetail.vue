<template>
  <div class="box form">
    <dl>
      <dt>키오스크 이름</dt>
      <dd>
        <input type="text" placeholder="키오스크 이름을 입력해주세요">
      </dd>
    </dl>
    <dl>
      <dt>원격계정정보</dt>
      <dd>
        <div class="cell">
          <input type="text" placeholder="원격 코드를 입력해주세요">
        </div>
        <div class="cell">
          <el-button>원격 바로가기</el-button>
        </div>
      </dd>
    </dl>
    <dl>
      <dt>결제수단</dt>
      <dd>
        <el-checkbox-group v-model="credit" size="large">
          <el-checkbox label="cash" >현금</el-checkbox>
          <el-checkbox label="card" >카드</el-checkbox>
          <el-checkbox label="payco" >페이코</el-checkbox>
        </el-checkbox-group>
      </dd>
    </dl>
    <dl>
      <dt>문자전송여부</dt>
      <dd>
        <el-radio-group v-model="sms" size="large">
          <el-radio :label="1">전송함</el-radio>
          <el-radio :label="2">전송안함</el-radio>
        </el-radio-group>
      </dd>
    </dl>
    <dl>
      <dt>비밀번호 사용유무</dt>
      <dd>
        <el-radio-group v-model="kioskPassword" size="large">
          <el-radio :label="1">사용함</el-radio>
          <el-radio :label="2">사용안함</el-radio>
        </el-radio-group>
      </dd>
    </dl>
    <dl>
      <dt>상품선택방법</dt>
      <dd>
        <el-radio-group v-model="kisokProduct" size="large">
          <el-radio :label="1">상품선택 방법</el-radio>
          <el-radio :label="2">투입금액 직접입력 방법</el-radio>
        </el-radio-group>
      </dd>
    </dl>
    <dl class="pa">
      <dt>메인공지사항</dt>
      <dd>
        <el-input v-model="textarea" type="textarea" rows="5"></el-input>
      </dd>
    </dl>
    <dl class="wiress pa">
      <dt>키오스크 원격제어</dt>
      <dd>
        <el-button>
          프로그램 재시작
        </el-button>
        <el-button>
          재부팅
        </el-button>
        <el-button>
          프로그램 종료
        </el-button>
        <el-button>
          프로그램 재시작
        </el-button>
      </dd>
    </dl>

    
  </div>
</template>

<script lang="ts" setup>
const credit = ref(['cash','card'])
const sms = ref(1)
const kioskPassword = ref(1)
const kisokProduct = ref(1)
const textarea = ref('')


</script>

<style lang="scss" scoped>
.wiress{
  dd{
    display:flex;
    .el-button{
      flex:1;
      height:40px;      
    }
  }
}
</style>