<template>
	<div>
		<group>
      <cell title="我的账户" value="余额保护" @click.native=""></cell>
      <cell title="提现" disabled is-link></cell>
      <cell is-link>
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">重要消息</span> <badge text="1"></badge></span>
      </cell>
       <cell title="通用" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
    </group>
   	<group title="折叠">
   		<cell
      title="标题"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"></cell>
      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item" is-link>标题 一</cell-box>
        <cell-box class="sub-item" is-link>标题二</cell-box>
        <cell-box class="sub-item" is-link>标题三</cell-box>
      </template>
   	</group>
   	<group>
   		<cell
      title="动画效果"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004"></cell>
      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>
    </group>
    <group title="">
      <cell title="外部链接" link="" inline-desc='外部链接' is-link></cell>
    </group>
	</div>
</template>
<script>
	import { Cell, Group, Badge, CellBox } from 'vux'
	export default{
		components:{
			Cell,
			Group,
			Badge,
			CellBox
		},
		data () {
			return {
				showContent001: false,
				showContent004: false
			}
		}
	}
</script>
<style type="text/css">
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>