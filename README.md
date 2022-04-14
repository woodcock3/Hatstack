# HatStack

|![andre-styles-unsplash](https://user-images.githubusercontent.com/64870518/163192328-6cb5f7ac-4fde-496f-9152-b6ea202ac802.jpg)|
| -------------------------------------------------------------------------------------------------------------- |

Basic Starter Kit for [Hugo](https://gohugo.io/), [Alpine.js](https://alpinejs.dev/) and [Tailwind CSS](https://www.tailwindcss.com)

## Stack

- Hugo (latest)
- AlpineJS 2.x
- Tailwind 3.x & Tailwind Typography

## Features

- Basic Page & Blog Layouts
- [Partytown](https://partytown.builder.io/) to run third-party scripts from a web worker
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

Some config `config.yml` defaults:

```yml

baseURL: ''
build:
  writeStats: true

```

If your using Github pages make sure you update the BaseURL in the config file
Then run your project as usual.
