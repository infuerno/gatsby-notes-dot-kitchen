We're shipping new features! For final testing, we're rolling them out first to a small % of Gatsby users
and your site was automatically chosen as one of them. With your help, we'll then release them to everyone in the next minor release.

We greatly appreciate your help testing the change. Please report any feedback good or bad in the umbrella issue. If you do encounter problems, please disable the flag by setting
it to false in your gatsby-config.js like:

```
flags: {
  THE_FLAG: false
}
```

The following flags were automatically enabled on your site:

- DEV_SSR · (Umbrella Issue (https://gatsby.dev/dev-ssr-feedback)) · Server Side Render (SSR) pages on full reloads during develop. Helps you detect SSR bugs and fix them without
  needing to do full builds.

There are 5 other flags available that you might be interested in:

- FAST_DEV · Enable all experiments aimed at improving develop server start time
- PRESERVE_WEBPACK_CACHE · (Umbrella Issue (https://gatsby.dev/cache-clearing-feedback)) · Use webpack's persistent caching and don't delete webpack's cache when changing
  gatsby-node.js & gatsby-config.js files.
- PRESERVE_FILE_DOWNLOAD_CACHE · (Umbrella Issue (https://gatsby.dev/cache-clearing-feedback)) · Don't delete the downloaded files cache when changing gatsby-node.js &
  gatsby-config.js files.
- PARALLEL_SOURCING · EXPERIMENTAL · (Umbrella Issue (https://gatsby.dev/parallel-sourcing-feedback)) · Run all source plugins at the same time instead of serially. For sites
  with multiple source plugins, this can speedup sourcing and transforming considerably.
- FUNCTIONS · EXPERIMENTAL · (Umbrella Issue (https://gatsby.dev/functions-feedback)) · Compile Serverless functions in your Gatsby project and write them to disk, ready to
  deploy to Gatsby Cloud
