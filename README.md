# next.js-redux

An ES6, Server-Side Rendered (SSR) version of the functionality presented on [react-typescript--redux](https://github.com/orenhd/react-typescript--redux), using [Next.js](https://www.npmjs.com/package/create-next-app).

## Notable Changes
- Redux integration was done according to the example provided by [zeit](https://github.com/zeit/next.js/tree/master/examples/with-redux).
- Isomorphic promise and fetch support is done by using [es6-promise](https://www.npmjs.com/package/es6-promise) and [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) accordingly.
- Added an icon on the app bar, indicating the rendering location of the current page (server or client).