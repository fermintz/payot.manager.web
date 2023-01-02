<template>
  <el-dialog
    v-model="show"
    width="900px"
    align-center
    :show-close="false"
  >
    <template #header>
      <div class="dialog-header">
        <h4>A/S 알림톡 보내기</h4>
      </div>
    </template>
  
    <div class="dialog-cont">
      <el-row :gutter="60">
        <el-col :span="13" class="left">
          <form>
            <dl>
              <dt>수신번호</dt>
              <dd>
                <el-input type="text" size="large" v-model="phone"></el-input>
                <el-button>불러오기</el-button>
              </dd>
            </dl>
            <div class="row">
              <dl>
                <dt>방문일</dt>
                <dd>
                  <el-date-picker
                    v-model="datePicker"
                    type="date"
                    placeholder="날짜선택"
                    size="large"
                  />
                </dd>
              </dl>
              <dl>
                <dt>방문시간</dt>
                <dd>
                  <input type="time" placeholder="시간선택">
                </dd>
              </dl>
            </div>
            <dl>
              <dt>교체내용</dt>
              <dd>
                <el-input
                  v-model="cont"
                  :autosize="{ minRows: 0.6, maxRows: 0 }"
                  type="textarea"
                  placeholder="교체내용이 없을시 '없음'이라고 입력해주세요"
                />
              </dd>
            </dl>

            <el-divider></el-divider>

            <div class="row">
              <dl>
                <dt>소요시간</dt>
                <dd>
                  <el-select v-model="hourSelected" class="m-1" placeholder="시간" size="large">
                    <el-option
                      v-for="item in hourSelect"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                  <el-select v-model="minSelected" placeholder="분" size="large">
                    <el-option
                      v-for="item in minSelect"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                </dd>
              </dl>
              <dl>
                <dt>내방필요</dt>
                <dd>
                  <el-radio-group v-model="visit" size="large">
                    <el-radio-button label="내방필요">내방필요</el-radio-button>
                    <el-radio-button label="내방 불필요">내방 불필요</el-radio-button>
                  </el-radio-group>
                </dd>
              </dl>
            </div>
            
            <dl>
              <dt>준비물</dt>
              <dd>
                <el-input
                  v-model="stanby"
                  :autosize="{ minRows: 0.6, maxRows: 0 }"
                  type="textarea"
                  placeholder="준비물이 필요없을시 '없음' 이라고 입력해주세요"
                />
              </dd>
            </dl>
          </form>
        </el-col>
        <el-col :span="11" class="right"> 
          <div class="top between">
            <h4>발송될 카톡 미리보기</h4>
            <el-button>
              히스토리
            </el-button>
          </div>
          <div class="sms_viewer">
            안녕하세요.<br/>
            셀프빨래방 관리업체 페이오티입니다.<br/><br/>

            AS방문일정 안내드립니다.<br/><br/>

            방문일 : <strong>{{datePicker}}</strong><br/>
            방문시간 : <strong></strong><br/>
            교체내용 : <strong>{{cont}}</strong><br/>
            소요시간 : <strong>{{hourSelected + '시' + ' ' + minSelected + '분'}}</strong><br/><br/>

            내방필요 : <strong>{{visit}}</strong><br/>
            준비물 : <strong>{{stanby}}</strong>
            <br/><br/>


            방문 지역의 거리, 교통정체 및 상황에 따라 30분-1시간정도 방문시간의 유동이 있을 수 있습니다.
            양해를 부탁드립니다. 감사합니다.<br/><br/>

            일정에 대해 문의사항이 있으실경우, 아래 문의채널로 접속하여 매장명과 함께 메세지 남겨주세요.
          </div>
        </el-col>
      </el-row>
    </div>
 
    <template #footer>
      <div class="dialog-footer">
        <el-checkbox v-model="checked2" label="알림톡 발송실패시 SMS대체 발송" size="large" />
        <el-button @click="show=false">취소</el-button>
        <el-button @click="show=false">전송하기</el-button>
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
const phone = ref('')
const checked2 = ref(true)
const datePicker = ref('')

const cont = ref('')
const stanby = ref('')

const hourSelected = ref()
const hourSelect = [1,2,3,4,5]

const minSelected = ref()
const minSelect = [10,20,30,40,50]

const visit = ref('내방 불필요')

</script>

<style lang="scss" scoped>
.dialog-header{
  margin-bottom:15px;
}
.dialog-cont{
  font-size:16px;
  strong{
    color:#0066ff;
  }

  .left{
    form{
      display:flex;
      flex-direction: column;
      gap:20px;

      .el-divider{
        margin:15px 0;
      }

      .row{
        gap:20px;
      }

      dl{
        flex:1;
        dt{
          font-size:12px;
          margin-bottom:8px;
        }
        dd{
          display:flex;
          align-items: center;
          gap:10px;
          .el-button{
            height:40px;
          }
          input[type="time"]{
            width:100%;
            height:40px;
            border:1px solid #e2e2e2;
            border-radius:5px;
            padding:0 10px;
            box-sizing: border-box;
          }
        }
      }
    }
  }

  .right{
    .top{
      margin-bottom:20px;
    }

    .sms_viewer{
      background:#f5f1d2;
      border-radius:10px;
      padding:15px;
      height:500px;
      line-height:1.4;
      overflow-y:auto;
      color:#595959;
      font-size:14px;

      strong{
        color:#000;
        font-weight:500;
      }
    }
  }
}

.dialog-footer{
  position: relative;

  .el-checkbox{
    position: absolute;
    left:15px;
  }
}
</style>