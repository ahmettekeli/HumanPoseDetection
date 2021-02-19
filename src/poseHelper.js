const utils = require("./utils.js");

const estimatePose = async (net, ctx) => {
	const imageScaleFactor = 0.5,
		flipHorizontal = false,
		outputStride = 16;
	console.log("raf ici");
	const pose = await net.estimateSinglePose(video, imageScaleFactor, flipHorizontal, outputStride);
	console.log({ pose });
	// utils.drawKeypoints(pose, ctx);
	let poseEstimationRaf = window.requestAnimationFrame(() => {
		estimatePose(net);
	});
	window.raf = poseEstimationRaf;
	return poseEstimationRaf;
};

module.exports = { estimatePose };
