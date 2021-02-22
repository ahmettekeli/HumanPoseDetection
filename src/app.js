import * as posenetModel from "@tensorflow-models/posenet";
import poseHelper from "./poseHelper";
import utils from "./utils";

const video = document.getElementById("video"),
	canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	statusEl = document.getElementById("status"),
	trainButton = document.getElementById("train"),
	saveButton = document.getElementById("save"),
	targetEl = document.getElementById("targetInput"),
	targetSelectorBtn = document.getElementById("targetSelector"),
	trainModelBtn = document.getElementById("trainModel");

let poseNet,
	pose,
	skeleton,
	state = "",
	trainingTime = 20,
	preperationTime = 5,
	targetLabel,
	options = {
		inputs: 34,
		outputs: 3,
		task: "regression",
		debug: true,
	},
	modelInfo = {
		model: "../models/model.json",
		metadata: "../models/model_meta.json",
		weights: "../models/model.weights.bin",
	},
	brain = ml5.neuralNetwork(options);

setTimeout(() => {
	brain.load(modelInfo, brainLoaded);
	setTimeout(() => {
		setInterval(() => {
			predictPose();
		}, 1000);
	}, 1000);
}, 3000);

// brain.loadData("../3Movements_Raw_Model_data.json", rawDataLoaded);

console.log({ brain });

trainModelBtn.onclick = () => {
	brain.loadData("../src/3Movements_Raw_Model_data.json", rawDataLoaded);
};

trainButton.onclick = () => {
	statusEl.innerHTML = "Get ready";
	setTimeout(() => {
		statusEl.innerHTML = "Training...";
		state = "collecting";
	}, preperationTime * 1000);
	setTimeout(() => {
		statusEl.innerHTML = "Finished!";
		state = "not collecting";
	}, 1000 * trainingTime);
};

saveButton.onclick = () => {
	statusEl.innerHTML = "Saved";
	brain.saveData();
};

targetSelectorBtn.onclick = (e) => {
	e.preventDefault();
	console.log(e.target.form[0].value);
	targetLabel = e.target.form[0].value;
};

const trainModel = () => {
		brain.normalizeData();
		let options = {
			epochs: 50,
		};
		brain.train(options, finishedTraining);
	},
	predictPose = () => {
		console.log("predicting pose");
		if (pose) {
			console.log("pose var.");
			let inputs = [];
			for (let i = 0; i < pose.keypoints.length; i++) {
				let x = pose.keypoints[i].position.x;
				let y = pose.keypoints[i].position.y;
				inputs.push(x);
				inputs.push(y);
			}
			brain.predict(inputs, gotResult);
		} else {
			setTimeout(predictPose, 100);
		}
	},
	gotResult = (error, results) => {
		console.log({ results });
		console.log(results[0].label);
		if (error) {
			console.log({ error });
		}
	},
	gotPoses = (poses) => {
		// console.log({ poses });
		if (poses.length > 0) {
			pose = poses[0].pose;
			skeleton = poses[0].skeleton;

			// console.log({ pose });
			// console.log({ skeleton });
			let inputs = [];
			for (let i = 0; i < pose.keypoints.length; i++) {
				let x = pose.keypoints[i].position.x;
				let y = pose.keypoints[i].position.y;
				inputs.push(x);
				inputs.push(y);
			}
			if (state == "collecting") {
				let target = [targetLabel];
				brain.addData(inputs, target);
			}
		}
	},
	modelLoaded = () => {
		console.log("PoseNet Model loaded.");
	},
	brainLoaded = () => {
		console.log("Brain Model loaded.");
	},
	rawDataLoaded = () => {
		console.log("raw data loaded. starting to train.");
		trainModel();
	},
	finishedTraining = () => {
		console.log("training finished saving brain");
		brain.save();
	};

utils.startVideo(video);
utils.drawCameraIntoCanvas(ctx, video);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
