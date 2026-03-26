import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { groupIconVitePlugin, groupIconMdPlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Bouquet",
    description: "Essential hooks for scripting with Allium",
    lang: "en-US",
    head: [
        [
            'link',
            { rel: 'icon', type: 'image/png', href: '/icon.png' }
        ],
    ],
    base: "/",
    themeConfig: {
        logo: "/icon.png",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Reference', link: '/reference/index' },
        ],
        sidebar: [
            {
                text: 'Reference',
                items: []
            }
        ],

        editLink: {
            pattern: 'https://github.com/moongardenmods/bouquet-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026-present hugeblank'
        },

        socialLinks: [
            { icon: 'modrinth', link: 'https://modrinth.com/mod/bouquet' },
            { icon: 'github', link: 'https://github.com/moongardenmods/allium' },
            { icon: 'discord', link: "https://discord.gg/rWSaP222G9" },
        ],

        search: {
            provider: 'local',
            options: {
                detailedView: true
            }
        }
    },

    markdown: {
        config: (md) => {
            md.use(groupIconMdPlugin, {
                titleBar: { includeSnippet: true },
            }).use(footnote)
        },
        lineNumbers: true,
        stripMarkersFromSnippets: true,
    },


    vite: {
        plugins: [
            groupIconVitePlugin({
                customIcon: {
                    'lua': "material-icon-theme:lua",
                    'java': "material-icon-theme:java"
                }
            })
        ]
    }
})
