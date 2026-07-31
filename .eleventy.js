module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Copy static assets straight through
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Collections, built from tags on each content file's front matter.
  // Add a new file with the right tag and it automatically appears here -
  // no template changes needed.
  eleventyConfig.addCollection("caseStudies", (collectionApi) => {
    return collectionApi.getFilteredByTag("case-study").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  eleventyConfig.addCollection("copySamples", (collectionApi) => {
    return collectionApi.getFilteredByTag("copy-sample").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    // Set to your repo name if using the default project pages URL
    // e.g. "/portfolio-site/" -- leave as "/" once you add a custom domain
    pathPrefix: "/portfolio-site/",
  };
};
