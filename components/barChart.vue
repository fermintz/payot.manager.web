<template>
  <Bar :chart-data="props.data" :chart-options="props.options" :height="150"/>
</template>

<script lang="ts" setup>

import {Chart as ChartJS, registerables} from 'chart.js'
import { TChartData, TChartOptions } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'


ChartJS.register(...registerables, ChartDataLabels)

const props = defineProps<{
  data: TChartData<'bar', number[], unknown>,
  options:TChartOptions<'bar'>,
}>()


</script>