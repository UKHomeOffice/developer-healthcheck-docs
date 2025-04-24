import govukEleventyPlugin from "@x-govuk/govuk-eleventy-plugin";

export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "pubs/assets/logos": "assets/logos"});

    const xgovukPluginOptions = {
        // Home Office branding
        scssSettingsPath: "/styles/_settings.scss",
        stylesheets: ['/styles/base.css'],
        icons: {
            mask: '/assets/logos/ho-mask-icon.svg',
            shortcut: '/assets/logos/ho-favicon.ico',
            touch: '/assets/logos/ho-apple-touch-icon.png'
        },
        opengraphImageUrl: '/assets/logos/ho-opengraph-image.png',
        homeKey: 'Home',
        header: {
            logotype: {
                html:
                    '<span class="govuk-header__logotype">' +
                    '  <img src="/assets/logos/ho_logo.svg" height="34px" alt="Home Office Logo">' +
                    '  <span class="govuk-header__logotype-text">Home Office</span>' +
                    '</span>'
            },
            productName: 'Eleventy docs-as-code template',
            organisationName: 'Home Office',
            search: {
                label: 'Search site',
                indexPath: '/search.json',
                sitemapPath: '/sitemap.html'
            }
        },
    }

    eleventyConfig.addPlugin(govukEleventyPlugin, xgovukPluginOptions);

    return {
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        dir: {
            // The folder where all your content will live:
            input: 'pubs',
            // Use layouts from the x-govuk plugin
            layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
        }
    }
}
