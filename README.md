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
- Deploy to gh-pages with [Github Actions](https://github.com/features/actions)
- Multi Language 
- Header & Footer navigation
- SEO best practices
- Custom 404 pages
- Image optimization
- PurgeCSS + HTML Minify configured

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

### `config.yml` defaults

```yml
baseURL: ''
build:
  writeStats: true
```

If your using Github pages make sure you update the baseURL.
Set the writeStats to true to print the Hugo build stats.
Then run your project as usual.

### [GitHub Actions](https://github.com/features/actions)

For a CI or a dependencies update check out the `.github/workflows/deployORupdate.yml`
To update Hugo and the npm packages set the env.UPDATE_NPM = true. If env.UPDATE_NPM = false the site will build and deploy to gh-pages.

```yml
env:
  UPDATE_NPM: true
``` 
