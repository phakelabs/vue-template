import { ViteSSG } from "vite-ssg"
import "virtual:windi.css"

import App from "~/layouts/default.vue"
import routes from "virtual:generated-pages"

export const createApp = ViteSSG(App, { routes })
