# Shoppies

The shoppies is a movie search and nomination single page application built with Vue CLI, Vuex and Vueitfy using the OMDb API (The Open Movie Database).

Live version of the app is available at [shoppies.neenus.com](https://shoppies.neenus.com/)

## Prerequisites

What things you need to install the software and how to install them

- Node.js and NPM - You need Node.js, since the libraries required for Vue.js are downloaded using node package manager (npm). Refer to [Node.js website](https://nodejs.org/en/) for installation instruciton.
- Vue CLI - Install Vue CLI using the following command: `npm install -g @vue/cli`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

``` bash
# creat a .env.local file for env variables inside the root dir of the repo
touch .env.local

# include the following variables in .env.local file
VUE_APP_OMDB_API_URL=http://www.omdbapi.com/
VUE_APP_OMDB_API_KEY=yourApiKey # register a free one at https://www.omdbapi.com

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# Lints and fixes files
npm run lint

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit:unit

```

## Built with

- [Vue.js](https://vuejs.org/) - 2.6.11 or above
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
- [Material Design Icons iconfont](https://github.com/jossef/material-design-icons-iconfont) - Material design icons used with Vuetify
- [Vue-router](https://router.vuejs.org/) - Official router for Vue.js
- [Vuetify](https://vuetifyjs.com/en/) - Material design material framwork for Vue.js - 2.2 or above
- [Vuex](https://vuex.vuejs.org/) - State management library for Vue.js - 3.4.0 or above
- [vuex-persist](https://github.com/championswimmer/vuex-persist) - Vuex plaugin to enable saving state to a presisted storage like Cookies, localStorage or sessionStorage
- [OMDb API](https://www.omdbapi.com/) - The Open Movie Database *(API Key required get a free one [here](https://www.omdbapi.com))*

## License

This project is licensed under the MIT License
