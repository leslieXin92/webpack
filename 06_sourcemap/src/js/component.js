// import 'style-loader!../style/index.style' // 使用css-loader方式一：使用css-loader来编译该文件
import '../style/index.css'
import '../style/component.less'
import icon from '../image/icon.png'

const component = () => {
  const element = document.createElement('div')
  element.innerHTML = `
    <span>Hello</span>
    <span>Webpack</span>
  `
  element.className = 'content'

  const imgEl = new Image()
  imgEl.src = icon
  imgEl.className = 'icon'
  element.appendChild(imgEl)

  const divWithBgEl = document.createElement('div')
  divWithBgEl.className = 'bg'
  element.appendChild(divWithBgEl)

  return element
}

document.body.appendChild(component())
