import * as posenetModel from "@tensorflow-models/posenet";
// Grab elements, create settings, etc.
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let poseNet;

// A function to draw the video and poses into the canvas.
// This function is independent of the result of posenet
// This way the video will not seem slow if poseNet
// is not detecting a position
function drawCameraIntoCanvas() {
	// Draw the video element into the canvas
	ctx.drawImage(video, 0, 0, 640, 480);
	// We can call both functions to draw all keypoints and the skeletons
	window.requestAnimationFrame(drawCameraIntoCanvas);
}
// Loop over the drawCameraIntoCanvas function

const imageScaleFactor = 0.5;
const flipHorizontal = false;
const outputStride = 16;

const loadModel = async () => {
	return await posenetModel.load();
};

loadModel().then((net) => {
	poseNet = net;
	// Create a webcam capture
	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
			video.srcObject = stream;
			video.play();
		});
	}
	drawCameraIntoCanvas();
});

const estimatePose = async (net) => {
	console.log("raf ici");
	// load the posenet model
	const pose = await net.estimateSinglePose(video, imageScaleFactor, flipHorizontal, outputStride);
	console.log({ pose });
	drawKeypoints(pose);
	window.raf = window.requestAnimationFrame(() => {
		estimatePose(net);
	});
};

video.addEventListener("loadeddata", (event) => {
	console.log("Yay!");
	estimatePose(poseNet);
});

// A function to draw ellipses over the detected keypoints
function drawKeypoints(pose) {
	// Loop through all the poses detected
	// For each pose detected, loop through all the keypoints
	console.log("draw keypoints pose:", pose);
	for (let j = 0; j < pose.keypoints.length; j++) {
		let keypoint = pose.keypoints[j];
		// Only draw an ellipse is the pose probability is bigger than 0.2
		if (keypoint.score > 0.2) {
			ctx.fillStyle = "rgb(255, 165, 0)";
			ctx.fillRect(keypoint.position.x, keypoint.position.y, 25, 25);
			// ctx.beginPath();
			// ctx.arc(keypoint.position.x, keypoint.position.y, 10, 0, 2 * Math.PI);
			// ctx.stroke();
		}
	}
}

// A function to draw the skeletons
function drawSkeleton(pose) {
	// Loop through all the skeletons detected
	// For every skeleton, loop through all body connections
	for (let j = 0; j < pose.skeleton.length; j++) {
		let partA = pose.skeleton[j][0];
		let partB = pose.skeleton[j][1];
		ctx.beginPath();
		ctx.moveTo(partA.position.x, partA.position.y);
		ctx.lineTo(partB.position.x, partB.position.y);
		ctx.stroke();
	}
}
