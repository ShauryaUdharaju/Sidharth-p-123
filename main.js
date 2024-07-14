left_wrist = 0
right_wrist = 0

difference = 0

function setup()
{
    canvas = createCanvas(400, 400)
    canvas.position(560, 130)

    video = createCapture(VIDEO)
    video.size(400, 300)
    video.position(50 ,170)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results)
            left_wrist = results[0].pose.leftWrist.x
            right_wrist = results[0].pose.rightWrist.x
            difference = left_wrist - right_wrist
        }
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}
