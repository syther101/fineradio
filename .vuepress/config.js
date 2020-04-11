module.exports = {
    plugins: [
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        // Unique ID of current classification
                        id: 'post',
                        // Target directory
                        dirname: 'pages/_posts',
                        // Path of the `entry page` (or `list page`)
                        path: '/blog',
                        itemPermalink: '/blog/:slug',
                    },
                    {
                        id: 'hosts',
                        dirname: 'pages/_hosts',
                        path: '/hosts',
                        itemPermalink: '/hosts/:slug'
                    },
                    {
                        id: 'show',
                        dirname: 'pages/_shows',
                        path: '/shows',
                        itemPermalink: '/shows/:slug'
                    },
                    {
                        id: 'episode',
                        dirname: 'pages/_episodes',
                        path: '/latest',
                        // permalink is overridden in episode-permalinks plugin to support extra :show "template var"
                        itemPermalink: '/shows/:show/episodes/:slug',
                    },
                ],
                frontmatters: [
                    {
                        // Unique ID of current classification
                        id: 'show',
                        // Decide that the frontmatter keys will be grouped under this classification
                        keys: ['show'],
                        // Path of the `entry page` (or `list page`)
                        path: '/tag/',
                        // Layout of the `entry page`
                        layout: 'Tags',
                        // Layout of the `scope page`
                        scopeLayout: 'Tag'
                    },
                ],
            },
        ],
        require('./plugins/episode-permalinks.js')
    ],
}