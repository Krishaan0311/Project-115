noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/SNG4BhVM/mustache.png')
}

function setup() {
    canvas = createCanvas(260 , 260);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(260, 260);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is inialized');
}

   function gotPoses(results) {
      if(results.length > 0)
      {
        console.log(results);
        noseX = results[0].pose.nose.x -10;
        noseY = results[0].pose.nose.y -10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
      }
   }

function draw() {
    image(video, 0, 0, 260, 260);
    //fill(0, 255, 0);
    //stroke(0, 255, 0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 35, 35);
}

function take_snapshot() {
    save('FilterImage.png');
}