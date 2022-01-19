export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'AuthUtil',
        htmlAttrs: {
            lang: 'de'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'nuxt-buefy'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    router: {
        base: process.env.BASE_PATH || '/',
        middleware: ['auth']
    },
    auth: {
        strategies: {
            local: false,
            cloud: {
                scheme: 'oauth2',
                endpoints: {
                    authorization: 'https://auth.messenger.fridaysforfuture.dev/auth/realms/dev/protocol/openid-connect/auth',
                    token: 'https://auth.messenger.fridaysforfuture.dev/auth/realms/dev/protocol/openid-connect/token',
                    userInfo: 'https://auth.messenger.fridaysforfuture.dev/auth/realms/dev/protocol/openid-connect/userinfo',
                },
                token: {
                    maxAge: 600,
                },
                responseType: 'code',
                grantType: 'authorization_code',
                clientId: 'dev',
                scope: ['openid'],
                codeChallengeMethod: 'plain',
            },
        }

    },
}