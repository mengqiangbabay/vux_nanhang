<template>
	<div>
		<group>
			<x-switch title="显示" v-model="show"></x-switch>
			<x-switch title="显示" v-model="show1"></x-switch>
		</group>
		<group title="以插件形式调用">
			<cell title="3秒后关闭" @click.native="showPluginAuto" is-link></cell>
		</group>
		<div v-transfer-dom>
			<alert v-model="show" :title="title" @on-show="onShow" @on-hide="onHide">消息已经成功发出</alert>
			<alert v-model="show1" :title="title" :content="content" @on-show="onShow" @on-hide="onHide">消息已经成功发出</alert>
		</div>
	</div>
</template>
<script>
import { TransferDomDirective as TransferDom } from 'vux'
export default{
	directives: {
		TransferDom
	},
	data () {
		return {
			show: false,
			title: "恭喜",
			show1: false,
			content: "消息已经成功发送"
		}
	},
	methods: {
		onShow () {
			console.log('on show')
		},
		onHide () {
			console.log('on hide')
		},
		showPlugin () {
			this.$vux.alert.show({
				title: "调用插件",
				content: "你会用了吗？"
			})
		},
		showPluginAuto () {
			this.$vux.alert.show({
				title: "调用插件",
				content: "你会用了吗？"
			})
			setTimeout(() => {
				this.$vux.alert.hide()
			}, 3000)
		}
	}
}
</script>