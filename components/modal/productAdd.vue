<template>
  <el-dialog
    v-model="show"
    width="450px"
    align-center
    :show-close="false"
  >
    <template #header>
      <div class="dialog-header">
        <h4>상품등록</h4>
      </div>
    </template>
  
    <div class="dialog-cont">
      <div class="text">
        <strong>1번 세탁기</strong>
        에 상품을 등록합니다.
      </div>
      <form>
        <dl>
          <dt>상품명</dt>
          <dd>
            <el-input type="text" size="large" placeholder="상품명을 입력해주세요"></el-input>
          </dd>
        </dl>

        <div class="row">
          <dl>
            <dt>시간(분)</dt>
            <dd>
              <el-input type="text" size="large" placeholder="시간"></el-input>
            </dd>
          </dl>
          <dl>
            <dt>가격(원)</dt>
            <dd>
              <el-input type="text" size="large" placeholder="가격"></el-input>
            </dd>
          </dl>
        </div>
        <dl class="pa">
          <dt>상품설명</dt>
          <dd>
            <el-input type="textarea" rows="5"></el-input>
          </dd>
        </dl>
      </form>
    </div>
 
    <template #footer>
      <div class="dialog-footer">
        <el-button>취소</el-button>
        <el-button @click="finisMessage">확인</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})

const finisMessage = () => {
  show.value = false
  ElMessage({
    message: '등록이 완료되었습니다.',
    type:'success'
  })
}

</script>

<style lang="scss" scoped>
.dialog-cont{
  .text{
    padding:15px;
    background:#f5f5f7;
    border-radius:5px;
    font-size:16px;
    margin-bottom:20px;

    strong{
      font-weight:500;
      color:#0066ff;
    }
  }

  form{
    display:flex;
    flex-direction: column;
    gap:20px;

    .row{
      gap:20px;
    }
    .el-divider{
      margin:10px 0;
    }

    dl{
      width:100%;
      dt{
        font-size:12px; 
        margin-bottom:8px;
      }
      dd{
        display:flex;
        align-items: center;
        gap:10px;
      }
    }

  }

}

</style>