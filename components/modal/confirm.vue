<template>
  <el-dialog
    v-model="show"
    width="400px"
    align-center
    :show-close="false"
  >
    <template #header>

    </template>
  
    <div class="dialog-cont">
      <strong>1번세탁기</strong>에 <strong>5,000원</strong>을 투입할까요?
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
.dialog-cont{
  font-size:16px;
  strong{
    color:#0066ff;
  }
}
</style>