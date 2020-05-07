<template>
  <div>
  <el-row>
  <el-col>
    <el-main style="background-color:#E9EEF3; margin-top:20px; padding:5px;"><!---->
      <el-container style="vertical">
        <el-aside class="block" style="width:60px; padding:5px; margin-left:8px;">
          <el-image
          style="width: 50px; height: 50px"
          :src="url"
          :fit="fill"></el-image>
        </el-aside>
        <el-container direction="vertical">
          <el-main style="line-height: 110%; padding: 0; text-align:left;">
            <p style="margin: 5px; padding:0;"><el-link type="primary">作者名</el-link></p>
            <p style="margin-top: 5px;"><el-button plain style="padding: 5px;">关注/取消关注</el-button></p>
          </el-main>
        </el-container>
      </el-container>
      <hr width="98%" size="1" noshade="noshade" color="#C1D5CB"/>
      <div style="text-align: left; padding: 4px; margin-left: 8px;">
        评论内容
      </div>
      <hr width="98%" size="1" noshade="noshade" color="#C1D5CB"/>
      <div style="text-align:left;">
        发布日期：{{PostDate}}
        <el-tooltip content="点赞" placement="bottom" effect="light">
          <el-button type="plain" icon="el-icon-thumb" circle></el-button>
        </el-tooltip>
        <el-tooltip content="评论" placement="bottom" effect="light">
          <el-button type="plain" icon="el-icon-edit" circle></el-button>
        </el-tooltip>
      </div>
    </el-main>
  </el-col>
  </el-row>
  </div>
</template>

<script>
  export default{
    data() {
      return{
        PostDate: '2019-11-23',
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>

<style>
  .p{
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
</style>
