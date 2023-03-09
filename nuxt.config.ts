// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title:  'Nuxtjs',
            meta: [
                { name: 'description', content: 'learn tech tips content '}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400;500;600;700;800&family=Poppins:wght@300;400&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            ],
        }
    }
})
