<template>
  <div class="box">
    <audio ref="audioRef" controls src="./assets/music.mp3" @timeupdate="setOffset"></audio>
    <div class="container" ref="containerRef">
      <ul ref="ulRef" class="lrc-list">
        <template v-for="(item, index) in lrcData">
          <li>{{ item.words }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import audioplayerData from './js/audioplayerData.js'
export default {
  data() {
    return {
      lrc: '', //歌词字符串
      lrcData: [], // 歌词对象数组
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.lrc = audioplayerData
      this.lrcData = this.parseLrc();
      this.findIndex()
    },
    /**
     * 解析歌词字符串
     * 得到一个歌词对象的数组
     * 每个歌词对象：
     * {time:开始时间, words: 歌词内容}
    */
    parseLrc() {
      let lines = this.lrc.split('\n');
      let result = []; // 歌词对象数组
      for (let i = 0; i < lines.length; i++) {
        let str = lines[i];
        let parts = str.split(']');
        let timeStr = parts[0].substring(1);
        let obj = {
          time: this.parseTime(timeStr),
          words: parts[1],
        };
        result.push(obj);
      }
      return result;
    },
    /**
     * 将一个时间字符串解析为数字（秒）
     * @param {String} timeStr 时间字符串
     * @returns
    */
    parseTime(timeStr) {
      let parts = timeStr.split(':');
      return +parts[0] * 60 + +parts[1];
    },
    /**
     * 计算出，在当前播放器播放到第几秒的情况下
     * lrcData数组中，应该高亮显示的歌词下标
     * 如果没有任何一句歌词需要显示，则得到-1
    */
    findIndex() {
      // 播放器当前时间
      let curTime = this.$refs.audioRef.currentTime;
      for (let i = 0; i < this.lrcData.length; i++) {
        if (curTime < this.lrcData[i].time) {
          return i - 1;
        }
      }
      // 找遍了都没找到（说明播放到最后一句）
      return this.lrcData.length - 1;
    },
    /**
     * 设置 ul 元素的偏移量
     */
    setOffset() {
      let containerHeight = this.$refs.containerRef.clientHeight
      let liHeight = this.$refs.ulRef.children[0].clientHeight
      let maxOffset = this.$refs.ulRef.clientHeight - containerHeight
      let index = this.findIndex();
      let offset = liHeight * index + liHeight / 2 - containerHeight / 2;
      
      if (offset < 0) {
        offset = 0;
      }
      if (offset > maxOffset) {
        offset = maxOffset;
      }
      this.$refs.ulRef.style.transform = `translateY(-${offset}px)`;
      let li = this.$refs.ulRef.querySelector('.active')
      if (li) {
        li.classList.remove('active');
      }

      li = this.$refs.ulRef.children[index];
      if (li) {
        li.classList.add('active');
      }
    }

  }
}
</script>
<style scoped>
.box {
  background: #000;
  color: #666;
  text-align: center;
}

audio {
  width: 450px;
  margin: 30px 0;
}

.container {
  height: 420px;
  overflow: hidden;
  /* border: 2px solid #fff; */
}

.container ul {
  /* border: 2px solid #fff; */
  transition: 0.6s;
  list-style: none;
}

.container li {
  height: 30px;
  /* border: 1px solid #fff; */
  line-height: 30px;
  transition: 0.2s;
}

.container li.active {
  color: #fff;
  /* font-size: ; */
  transform: scale(1.2);
}
</style>
