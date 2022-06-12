# distinguish

An interactive key engine that feeds off of [TaxonWorks](https://taxonworks.org)' [API](https://api.taxonworks.org).

## Quick start

* Create a github repository.
* ... create page
* ... add module
* ... add configs TOKEN/API
* ... add action
* ... visit page

## Details

Interactive keys are tools used by taxonomists and others to diagnosis or seperate one taxon from another. Distinguish provides an embedable, web-based, interactive key interface. The key uses logic (the "engine") and data managed in an instance of TaxonWorks.  Keys can served locally (e.g. by opening a file in your browser) or on websites. They require an internet connection.

## Features

* ...
* multi-language support
* ... 

## Technical

Distinguish is a `<TODO>` module. It is inserted into a webpage via configuration.  All functionality is driven from a single, parameterized API call (`/api/v1/...`).  

## Install

### Package manager
You can install the latest version with the npm CLI command:

```bash
npm install @sfgrp/distinguish
```
As an alternative you can use the Yarn CLI command:
```bash
yarn add @sfgrp/distinguish
```

### CDN
You can copy and paste the following tags into your HTML file.


```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sfgrp/distinguish/dist/style.css">
<script src="https://cdn.jsdelivr.net/npm/@sfgrp/distinguish/dist/distinguish.umd.js"></script>
```

## Usage
There are three ways to setup Interactive Keys. The easiest way is to let InteractiveKey auto discover your inputs automatically. For that, you simply need to provide a data attribute to your input.

### Declarative

Add `data-interactive-key="true"` attribute to input elements to initialize it.
To pass the options you need to add the prefix `data-` and write the option in kebab-case, like the following example:

```html
<input 
  data-interactive-key="true"
  data-observation-matrix-id="1"
  data-project-token="xQ9bKrhfQtHYfro9t6YY0A"
  data-base-url="https://sfg.taxonworks.org/api/v1"
>
```

### Imperative
You can initialize it by createInteractiveKey function


```html
<div id="interactive-key"></div>
```
```javascript
import createInteractiveKey from '@sfgrp/distinguish'
import '@sfgrp/distinguish/dist/style.css'

const app = new createInteractiveKey('#interactive-key', options)
```

### Vue component (Vue 3.x)
*Pinia is required in your application to use this component*

```javascript
<template>
  <VueInteractiveKey
    :observationMatrixId="observationId"
    :api-config="config"
  />
</template>

<script setup>
import { ref, reactive } from 'vue'
import { VueInteractiveKey } from '@sfgrp/distinguish'
import '@sfgrp/distinguish/dist/style.css'

const observationMatrixId = ref(1)
const config = ref({
  baseURL: 'http://localhost:3000/api/v1/',
  projectId: undefined,
  projectToken: '5kshojqRCr83fM3MW7OA9g',
  userToken: undefined
})
</script>
```


### Options object
```javascript
{
  observationMatrixId: ''       // Observation matrix ID
  apiConfig: {
    baseURL: ''                 // URL API, e.g https://sfg.taxonworks.org/api/v1
    csrfToken: ''               // CSRF Token. Don't use it with authentification API params.
    projectId: '',              // Project ID. Don't use it with projectToken.
    userToken: '',              // User Token. Don't use it with projectToken and csrfToken.
    projectToken: ''            // Project token. Don't use it with projectId and userToken.
  }
}
```
  
## Building a key (in TaxonWorks)

Distinguish is based of interfaces available inside TaxonWorks.  Those interfaces have many additional features facilitating curation, annotations, expansion, and editing of the underlying data.

## Contributing

.. TODO .. simplify, add CONTRIBUTING.md
  