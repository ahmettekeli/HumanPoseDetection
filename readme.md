[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h3 align="center">Human Pose Detection - Machine Model Training </h3>
  <p align="center">
    <a href="https://humanposedetection.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/ahmettekeli/HumanPoseDetection/issues">Report Bug</a>
    ·
    <a href="https://github.com/ahmettekeli/HumanPoseDetection/issues">Request Feature</a>
  </p>
</p>

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](live demo link goes here) -->

This is a sample Human Pose Detection project developed using [ml5.js PoseNet](https://learn.ml5js.org/#/reference/posenet).

### Prerequisites

The tools/software below are needed to build/extend this project.

- [node](https://nodejs.org/en/)

- npm

```sh
npm install npm@latest -g
```

### Bundled with

- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)

### Editing/Extending/Usage

1. Clone the repo

```sh
git clone https://github.com/ahmettekeli/HumanPoseDetection.git
```

2. Install NPM packages

```sh
npm install
```

3. Make changes and bundle the project with webpack/babel

```sh
npm run build
```

Make sure you have devdependencies in package.json installed and have a "build" config under scripts section in package.json with the following config

```js
"build": "webpack --config webpack.config.js"
```

webpack.config.js file with the following configs

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
    ],
  },
};
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ahmet Tekeli - [@ahmettekeli3](https://twitter.com/ahmettekeli3) - ahmettekeli1991@hotmail.com

Project Link: [https://github.com/ahmettekeli/HumanPoseDetection](https://github.com/ahmettekeli/HumanPoseDetection)

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/ahmettekeli/HumanPoseDetection/blob/master/license.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tekeliahmet/
[product-screenshot]: https://github.com/ahmettekeli/HumanPoseDetection/
