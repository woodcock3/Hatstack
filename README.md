# HatStack

This is a work in progress!

Basic Starter Kit for [GoHugo](https://gohugo.io/), [Tailwind CSS](https://www.tailwindcss.com) and [Alpine.js](https://alpinejs.dev/).

## Stack

- Hugo (latest)
- AlpineJS
- Tailwind 3
- Tailwind Typography Plugin

## Features

- Basic Page & Blog Layouts
- Multi Language 
- Header & Footer navigation
- SEO best practices
- Custom 404 pages
- Image optimization
- Purge CSS + HTML Minify configured

## As a Project

```bash
npm install
hugo server
```

## As a Theme

Import `github.com/woodcock3/hatstack/` into your project, and then run:

```bash
hugo mod npm pack
npm install
```

You need to add this to your `config.toml` (the stats are used by the CSS purging):

```toml
[build]
writeStats = true
```

Then run your project as usual.
