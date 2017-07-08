## Installation

No installation needed to play with the project. Just clone the repo, and open the `index.html` file.

## Generating a new Dataset

The dataset is generated randomly. You can generate a new dataset with:

```sh
# update the data.js file
make data
```

To modify the data generator, start with dataGenerator/generate.js

## Tweaking The Admin

When you want to modify the admin configuration and see how it affects the admin, you'll need to install the build tools.

```sh
## install npm dependencies
make install
## run the server
make run
```

You can now open `http://localhost:8080/webpack-dev-server/`. Every change in the source will reload the page in the browser.
