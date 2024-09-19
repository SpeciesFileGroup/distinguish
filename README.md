# distinguish

An interactive key engine that feeds off of [TaxonWorks](https://taxonworks.org)' [API](https://api.taxonworks.org). Distinguish is a product of the [Species File Group](https://speciesfilegroup.org) and its collaborators.

## Quick start

See [Example page](#example-page).

## Details

Interactive keys are tools used by taxonomists and others to diagnosis or seperate one taxon (e.g. a species) from others. Distinguish provides an embedable, web-based, interactive key interface. The key uses logic (the "engine") and data managed in an instance of TaxonWorks. Keys can served locally (e.g. by opening a file in your browser) or on websites. They require an internet connection.

## Features

- Figure descriptors and observations.
- Multi-language support.
- Filter by tagged set.
- Filter by rank (e.g. "Family" or "Genus").
- Qualitative, quantitative descriptors.
- Local (file in your browser) or server-based (both require internet access).

## Technical

Distinguish is a javascript package. All functionality is driven from a single, parameterized API call.

## Install

### Package manager

You can install the latest version with the npm CLI command:

```bash
npm install @sfgrp/distinguish vue pinia
```

As an alternative you can use the Yarn CLI command:

```bash
yarn add @sfgrp/distinguish vue pinia
```

### CDN

You can copy and paste the following tags into your HTML file.

```html
<script src="https://unpkg.com/vue/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/vue-demi"></script>
<script src="https://unpkg.com/pinia"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sfgrp/distinguish@latest/dist/style.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/@sfgrp/distinguish@latest/dist/distinguish.umd.min.js"></script>
```

## Usage

There are two ways to setup Interactive Keys. The easiest way is to let InteractiveKey auto discover your inputs automatically. For that, you simply need to provide a data attribute on your element.

### Declarative

Add `data-interactive-key="true"` attribute to input elements to initialize it.
To pass the options you need to add the prefix `data-` and write the option in kebab-case, like the following example:

```html
<div
  data-interactive-key="true"
  data-observation-matrix-id="1"
  data-project-token="xQ9bKrhfQtHYfro9t6YY0A"
  data-base-url="https://sfg.taxonworks.org/api/v1"
></div>
```

### Imperative

You can initialize it by `createInteractiveKey` function

```html
<div id="interactive-key"></div>
```

```javascript
import { createInteractiveKey } from '@sfgrp/distinguish'
import '@sfgrp/distinguish/dist/style.css'

const app = createInteractiveKey('#interactive-key', options)
```

### Options object

```javascript
{
  observationMatrixId: '',      // Observation matrix ID
  apiConfig: {
    baseURL: '',                // URL API, e.g https://sfg.taxonworks.org/api/v1
    csrfToken: '',              // CSRF Token. Don't use it with authentification API params.
    projectId: '',              // Project ID. Don't use it with projectToken.
    userToken: '',              // User Token. Don't use it with projectToken and csrfToken.
    projectToken: ''            // Project token. Don't use it with projectId and userToken.
  }
}
```

### Example page

This uses the [CDN](#cdn) and [Declarative](#declarative) approach.

- Copy the text below into a file called `index.html`.
- Configure the `data-` options to point to your key.
- Open that file in your browser.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@sfgrp/distinguish@latest/dist/style.min.css"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <style>
      body {
        margin: 0;
      }
      .standalone-app {
        height: 100vh;
      }
    </style>
    <title>Distinguish</title>
  </head>
  <body>
    <div
      class="standalone-app"
      data-interactive-key="true"
      data-observation-matrix-id="1"
      data-project-token="yourprojecttoken"
      data-base-url="https://<your.taxonworks.server>/api/v1"
    ></div>
    <script src="https://unpkg.com/vue/dist/vue.global.prod.js"></script>
    <script src="https://unpkg.com/vue-demi"></script>
    <script src="https://unpkg.com/pinia"></script>
    <script src="https://cdn.jsdelivr.net/npm/@sfgrp/distinguish@latest/dist/distinguish.umd.min.js"></script>
  </body>
</html>
```

### Deploying a key on-line

[GitHub Pages](https://pages.github.com/) is perhaps the quickest way to deploy your key if you don't have access to your own server.

- Follow instructions above to setup your repository.
- Add a page to that repository that looks like the [example page](#example-page).

### Troubleshooting

If nothing loads (blank page):

- Open your Browser's development tools console panel. Reload the page. Errors will appear in red.

If when loaded or during use you see:

- `Request failed with status code 401` - The API configuration parameters are incorrect
- `Request failed with status code 404` - The API URL path or Token is incorrect (the base of the API URL is correct)
- `Network error` - The key can not connect to the internet

## Building a key (in TaxonWorks)

Distinguish is based of interfaces available inside TaxonWorks. Those interfaces have many additional features facilitating the addition and management of images, curation, annotations, expansion, and editing of the underlying data. To start editing a key find a [TaxonWorks provider](https://docs.taxonworks.org/guide/start-a-project.html#finding-a-collaborating-provider), or [install your own instance](https://github.com/SpeciesFileGroup/install_taxonworks). Need help? [Chat on Gitter](https://gitter.im/SpeciesFileGroup/taxonworks) or [join a TaxonWorks event](https://speciesfilegroup.org/events.html).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Distinguish is open source and is presently available under the [University of Illinois/NCSA Open Source License](https://en.wikipedia.org/wiki/University_of_Illinois/NCSA_Open_Source_License).
