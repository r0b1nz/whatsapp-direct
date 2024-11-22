[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/r0b1nz/whatsapp-direct/blob/master/LICENSE)

# WhatsAppDirect!

An ultra-lite web app that lets you message/call on #WhatsApp without adding the number to your contacts list.<br/>
### Visit: https://r0b1nz.github.io/whatsapp-direct/

# Getting Started

Navigate to the root directory and use: <br/>

## Installing Dependencies

`npm install` to install all dependencies.

## For Development:

`npm run serve` this will start typescript transpiler in watch mode, any changes you make in the .ts file will automatically update corresponding .js file in the assets directory

`npm run serve-sass` this will start sass in watch mode, any changes you make in the .sass file will automatically update corresponding .css file in the assets directory

## For Production:

`npm run build` this will copy all the required files to the build directory and minifies assets with grunt.

## Git Hooks:

`pre-commit` runs `npm run deploy` which builds the project with `npm run build` and push updates in `gh-pages` branch.
