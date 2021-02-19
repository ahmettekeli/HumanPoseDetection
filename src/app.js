import * as posenetModel from "@tensorflow-models/posenet";
import poseHelper from "./poseHelper";
import utils from "./utils";
console.log({ utils });

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let poseNet;

const loadModel = async () => {
	return await posenetModel.load();
};

loadModel().then((net) => {
	poseNet = net;
	utils.startVideo(video);
	utils.drawCameraIntoCanvas(ctx, video);
});

video.addEventListener("loadeddata", (event) => {
	poseHelper.estimatePose(poseNet, ctx);
});
