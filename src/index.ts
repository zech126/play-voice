/**
 * 部分浏览器不支持
 */
 import { voiceType } from './types';
const synthesis = window.speechSynthesis;
const synthesisUtterance = new SpeechSynthesisUtterance();
// 播放语音
export function playVoice(options:voiceType) {
  const {
    text = '',
    lang = 'zh-CN',
    volume = 1,
    rate = 1,
    pitch = 1,
    push = false,
    complete = () => {},
    pause = () => {},
    resume = () => {},
    start = () => {},
    error = () => {},
    boundary = () => {}
  } = options;
  if (!(text.trim())) return;
  // 当处于正在播放语音时触发新的播放，则停止正在播放内容
  !push && synthesis.speaking && synthesis.cancel();
  // 播放完成触发
  synthesisUtterance.onend = complete;
  // 暂停播放触发
  synthesisUtterance.onpause = pause;
  // 当暂停的播放恢复时触发
  synthesisUtterance.onresume = resume;
  // 开始播放时触发
  synthesisUtterance.onstart = start;
  // 开始播放时触发
  synthesisUtterance.onerror = error;
  // 到达单词或句子边界时触发
  synthesisUtterance.onboundary = boundary;

  synthesisUtterance.text = text;
  synthesisUtterance.lang = lang;
  synthesisUtterance.volume = volume;
  synthesisUtterance.rate = rate;
  synthesisUtterance.pitch = pitch;
  synthesis.speak(synthesisUtterance);
}
// 停止所有语音播放
export function stopVoice() {
  // synthesis.speaking // 获取播放状态
  synthesis.cancel();
}
// 暂停语音播放
export function pauseVoice() {
  synthesis.pause();
}
// 当处于暂停状态时，重新开始播放
export function restoreVoice() {
  synthesis.resume();
}

export default  {
  playVoice: playVoice,
  stopVoice: stopVoice,
  pauseVoice: pauseVoice,
  restoreVoice: restoreVoice
}