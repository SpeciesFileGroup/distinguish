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

Distinguish is a <TODO> module. It is inserted into a webpage via configuration.  All functionality is driven from a single, parameterized API call (`/api/v1/...`).  

### Use
 
... expand Quick-start ...
  
## Building a key (in TaxonWorks)

Distinguish is based of interfaces available inside TaxonWorks.  Those interfaces have many additional features facilitating curation, annotations, expansion, and editing of the underlying data.

## Contributing

.. TODO .. simplify, add CONTRIBUTING.md
  
### Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
