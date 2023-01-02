<template>
  <div class="box form eq-detail">
    <div class="box-head">
      <h4>1번 세탁기</h4>
      <div class="btns">
        <div class="el-button" @click="confirm = true">장비삭제</div>
        <div class="el-button" @click="eqRemote = true">원격투입</div>
        <div class="el-button">접속상태확인</div>
        <div class="el-button" @click="productAdd = true">상품등록</div>
      </div>
    </div>

    <div class="tabs">
      <a 
        v-for="(item, index) in ['장비설정','상품설정']" 
        :key="index"
        :class="{active:detailTabs === index}"
        @click="detailTabs = index"
      >
        {{item}}
      </a>

    </div>

    <div class="tab-cont" v-show="detailTabs === 0">
      <form class="infomation">
        <dl>
          <dt>장비명</dt>
          <dd>
            <input type="text" placeholder="장비명을 입력해주세요" value="1번 세탁기">
          </dd>
        </dl>
        <dl>
          <dt>MAC</dt>
          <dd>
            <input type="text" value="48:55:19:7E:3A:F6">
          </dd>
        </dl>
        <dl class="qrcode"> 
          <dt>QR코드</dt>
          <dd>
            <img src="https://picsum.photos/200/300" />
            <el-button>
              <span class="material-icons">photo_camera</span>
            </el-button>
          </dd>
        </dl>
      </form>

      <dl class="control">
        <dt>신호제어</dt>
        <dd>
          <el-radio-group v-model="options" size="large">
            <el-radio :label="0">선택입력</el-radio>
            <el-radio :label="1">직접입력</el-radio>
          </el-radio-group>
        </dd>
      </dl>

      <form class="options" v-show="options === 0">
        <dl class="radio">
          <dt>입력</dt>
          <dd>
            <el-radio-group v-model="radioA" size="medium">
              <el-radio-button label="12L"/>
              <el-radio-button label="12H"/>
              <el-radio-button label="13L"/>
              <el-radio-button label="13H"/>
            </el-radio-group>
          </dd>
        </dl>
        <dl class="radio">
          <dt>출력</dt>
          <dd>
            <el-radio-group v-model="radioB" size="medium">
              <el-radio-button label="14L"/>
              <el-radio-button label="14H"/>
              <el-radio-button label="14LR"/>
              <el-radio-button label="14LH"/>
            </el-radio-group>
          </dd>
        </dl>
        <dl class="radio">
          <dt>동전(단위)</dt>
          <dd>
            <el-radio-group v-model="radioC" size="medium">
              <el-radio-button label="100" />
              <el-radio-button label="500" />
              <el-radio-button label="1000R" />
            </el-radio-group>
          </dd>
        </dl>
        <dl class="radio">
          <dt>펄스수</dt>
          <dd>
            <el-radio-group v-model="radioD" size="medium">
              <el-radio-button label="1" />
              <el-radio-button label="5" />
              <el-radio-button label="10" />
            </el-radio-group>
          </dd>
        </dl>
        <dl class="radio">
          <dt>펄스간격</dt>
          <dd>
            <el-radio-group v-model="radioE" size="medium">
              <el-radio-button label="50" />
              <el-radio-button label="100" />
              <el-radio-button label="200" />
            </el-radio-group>
          </dd>
        </dl>
        <dl class="radio">
          <dt>노이즈필터</dt>
          <dd>
            <el-radio-group v-model="radioF" size="medium">
              <el-radio-button label="50" />
              <el-radio-button label="100" />
              <el-radio-button label="200" />
            </el-radio-group>
          </dd>
        </dl>
        <dl class="radio">
          <dt>투입간격</dt>
          <dd>
            <el-radio-group v-model="radioG" size="medium">
              <el-radio-button label="500" />
              <el-radio-button label="1000" />
              <el-radio-button label="1500" />
            </el-radio-group>
          </dd>
        </dl>
        <dl class="radio">
          <dt>검증시간</dt>
          <dd>
            <el-radio-group v-model="radioH" size="medium">
              <el-radio-button label="1" />
              <el-radio-button label="20" />
            </el-radio-group>
          </dd>
        </dl>
      </form>

      <form class="options" v-show="options === 1">
        <dl>
          <dt>메세지</dt>
          <dd>
            <input type="text" placeholder="자료를 입력해주세요">
          </dd>
        </dl>
        <dl>
          <dt>토픽</dt>
          <dd>
            <input type="text" placeholder="자료를 입력해주세요">
          </dd>
        </dl>
      </form>
    </div>
    <div class="tab-cont" v-show="detailTabs === 1">
      <div class="product-list">
        <div class="left">
          <div class="number" v-for="item in list.length" :key="item">
            {{item}}
          </div>
        </div>
        <div class="right">
          <draggable
            :list="list"
            :disabled="false"
            item-key="name"
            @start="dragging = true"
            @end="dragging = false"
            ghost-class="ghost-item"
          >
            <template #item="{element}">
              <div class="item row">
                <div class="icon">
                  <span class="material-icons">unfold_more</span>
                </div>
                <div class="info">
                  <strong>{{element.name}}</strong>
                  <span>{{element.price}}</span>
                </div>
                <div class="btns">
                  <el-button text>수정</el-button>
                  <el-button text>삭제</el-button>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>

  <modalRemote v-model="eqRemote" />
  <modalProductAdd v-model="productAdd" />
  <modalConfirm v-model="confirm"/>

</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'

const detailTabs = ref(0)
const options = ref(0)
const radioA = ref('12L')
const radioB = ref('14L')
const radioC = ref('100')
const radioD = ref('1')
const radioE = ref('50')
const radioF = ref('50')
const radioG = ref('500')
const radioH = ref('1')

const dragging = ref(false)
const list = ref([
  {id: 0, name:' [30분] 표준코스(세탁1+헹굼2)',price:'6,000원' },
  {id: 1, name:' [45분] 표준코스(세탁1+헹굼2)',price:'7,000원' },
  {id: 2, name:' [60분] 표준코스(세탁1+헹굼2)',price:'8,000원' },
  {id: 3, name:' [75분] 표준코스(세탁1+헹굼2)',price:'9,000원' },
])

const eqRemote = ref(false)
const productAdd = ref(false)
const confirm = ref(false)



</script>

<style lang="scss" scoped>
.eq-detail{
  padding:24px 24px;
  form{
    margin-bottom:40px;
  }
  .tabs{
    display:flex;
    align-items: center;
    border-bottom:2px solid #e2e2e2;
    margin-bottom:20px;
    a{
      position: relative;
      bottom:-2px;
      display:flex;
      align-items: center;
      height:50px;
      padding:0 20px;
      cursor: pointer;

      &.active{
        border-bottom:2px solid #0066ff;
        color:#0066ff;
        font-weight:500;
      }

      &:hover{
        border-bottom:2px solid #0066ff;
      }
    }
  }
  dl.qrcode{
    padding:10px 0;
    dd{
      gap:10px;

      img{
        object-fit: contain;
        overflow:hidden;
        width:80px;
        height:80px;
        border-radius:5px;
        border:1px solid #e2e2e2;
      }
  
      .el-button{
        width:80px;
        height:80px;
      }
    }
  }

  dl.control{
    border-bottom:1px solid #a2a2a2;
  }

  dl.radio{
    padding:10px 0;
  }
}


.product-list{
  display:flex;
  gap:20px;
  .left{
    .number{
      display:flex;
      align-items: center;
      justify-content: center;
      width:80px;
      height:80px;
      background:#f5f5f7;
      border-radius:10px;
      font-weight:500;
      font-size:24px;
      color:#c2c2c2;
      margin-bottom:10px;
    }
  }
  .right{
    flex:1;

    .ghost-item{
      background:#E4E9F5;
    }
    .item{
      height:80px;
      border:1px solid #e2e2e2;
      border-radius:10px;
      margin-bottom:10px;
      cursor: pointer;

      .icon{
        text-align:center;
        width:60px;
        span{
          color:#c2c2c2;
        }
      }
      .info{
        fleX:1;
        display:flex;
        flex-direction: column;
        gap:10px;

        strong{

        }
        span{
          font-size:14px;
          font-weight:500;
        }
      }
      .btns{
        display:flex;
        align-items: center;
        gap:10px;
        padding:0 20px;
        .el-button{
          margin:0;
          width:40px;
          height:40px;
        }
      }
    }
  }
}
</style>