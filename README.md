# BlogApp

A very simple blog app that uses **Angular**, **Scully** (https://scully.io/docs/learn/overview/#how-does-it-work), a static site generator that uses the **Jamstack** architecture (https://jamstack.org/what-is-jamstack/) and PrimeNG (https://www.primefaces.org/primeng/).

## Installation

Because Scully doesn't support Angular 13 or above yet, you have to use the --legacy-peer-deps flag:

```bash
    npm install --legacy-peer-deps
```

## How to run it locally

Write down the following commands:

```bash
    ng build
    npm run scully
    npm run scully:serve
```
