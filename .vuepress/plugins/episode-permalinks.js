module.exports = {
    name: 'episode-permalinks',
    extendPageData ($page) {
        if ($page.id === 'episode') {
            $page.frontmatter.permalink = 'shows/' + $page.frontmatter.show + '/episodes/' + ':slug';
        }
    }
}