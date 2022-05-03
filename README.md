# Example of jsPsych / p5.js integration

## Technical details

jsPsych and p5.js are both loaded from CDNs so it's not necessary to install them locally.

The p5.js sketch is defined with a function, which:
- takes an empty "sketch" object
- adds .setup and .draw functions which will define its behaviour.

This uses the p5.js "instance mode", rather than global setup() and draw() functions, which wouldn't work well in the context of a jsPsych experiment.

See [https://p5js.org/](https://p5js.org/) for more details.

## To run

Load index.html in your browser, either in a local file or from a server.

Move the mouse and you'll see a white circle which follows the mouse pointer.

Left click and you'll see the next trial -- this is a normal jsPsychHtmlKeyboardResponse.

Press a key to end the experiment. You'll see the experiment data, which is mostly x,y,t representing x and y coordinates of the mouse and time in milliseconds during the p5.js trial.

## License

This code is licensed CC0 (see LICENSE file) so it's easy to integrate whatever licensing you use for your code -- but if you make use of it, a link back to this repository and the originator (Alisdair Tullo at the University of Edinburgh) would be appreciated.