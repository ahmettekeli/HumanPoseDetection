// A function to draw the skeletons
const drawSkeleton = (pose, ctx) => {
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
	},
	// A function to draw ellipses over the detected keypoints
	drawKeypoints = (pose, ctx) => {
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
	},
	drawCameraIntoCanvas = (ctx, video) => {
		// Draw the video element into the canvas
		ctx.drawImage(video, 0, 0, 640, 480);
		// We can call both functions to draw all keypoints and the skeletons
		window.requestAnimationFrame(() => {
			drawCameraIntoCanvas(ctx, video);
		});
	},
	startVideo = (video) => {
		// Create a webcam capture
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
				video.srcObject = stream;
				video.play();
			});
		}
	};

module.exports = { drawSkeleton, drawKeypoints, drawCameraIntoCanvas, startVideo };
