
const jsPsych = initJsPsych({
    on_finish: function() { jsPsych.data.displayData(); }
});

/*
    Example sketch which will:
    - track the mouse pointer with a white circle on a black background
    - end the trial on a left click
*/
let example_sketch = function (p5) {
    let data = {
        points: []
    };
    /*
      We need to avoid jsPsych.finishTrial being called twice.
      If this happens the next trial can end early too!
      Ideally this would be integrated in the plugin, but for
      now we'll do it manually using a flag ("finished").
    */ 
    let finished = false;
    p5.setup = function () {
        // create a canvas
        p5.createCanvas(500,500);
        p5.fill(255)
    };
    p5.draw = function () {
        p5.background(0);
        p5.circle(p5.mouseX, p5.mouseY, 50);
        // example data collection: log mouse cursor location 
        // x, y, and time
        data.points.push(
            {x: p5.mouseX, y: p5.mouseY, t: p5.millis()}
        );
        // end trial on left click
        if (p5.mouseIsPressed === true) {
            if (p5.mouseButton === p5.LEFT) {
                // See above -- ensure that we don't call finishTrial twice
                if (!finished) {
                    jsPsych.finishTrial(data);
                    finished = true;
                }
            }
        }
    };
}
// end example sketch

const p5_trial = {
    type: jsPsychP5,
    sketch: example_sketch
}

// Another trial just to test the transition between trials.
const finished = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Finished!"
}

jsPsych.run([p5_trial, finished]);