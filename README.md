# Personal Site

Link: [harttraveller.com](https://harttraveller.com)

## Mostly Finished Posts

- [Evaluating Generative Poetry](./pages/posts/evaluating-generative-poetry.md)

## Developer Details

If you want to use the theme, mkdocs configuration, or anything else feel free. Some notes for myself that you might find useful if you use anything here are below.

After installing `sass`, the theme can be built with:

```sh
sass ./theme/index.scss:./pages/assets/theme.css \
    --no-source-map \
    --watch
```

I don't know what a source map is, but things seem to work without it so it's turned off in the flag above. The watch flag can be used during development to transpile the scss files to css on changes; run `mkdocs serve` as well to rebuild the site on changes to theme.