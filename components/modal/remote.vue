<template>
  <el-dialog
    v-model="show"
    width="450px"
    align-center
    :show-close="false"
  >
    <template #header>
      <div class="dialog-header">
        <h4>장비원격투입</h4>
      </div>
    </template>
  
    <div class="dialog-cont">
      <div class="text">
        <strong>1번 세탁기</strong>
        에 대한 원격제어입니다.
      </div>
      <form>
        <dl>
          <dt>금액입력</dt>
          <dd>
            <el-input type="text" size="large"></el-input>
          </dd>
        </dl>
        <dl class="pa">
          <dt>투입사유입력</dt>
          <dd>
            <el-input type="textarea" rows="5"></el-input>
          </dd>
        </dl>
      </form>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="show">취소</el-button>
        <el-button @click="show">확인</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
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