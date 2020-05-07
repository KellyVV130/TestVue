<template>
  <div>
    <el-container style="margin-right:170px;margin-left:170px; margin-top=30px;"><!---->
      <el-aside width="350px">
        <AuthorInfo></AuthorInfo>
      </el-aside>
      <el-container style="margin-left: 30px; display:box;" direction="vertical">
        <!--<el-header></el-header>-->
        <el-card style="background-color: #ffffff;">
          <div style="text-align:left;">博文名称</div>
          <div style="text-align:left;">发布日期：{{PostDate}}</div>
          <div class="grid-content" style="text-align:right; overflow:visible;">
            <el-tag>标签一</el-tag>
            <el-tag>标签二</el-tag>
            <el-tag>标签三</el-tag>
          </div>
        </el-card>
        <el-card style=" shadow:always;margin-top: 20px; margin-bottom: 20px;">
          <el-main style="background-color: #ffffff; text-align:left;">
            博客内容
          </el-main>
        </el-card>
        <el-card style="text-align:left; background-color:#E9EEF3;" shadow="hover">
          评论区<br>
          <Page></Page>
        </el-card>
        <Comment></Comment>
        <!----><Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import AuthorInfo from '@/components/ViewComponents/AuthorInfo'
  import Comment from '@/components/ViewComponents/Comment'
  import Page from '@/components/ViewComponents/Page'

  export default{
    name: 'ViewMain',
    data() {
      return{
        PostDate: '2019-07-03',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      };
     },
    components: {
      AuthorInfo,
      Comment,
      Page
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 50px;
    border-radius: 4px;
  }

  .el-aside {
    color: #333;
    line-height: 110%;
    text-align:center;
    padding: 20px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 180%;
    border-radius: 4px;
    min-height: 70px;
  }

  body > .el-container {
    margin: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    // border-radius: 4px;
    min-height: 36px;
    margin:0;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
