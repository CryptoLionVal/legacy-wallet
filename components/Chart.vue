<template>
  <apexchart
    v-if="loaded"
    type="area"
    class="m-0 md:m-10 h-64"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

const EN = require('apexcharts/dist/locales/en.json')
const TR = require('apexcharts/dist/locales/tr.json')

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      priceType: 'usd',
      loaded: false,
      series: [
        {
          name: 'USD',
          data: [],
        },
        {
          name: 'Market Cap',
          data: [],
        },
        {
          name: 'BTC',
          data: [],
        },
      ],
      chartOptions: {
        colors: ['#8fbbb7', '#d7441e', '#fda425'],
        chart: {
          height: 400,
          type: 'area',
          locales: [TR, EN],
          defaultLocale: this.$i18n.locale,
          foreColor: '#e2e8f0',
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          show: false,
          type: 'datetime',
          categories: [],
          tooltip: {
            enabled: false,
          },
        },
        yaxis: [
          {
            show: false,
            min: 0.1,
            seriesName: 'USD',
            labels: {
              formatter(value) {
                return (
                  value.toLocaleString('en-US', {
                    maximumFractionDigits: 4,
                  }) + ' $'
                )
              },
            },
          },
          {
            show: false,
            min: 0.1,
            seriesName: 'Market Cap',
            labels: {
              formatter(value) {
                return (
                  value.toLocaleString('en-US', {
                    maximumFractionDigits: 0,
                  }) + ' $'
                )
              },
            },
          },
          {
            show: false,
            min: 0.0000034,
            seriesName: 'BTC',
            labels: {
              formatter(value) {
                return value.toLocaleString('en-US', {
                  maximumFractionDigits: 8,
                })
              },
            },
          },
        ],
        tooltip: {
          x: {
            show: false,
          },
          y: {
            show: false,
          },
          enabled: true,
          theme: 'dark',
        },
        grid: {
          show: false,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0,
            opacityTo: 0.1,
            stops: [0, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5],
          },
        },
      },
    }
  },
  computed: {
    API() {
      return `https://api.coingecko.com/api/v3/coins/crypto-com-chain/market_chart?vs_currency=${this.priceType}&days=7`
    },
  },
  async mounted() {
    try {
      const usd = await this.$axios.$get(this.API)
      this.priceType = 'btc'
      const btc = await this.$axios.$get(this.API)

      for (let i = 0; i < usd.prices.length; i++) {
        this.series[0].data.push(usd.prices[i][1])
        this.series[1].data.push(usd.market_caps[i][1])
        this.series[2].data.push(btc.prices[i][1])
        this.chartOptions.xaxis.categories.push(usd.prices[i][0])
      }

      this.loaded = true
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
}
</script>
