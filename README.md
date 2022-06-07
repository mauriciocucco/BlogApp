# BlogApp

A very simple blog app that uses **Angular** and **Scully** (https://scully.io/docs/learn/overview/#how-does-it-work), a static site generator that uses **Jamstack** (https://jamstack.org/what-is-jamstack/).

## Installation

### Angular 12 or below

```bash
    npm i
```

### Angular 13 or above

Because Scully doesn't support Angular 13 or above yet, you have to use the --legacy-peer-deps flag:

```bash
    npm install --legacy-peer-deps
```

## How to run it locally

Write down the next command:

### Angular 12 or below

```bash
    ng add @scullyio/init
```

### Angular 13 or above

```bash
    npx ng g @scullyio/init:ng-add --renderer puppeteer
```

After that, you can run the app with the following commands:

```bash
    ng build
    npm run scully
    npm run scully:serve
```
