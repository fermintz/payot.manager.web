<template>
  <Bar :chart-data="datas" :chart-options="options" />
</template>

<script lang="ts" setup>
import { Bar } from 'vue-chartjs';
import {Chart, registerables} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(...registerables, ChartDataLabels)



const datas = ref<any>({
  labels: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  datasets: [
    {
      label: "매출",
      data: [3450000, 2980000, 1230000, 2600000, 2800000, 2480000, 2950000, 2480000, 3380000, 2850000, 0, 0],
      borderColor: "rgba(30, 93, 239, 1)",
      borderWidth: 2, // 막대선 두께
      fill: true,
      backgroundColor:"rgba(30, 93, 239, 0.05)",
      base:0,
      barPercentage:0.5, // 막대두께(퍼센트)
      maxBarThickness:20, // 최대 막대 두께제한
      minBarLength:5,
      borderRadius:5,
      indexAxis:'x',
    },
  ],
})

const options = {
  responsive:true,
  layout:{
    padding:40,
  },
  scales:{
    x:{
      grid:{
        display:false,
        borderWidth:1,
        borderColor:'rgba(0,0,0,1)'
      },
    },
    y:{
      grid:{
        borderWidth:0,     
      },
      ticks:{
        display:false,
      },
    }
  },
  plugins:{
    tooltip:{
      enabled:false,
    },
    decimation:{
      enabled:true,
    },
    legend:{
      display:false,
    },
    datalabels:{
      color:'#fff',
      backgroundColor:'rgba(30, 93, 239, 1)',
      borderRadius:3,
      anchor:'end',
      align:'top',
      font:{
        size:12,
      },
    },
  },
}

</script>