var jsPsychP5 = (function (jspsych) {
  "use strict";

  const info = {
    name: "p5",
    parameters: {
      sketch: {
        type: jspsych.ParameterType.FUNCTION,
        default: undefined,
      }
    },
  };

  /**
   * **Example p5.js plugin for jsPsych**
   *
   * Demonstrate embedding of p5 in jsPsych. p5.js must have been included
   * in a <script> tag before this plugin.
   *
   * @author Alisdair Tullo
   * @see {@link https://sorrynodocsyet DOCUMENTATION LINK TEXT}
   */
  class jsPsychP5Plugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {
      let p5_instance = new p5(
        trial.sketch,
        display_element,
        "instance"
      );
    }
  }
  jsPsychP5Plugin.info = info;

  return jsPsychP5Plugin;
})(jsPsychModule);
