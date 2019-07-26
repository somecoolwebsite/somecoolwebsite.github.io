let video;
let poseNet;
let poses = [];
let skeletons = [];
let img;
let ear;
var jp = false;
var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

function setup() {
	
	createCanvas(640, 480);
	video = createCapture(VIDEO);
	video.size(width, height);
	img = loadImage('https://somecoolwebsite.github.io/html/okkk.png');
	ear = loadImage('https://somecoolwebsite.github.io/html/okkk.png');
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
	rect(0, 0, width, height);
	if(jp===false){
		imageMode(CORNER);
		image(video, 0, 0, width, height);
	}
	//draw the spooky scary skelertons that send shivers down ur spine
	drawKeypoints(); //This only draws the image at the wrists and eyes so we can play music according to the x and y of the hand
	//We dont need drawSkeleton coz it has no purpose
	//drawSkeleton();
}

function drawKeypoints()  {
	for (let i = 0; i < poses.length; i++) {
		for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
			let keypoint = poses[i].pose.keypoints[j];
			//only draw the thing if the ai isnt bullsh*ting u
			if (keypoint.score > 0.2) {
				if(j===9||j===10){ //this only runs when its the wrists or the eyes
				imageMode(CENTER);
				image(img, keypoint.position.x, keypoint.position.y, 100, 100);
				synth.triggerAttackRelease(keypoint.position.y,'8n');}
				if(j===3||j===4){imageMode(CENTER);
				image(ear, keypoint.position.x, keypoint.position.y, 100, 100); }
				
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
