<template>
	<div style="padding-top: 30px;">
		<div class="box">
      <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <checker-item value="1">潘</checker-item>
      <checker-item value="2">闲</checker-item>
      <checker-item value="3">邓</checker-item>
      <checker-item value="4">小</checker-item>
      <checker-item value="5">驴</checker-item>
      </checker>
      <br>
    </div>
    <div class="box">
    	<checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
    </div>
	</div>
</template>
<script type="text/javascript">
import { Checker, CheckerItem, Divider, Group, Cell, Popup } from 'vux'
export default{
	components: {
    Checker,
    CheckerItem,
    Divider,
    Group,
    Cell,
    Popup
 },
 data () {
 	return {
 		demo1: "",
 		demo11: null,
 		items1: [{
      key: '1',
      value: 'A'
    }, {
      key: '2',
      value: 'B'
    }, {
      key: '3',
      value: 'C'
    }],
 	}
 }
}
</script>
<style type="text/css">
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
</style>