Tone.Transport.bpm.value = 110;

const samplerB1 = new Tone.Player("../audio/kick-acoustic01.wav").toMaster();
const samplerB2 = new Tone.Player("../audio/tom-acoustic01.wav").toMaster();
const samplerB3 = new Tone.Player("../audio/snare-acoustic01.wav").toMaster();
const samplerB4 = new Tone.Player("../audio/hihat-acoustic01.wav").toMaster();
const samplerB5 = new Tone.Player("../audio/openhat-acoustic01.wav").toMaster();
const samplerB6 = new Tone.Player("../audio/clap-tape.wav").toMaster();
const samplerB7 = new Tone.Player("../audio/ride-acoustic01.wav").toMaster();
const samplerB8 = new Tone.Player("../audio/crash-acoustic.wav").toMaster();

function startSamplerB(samplerBsequencer, time, col) {
    var column = samplerBsequencer.matrix[col];
    for (var i = 0; i < column.length; i++) {
      if (column[0] === 1) {
        samplerB1.start();
      }
      if (column[1] === 1) {
        samplerB2.start();
      }
      if (column[2] === 1) {
        samplerB3.start();
      }
      if (column[3] === 1) {
        samplerB4.start();
      }
      if (column[4] === 1) {
        samplerB5.start();
      }
      if (column[5] === 1) {
        samplerB6.start();
      }
      if (column[6] === 1) {
        samplerB7.start();
      }
      if (column[7] === 1) {
        samplerB8.start();
      }
    }
    samplerBsequencer.place = col;
}














