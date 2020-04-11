// Hijack the episodes stored inside the _shows/ directory and put them at the correct permalink.
module.exports = {
    name: 'episode-permalinks',
    extendPageData ($page) {
        if ($page.frontmatter.show) {
            $page.id = 'episode';
            $page.pid = 'episode';
            $page.frontmatter.permalink = 'shows/' + $page.frontmatter.show + '/episodes/' + ':slug';
        }
    }
}