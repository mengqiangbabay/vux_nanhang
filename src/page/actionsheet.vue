<template>
	<div>
		<group>
			<x-switch title="一般使用" v-model="show1"></x-switch>
			<x-switch title="安卓风格" v-model="show7"></x-switch>
			<x-switch title="使用数组定义菜单" v-model="show5"></x-switch>
			<x-switch title="显示提示文字" v-model="show3"></x-switch>
			<x-switch title="不自动关闭" v-model="show8"></x-switch>
		</group>
		<actionsheet v-model="show1" :show-cancel="true" cancel-text="关闭" :menus="menus1" @on-click-menu="click"></actionsheet>
		<actionsheet v-model="show7" :menus="menu7" theme="android" @on-click-menu="click">
    </actionsheet>
    <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click"></actionsheet>
    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <toast v-model="showSuccess">{{ texts }}</toast>
    <div v-transfer-dom>
      <actionsheet v-model="show8" :menus="menus8" @on-click-menu="demo8doClose" :close-on-clicking-mask="false" :close-on-clicking-menu="false">
      </actionsheet>
    </div>
    <div v-transfer-dom>
      <loading v-model="show9"></loading>
    </div>
	</div>
</template>
<script>
	import { TransferDom } from 'vux'
	export default {
		directives: {
      TransferDom
    },
		data () {
			return {
				texts :"成功删除",
				showSuccess : false,
				show1 :false,
				show7 :false,
				show5 :false,
				show3 :false,
				show8 :false,
				show9 :false,
				menus1 : ["分享到朋友圈","分享给朋友"],
				menu7: {
	        menu1: '北京烤鸭',
	        menu2: '陕西油泼面',
	        menu3: '西安肉夹馍'
        },
        menus5: [{
	        label: '标题123321',
	        type: 'info'
	      }, {
	        label: '警告',
	        type: 'primary',
	        value: 'primary'
	      }, {
	        label: 'Warn',
	        type: 'warn'
	      }, {
	        label: 'Disabled',
	        type: 'disabled'
	      }, {
	        label: 'Default'
	      }],
	      menus3: {
        'title.noop': '确定删除吗？',
        delete: '<span style="color:red">删除</span>'
        },
        menus8: {
        	menu1 :"点我关闭",
        	menu2 :"点我关闭"
        }
			}
		},
		methods:{
			click (){
				
			},
			onDelete () {
        this.showSuccess = true
      },
      demo8doClose () {
	      this.$vux.loading.show({
	        text: '进行中'
	      })
	      setTimeout(() => {
	        this.$vux.loading.hide()
	        this.show8 = false
	      }, 1000)
	    }
		}
	}
</script>