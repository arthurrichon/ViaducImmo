<template lang="html">
  <div class="graphComponent--container">
    <div class="graph--container" v-bind:class="[graphType === 'energy' ? 'energy' : graphType === 'gas' ? 'gas' : '']">
      <div class="graph-item" v-for="(item, index) in graphSettings[graphType]" v-bind:class="['graph-'+index, rate >= item.value1 && rate <= item.value2 ? 'current' : '']"><span>{{ item.value1 }} - {{ item.value2 }}</span> <span class="rate">{{ item.rate }}</span></div>
    </div>

    <p class="sentence">{{ graphType === 'energy' ? 'Unité de mesure exprimée en kWhEP/m².an' : 'Unité de mesure exprimée en kgeqCO2/m².an'}}</p>
  </div>
</template>

<script>
export default {
  name: 'GraphComponent',
  props: {
    graphType: {
      type: String,
      default: 'energy'
    },
    rate: {
      type: String,
      default: 0
    }
  },
  data: () => ({
    graphSettings: {
      energy: [
        { value1: 0, value2: 50, rate: 'A'},
        { value1: 51, value2: 90, rate: 'B'},
        { value1: 91, value2: 150, rate: 'C'},
        { value1: 151, value2: 230, rate: 'D'},
        { value1: 231, value2: 330, rate: 'E'},
        { value1: 331, value2: 450, rate: 'F'},
        { value1: 450, value2: 100000, rate: 'G'}
      ],
      gas: [
        { value1: 0, value2: 5, rate: 'A'},
        { value1: 6, value2: 10, rate: 'B'},
        { value1: 11, value2: 20, rate: 'C'},
        { value1: 21, value2: 35, rate: 'D'},
        { value1: 36, value2: 55, rate: 'E'},
        { value1: 56, value2: 80, rate: 'F'},
        { value1: 80, value2: 100000, rate: 'G'}
      ]
    }
  })
}
</script>

<style lang="css" scoped>

.graph--container {

}

.graph-item {
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  margin: 10px 0;
}

.graph-item span {
  display: none;
}

.graph-item.current span {
  display: flex;
}

.graph-item .rate {
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #1B2733;
}

.graph-item:after {
  content: '';
  position: absolute;
  -webkit-clip-path: polygon(0 0, 0% 100%, 30% 50%);
  clip-path: polygon(0 0, 0% 100%, 30% 50%);
  right: -30px;
  top: 0;
  width: 30px;
  height: 40px;
}

.graph-item.current { opacity: 1; }
.graph-0 { opacity: 0.35; width: 100px; }
.graph-1 { opacity: 0.35; width: 120px; }
.graph-2 { opacity: 0.35; width: 140px; }
.graph-3 { opacity: 0.35; width: 160px; }
.graph-4 { opacity: 0.35; width: 180px; }
.graph-5 { opacity: 0.35; width: 200px; }
.graph-6 { opacity: 0.35; width: 220px; }
.graph--container.energy .graph-0, .graph--container.energy .graph-0:after { background-color: #038F39; }
.graph--container.energy .graph-1, .graph--container.energy .graph-1:after { background-color: #57A82C; }
.graph--container.energy .graph-2, .graph--container.energy .graph-2:after { background-color: #C8D100; }
.graph--container.energy .graph-3, .graph--container.energy .graph-3:after { background-color: #FAEA27; }
.graph--container.energy .graph-4, .graph--container.energy .graph-4:after { background-color: #F8BB00; }
.graph--container.energy .graph-5, .graph--container.energy .graph-5:after { background-color: #EA690B; }
.graph--container.energy .graph-6, .graph--container.energy .graph-6:after { background-color: #E30C1C; }

.graph--container.gas .graph-0, .graph--container.gas .graph-0:after { background-color: #FCF0F4; }
.graph--container.gas .graph-1, .graph--container.gas .graph-1:after { background-color: #DAC0DB; }
.graph--container.gas .graph-2, .graph--container.gas .graph-2:after { background-color: #C6A8C8; }
.graph--container.gas .graph-3, .graph--container.gas .graph-3:after { background-color: #BA93BF; }
.graph--container.gas .graph-4, .graph--container.gas .graph-4:after { background-color: #9F76AC; }
.graph--container.gas .graph-5, .graph--container.gas .graph-5:after { background-color: #85599C; }
.graph--container.gas .graph-6, .graph--container.gas .graph-6:after { background-color: #6A418F; }

.sentence {
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  color: #DFE2E5;
}
</style>
