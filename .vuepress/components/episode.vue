<template>
    <div>
        {{ episode.title }}
    </div>
</template>

<script>
    export default {
        name: 'episode',

        props: {
            showAlias: {
                required: true
            }
        },

        computed: {
            episode() {
                return this.$site.pages.find(page => {
                    if (page.frontmatter.show === this.showAlias) {
                        return true;
                    }
                });
            }
        }
    }
</script>