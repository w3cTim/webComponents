
import { defineConfig } from "vite"

export default defineConfig({
    server: {
        hmr: {
            // vite 默认热更新刷新页面，目前没有配置关闭，只能随便指定一个协议，使它失效
            protocol: 'xxxx'
        }
    }
})