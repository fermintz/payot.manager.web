<template>
  <el-dialog
    v-model="show"
    width="450px"
    align-center
    :show-close="false"
  >
    <template #header>
      <div class="dialog-header">
        <h4>장비등록</h4>
      </div>
    </template>
  
    <div class="dialog-cont">
      <form>
        <dl>
          <dt>장비명</dt>
          <dd>
            <el-input type="text" size="large" placeholder="장비명을 입력해주세요"></el-input>
          </dd>
        </dl>
        <div class="row">
          <dl>
            <dt>제조사</dt>
            <dd>
              <el-input type="text" size="large" placeholder="예) LG, 삼성"></el-input>
            </dd>
          </dl>
          <dl>
            <dt>용량</dt>
            <dd>
              <el-input type="text" size="large" placeholder="예) 19Kg"></el-input>
            </dd>
          </dl>
        </div>
        <el-divider></el-divider>
        <dl>
          <dt>MAC주소</dt>
          <dd>
            <el-input type="text" size="large"></el-input>
          </dd>
        </dl>
        <dl class="qrcode">
          <dt>QR코드 등록</dt>
          <dd>
            <el-input type="text" size="large"></el-input>
            <el-button>
              <span class="material-icons">photo_camera</span>
            </el-button>
          </dd>
        </dl>
      </form>
    </div>
 
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="show=false">취소</el-button>
        <el-button @click="show=false">확인</el-button>
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
  
  dl.qrcode{
    .el-button{
      height:40px;
    }
  }
}

</style>