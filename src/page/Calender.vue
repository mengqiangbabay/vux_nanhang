<template>
	<div>
		<group>
      <calendar v-model="demo1" title="一般使用" disable-past></calendar>
    </group>
    <group>
    	<calendar v-model="demo2" title="设置时间为今天" disable-past></calendar>
    </group>
    <group>
    	<calendar v-model="demo3" title="设置不能选择未来时间" disable-future></calendar>
    </group>
	</div>
</template>
<script>
import { Group, Calendar, Cell } from 'vux'

export default {
  components: {
    Calendar,
    Group,
    Cell
  },
  data () {
    return {
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY'
    }
  }
}
</script>