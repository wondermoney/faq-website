# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

A ideia é usar esta ferramenta como FAQ, com multi-language e outras features como página para release-notes.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### TODO

[x] Set up Website

[] Set up Netlify Deploy

[x] Tentar mudar path blog -> release notes

[] Mudar Path de docs -> en

[] Criar novo path de docs -> pt

[] criar lista de faqs

[] criar página de contatos

[] Editar homepage de ajuda

[] adicionar dns faq.wonder.money

- só falta Cloudfront

[] editar layout/css para branding
