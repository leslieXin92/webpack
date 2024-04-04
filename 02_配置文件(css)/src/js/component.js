// import 'style-loader!../style/index.style' // 使用css-loader方式一：使用css-loader来编译该文件
import '../style/index.css'
import '../style/component.less'

const component = () => {
  const element = document.createElement('div')
  element.innerHTML = `
    <span>Hello</span>
    <span>Webpack</span>
  `
  element.className = 'content'
  return element
}

document.body.appendChild(component())
