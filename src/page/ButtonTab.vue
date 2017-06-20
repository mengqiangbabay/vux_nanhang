<template>
	<div style="padding: 15px;">
		<button-tab style="margin-top:30px;">
      <button-tab-item>今天</button-tab-item>
      <button-tab-item selected>本周</button-tab-item>
      <button-tab-item>本月<span class="vux-reddot-s"></span></button-tab-item>
    </button-tab>  
	</div>
</template>
<script>
import { ButtonTab, ButtonTabItem } from 'vux'
export default{
	components: {
    ButtonTab,
    ButtonTabItem
  }
}
</script>
<style>
	.vux-button-group > a.vux-button-tab-item-middle:after{
		border-right: 1px solid #ccc !important;
    border-top: 1px solid #ccc !important;
    border-bottom: 1px solid #ccc !important;
    border-left: none !important;
	}
	.vux-button-group > a.vux-button-tab-item-first:after{
		border: 1px solid #ccc !important;
	}
	.vux-button-group > a.vux-button-tab-item-last:after{
		border-right: 1px solid #ccc !important;
    border-top: 1px solid #ccc !important;
    border-bottom: 1px solid #ccc !important;
    border-left: none !important;
	}
</style>