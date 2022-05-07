export interface voiceType{
  text: string; // 需要播放的文字内容
  lang?: string; // 播放语言
  volume?: number; // 播放音量
  rate?: number; // 播放语速
  pitch?:  number; // 播放音高
  push?: boolean; // 是否追加播放(当前有语音正在播放时，是否等播放完之后再播放)
  complete?: () => void; // 播放完成触发
  pause?: () => void; // 暂停播放触发
  resume?: () => void; // 当暂停的播放恢复时触发
  start?: () => void; // 开始播放时触发
  error?: () => void; // 当发生错误时触发
  boundary?: () => void; // 到达单词或句子边界时触发
}