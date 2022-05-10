class MyDiv extends HTMLElement {
    constructor() {
        super();

        // 黑盒形式运行，不影响其他元素，也不受其他元素影响
        this.attachShadow({ mode: 'open' });

        // 挂载的根元素
        this.shadowRoot.innerHTML = `
            <div style = "width: 100px; height: 100px; background: green;">
                <slot></slot>
            </div>
        `
    }
}

// 注册全局标签
// 注册标签名必须小写，必须包含一个 `-`
customElements.define('my-div', MyDiv);


class MyCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <button> ${this.count} </button>
        `
        // shadowRoot 在黑盒内相当于外部的 document
        this.btn = this.shadowRoot.querySelector('button');

        // 属性更改，但不会触发页面更新
        this.btn.addEventListener('click', () => { this.count++ })
    }

    // 注册监听的属性
    static get observedAttributes() {
        return ['count']
    }

    // 属性触发回调
    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr == 'count') {
            this.btn.textContent = newValue
        }
    }

    get count() {
        return this.getAttribute('count') ? this.getAttribute('count') : 10;
    }

    set count(count) {
        this.setAttribute('count', count)
    }
}

// 原生写 web components 比较麻烦，可是使用 google lit 库来辅助开发
// https://lit.dev/

customElements.define('my-counter', MyCounter)