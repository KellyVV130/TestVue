<template>
  <div>
    <el-row>
      <el-col>
        <el-card :body-style="{ padding: '20px' }" style="position:fixed;">
            <p><div class="demo-basic--circle">
              <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
            </div></p>
            <p><el-link type="primary">作者名</el-link></p>
            <p><el-button plain style="padding: 7px;">关注/取消关注</el-button></p>
            <!--<p style="margin:5px;"><time class="time">{{ currentDate }}</time></p>-->
            <p><el-row>
              <el-tooltip content="点赞" placement="bottom" effect="light">
                <el-button type="primary" icon="el-icon-thumb" circle></el-button>
              </el-tooltip>
              <el-tooltip content="评论" placement="bottom" effect="light">
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
              </el-tooltip>
              <el-tooltip content="收藏/取消收藏" placement="bottom" effect="light">
                <el-button type="primary" icon="el-icon-star-off" circle></el-button>
              </el-tooltip>
              <el-tooltip content="分享" placement="bottom" effect="light">
                <el-button type="primary" icon="el-icon-share" circle></el-button>
              </el-tooltip>
              <el-tooltip content="删除" placement="bottom" effect="light">
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
              </el-tooltip>
            </el-row></p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

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
      clear: both
  }
  .el-row {
    margin-bottom: 0px;
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
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    };
  }
}
</script>




