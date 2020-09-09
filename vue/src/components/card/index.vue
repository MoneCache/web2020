<template>
  <el-row>
    <el-col :span="8"
            v-for="(o, index) in 3"
            :key="o">
      <el-card>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             class="image">
        <div class="full-width text-left ch-my-md ch-mt-md">
          <p class="time">{{ currentDate }}</p>
          <div class="bottom clearfix">
            <h3 style="margin-top: 0"><a class="title">插画风格图鉴（下篇）：把鸡蛋放在哪个篮子里</a></h3>
            <p class="content">我们将插画大体简单看成两类，一类是矢量插画，一类是用手绘板（笔）画出的插画，这两类插画最本质的区别在于实现成品的方式和流程，但有可能二者也能相互贯通融合。下面我会一一讲解自己所了解认识的插画风格。</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'blogcardindex',
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.title {
  text-decoration: none;
  color: black;
}
.content {
  line-height: 2em;
  font-size: 12px;
}
</style>