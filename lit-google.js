import { LitElement, html, css } from 'lit'

class LitCounter extends LitElement {

    constructor() {
        super()
        this.count = 0
    }

    // 注册属性，注册后的属性更新会触发对应元素的更新
    static properties = {
        count: {}
    }

    static styles = css`
        button {
            color: var(--my-color)
        }
    `

    render() {
        return html`<button @click = ${() => { this.count++ }}>${this.count}</button>`
    }
}

customElements.define('lit-counter', LitCounter)