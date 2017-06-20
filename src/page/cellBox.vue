<template>
	<div>
		<group>
			<cell title="cell" value="hello" is-link link="../page/card"></cell>
			<cell-box title="可以设置多行" :border-intent="false" is-link>
        cell-box long long long long long long long
      </cell-box>
      <cell-box title="可以设置多行" :border-intent="true" style="position: relative;">
      	<div>meng</div>
        <div>
        	<p>你好呀</p>
        	<p>你好呀</p>
        	<p>在干什么</p>
        </div>
      </cell-box>
		</group>
	</div>
</template>
<script>
import { Group, Cell, CellBox } from 'vux'

export default {
  components: {
    Group,
    Cell,
    CellBox
  }
}
</script>