<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="actionsheet上拉菜单" value="Cool" is-link link="/page/actionsheet"></cell>
      <cell title="alert警报、遮罩层加弹窗" value="Cool" is-link link="/page/alert"></cell>
      <cell title="badge小红点" value="Cool" is-link link="/page/badge"></cell>
      <cell title="blur模糊" value="Cool" is-link link="/page/blur"></cell>
      <cell title="buttonTab按钮背景颜色切换" value="Cool" is-link link="/page/buttonTab"></cell>
      <cell title="Calender日历" value="Cool" is-link link="/page/calender"></cell>
      <cell title="Card卡" value="Cool" is-link link="/page/card"></cell>
      <cell title="cellBox" value="Cool" is-link link="/page/cellBox"></cell>
      <cell title="CellFormPreview" value="Cool" is-link link="/page/cellFormPreview"></cell>
      <cell title="Cell" value="Cool" is-link link="/page/cell"></cell>
      <cell title="CheckIcon" value="Cool" is-link link="/page/checkIcon"></cell>
      <cell title="Checker" value="Cool" is-link link="/page/checker"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
