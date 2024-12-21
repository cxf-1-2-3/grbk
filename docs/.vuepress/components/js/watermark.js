/**
 *	水印添加方法
 */
const setWatermark = (str1, str2, divId) => {
  const id = 'watermark_id'
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  const can = document.createElement('canvas')
  // 设置canvas画布大小
  can.width = 250
  can.height = 120
  const cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180) // 水印旋转角度
  cans.font = '15px Vedana'
  cans.fillStyle = '#000000'
  cans.textAlign = 'center'
  cans.textBaseline = 'middle'
  cans.fillText(str1, can.width / 2, can.height) // 水印在画布的位置x，y轴
  cans.fillText(str2, can.width / 2, can.height + 22)

  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '0'
  div.style.left = '0'
  div.style.opacity = '0.15'
  div.style.position = 'absolute'
  div.style.zIndex = '100000'
  div.style.width = divId.clientWidth + 'px'
  div.style.height = divId.clientHeight + 'px'
  div.style.background =
    'url(' + can.toDataURL('image/png') + ') left top repeat'
  divId.appendChild(div)
  return id
}

// 添加水印方法
export const setWaterMark = (str1, str2, divId) => {
  let id = setWatermark(str1, str2, divId)
  if (document.getElementById(id) === null) {
    id = setWatermark(str1, str2, divId)
  }
}

// 移除水印方法
export const removeWatermark = (divId) => {
  const id = 'watermark_id'
  if (document.getElementById(id) !== null) {
    divId.removeChild(document.getElementById(id))
  }
}
