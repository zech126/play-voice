# 安装
yarn add play-voice-tool -S

或

npm i play-voice-tool -S

npm install play-voice-tool -S

# 示例
```js
  import { playVoice } from 'play-voice-tool';

  playVoice({
    text: `5月7日上午10:00，上海举行疫情防控工作新闻发布会，上海市副市长陈群、市教委主任王平、市卫生健康委副主任赵丹丹、
    浦东新区副区长吴强介绍本市疫情防控最新情况。`,
    start: (e) => {
      console.log('开始播放', e)
    },
    complete: (e) => {
      console.log('播放完成', e)
    },
    pause: (e) => {
      console.log('暂停播放', e)
    }
  })
  // 或
  import voice from 'play-voice-tool';
  voice.playVoice({
    text: `5月7日上午10:00，上海举行疫情防控工作新闻发布会，上海市副市长陈群、市教委主任王平、市卫生健康委副主任赵丹丹、
    浦东新区副区长吴强介绍本市疫情防控最新情况。`,
    start: (e) => {
      console.log('开始播放', e)
    },
    complete: (e) => {
      console.log('播放完成', e)
    },
    pause: (e) => {
      console.log('暂停播放', e)
    }
  })

```

| 方法               | 说明                            | 类型    | 默认        |
| ----------------- | ------------------------------- | -------- | -------------- |
| playVoice         |  播放语音                        | Object   | 参考下面 playVoice options  |
| stopVoice         | 停止所有语音播放                  | -        | -         |
| pauseVoice        | 暂停语音播放                      | -        | -         |
| restoreVoice      | 当处于暂停状态时，重新开始播放     | -        | -         |

# playVoice options

| 属性           | 说明                             | 类型      | 默认       |
| -------------- | -------------------------------- | -------- | ----------- |
| text           | 需要播放的文字内容                | string   | -           |
| lang           | 播放语言                          | string   | zh-CN      |
| volume         | 播放音量                          | number   | 1         |
| rate           | 播放语速                          | number   | 1         |
| pitch          | 播放音高                          | number   | 1         |
| push           | 是否追加播放(当前有语音正在播放时，是否等播放完之后再播放)  | boolean        | false         |
| complete       | 播放完成触发,返回一个参数当前配置   | function | -         |
| pause          | 暂停播放触发,返回一个参数当前配置   | function        | -         |
| resume         | 当暂停的播放恢复时触发,返回一个参数当前配置  | function        | -         |
| start          | 开始播放时触发,返回一个参数当前配置   | function        | -         |
| error          | 当发生错误时触发,返回一个参数当前配置  | function        | -         |
| boundary       | 到达单词或句子边界时触发,返回一个参数当前配置 | function        | -         |