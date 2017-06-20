<template>
	<div>
		<badge text="6"></badge>
		<br />
		<badge text="10"></badge>
		<br />
		<badge text="1314"></badge>
		<group title="在cell组件中使用">
			<cell title="红点" is-link @click.native="shuju">
				<div class="badge-value">
					<span class="vertical-middle">新消息</span>
					<badge></badge>
				</div>
			</cell>
		</group>
		<swiper loop auto :interval="1000" :list="demo01_list" :index="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
		<p>current index: {{demo01_index}}</p>
	</div>
</template>
<script>
  import { Badge, Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
  const baseList = [{
	  url: 'javascript:',
	  img: '',
	  title: ''
	}, {
	  url: 'javascript:',
	  img: '',
	  title: ''
	}, {
	  url: 'javascript:',
	  img: '',
	  title: ''}]

export default {
	components: {
		Badge,
		Swiper,
		SwiperItem,
		GroupTitle,
		XButton,
		Divider
	},
	created() {
		this.$http.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php').then((data) => {
			var arrLength = data.data.data.slide;
			console.log(data.data.data.slide)
			var arr = [];
			for(var i = 0; i < arrLength.length; i++) {
				arr.push({
					url: "javascript:",
					img: arrLength[i].activity.img,
					title: arrLength[i].activity.name
				});
			}
			console.log(arr);
			this.demo01_list = arr;
		}, () => {
			console.log(error)
		})
	},
	data() {
		return {
			demo01_list: [],
			demo01_index: 0
		}
	},
	methods: {
		shuju() {
		},
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
	}
}
</script>
<style type="text/css">
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>