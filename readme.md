[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h3 align="center">Human Pose Detection - Machine Model Training </h3>
  <p align="center">
    <a href="https://2021creatives.s3.eu-central-1.amazonaws.com/March/PoseDetectionExample/index.html">Demo Project (The Machine model has been trained using this repo)</a>
    <a href="https://github.com/ahmettekeli/HumanPoseDetection/issues">Report Bug</a>
    ·
    <a href="https://github.com/ahmettekeli/HumanPoseDetection/issues">Request Feature</a>
  </p>
</p>

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](live demo link goes here) -->

<p>This is a sample Human Pose Detection project developed using <a href="https://learn.ml5js.org/#/reference/posenet">ml5.js PoseNet</a>.
Custom machine model can be trained for the recognition of custom human poses. (Hands up, squat etc.)</p>

<p>In order to train a machine model, there should be raw data collected. When there is raw data ready, we can proceed to train a machine model from that data. Once the training is complete the machine model can be downloaded and consumed in any application.</p>

<p>Machine model training should be done with the buttons below the video element. <strong>Pose Label</strong> saves the name of the pose. Make sure you enter a valid name before starting the training for your desired human pose. <strong>Collect Data</strong> button starts the data collection for a specific human pose and snap shots the body composition in the video constantly for <strong>20</strong> seconds and collects raw image data. Data collection has <strong>5</strong> seconds delay to give you enough time to be ready in front of the camera. <strong>Status</strong> header will have informative directives.</p> 
Multiple human poses can be trained using <strong>Collect Data</strong> button. Make sure you enter <strong>Pose Label</strong> for each pose you want to train the machine model for. Once data collection is done for each human pose you want, click <strong>Train</strong> button to train a machine model from the raw image data. It will open up a side bar to show the machine model training progress. Once it is finished, click <strong>Save Machine Model</strong> button to download the machine model you trained with your desired human poses.

Now you have a custom machine model which will recognize the human poses you train it for. Feel free to build fun things with it and let me know what you build.

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

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are <strong>greatly appreciated<strong>.

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
