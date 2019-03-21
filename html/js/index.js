let video;
let poseNet;
let poses = [];
let skeletons = [];
let img;

function setup() {
	createCanvas(640, 480);
	video = createCapture(VIDEO);
	video.size(width, height);
	img = loadImage('cry.jpg');
	//makes a knew pose instance
	poseNet = ml5.poseNet(video, modelReady);
	//does some detection stuff
	poseNet.on('pose', function (results) {
		poses = results;
	});
}

function modelReady() {
	select('#status').html('Model Loaded');
}

function draw() {
	image(video, 0, 0, width, height);

	//draw the spooky scary skelertons that send shivers down ur spine
	drawKeypoints();
	drawSkeleton();
}

function drawKeypoints()  {
	for (let i = 0; i < poses.length; i++) {
		for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
			let keypoint = poses[i].pose.keypoints[j];
			//only draw the thing if the ai isnt bullsh*ting u
			if (keypoint.score > 0.2) {
				image(img, 0, 0, 100, 100);
			}
		}
	}
}

//spoopy skeletons
function drawSkeleton() {
	for (let i = 0; i < poses.length; i++) {
		for (let j = 0; j < poses[i].skeleton.length; j++) {
			//literally just drawing lines
			let partA = poses[i].skeleton[j][0];
			let partB = poses[i].skeleton[j][1];
			stroke(255, 0, 0);
			line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
		}
	}
}
