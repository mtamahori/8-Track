Tone.Transport.bpm.value = 110;

const samplerA1 = new Tone.Player("../audio/kick-808.wav");
const samplerA2 = new Tone.Player("../audio/hihat-808.wav").toMaster();
const samplerA3 = new Tone.Player("../audio/snare-808.wav").toMaster();
const samplerA4 = new Tone.Player("../audio/kick-808.wav").toMaster();
const samplerA5 = new Tone.Player("../audio/kick-808.wav").toMaster();
const samplerA6 = new Tone.Player("../audio/kick-808.wav").toMaster();
const samplerA7 = new Tone.Player("../audio/kick-808.wav").toMaster();
const samplerA8 = new Tone.Player("../audio/kick-808.wav").toMaster();

function startSamplerA(samplerAsequencer, time, col) {
    var column = samplerAsequencer.matrix[col];
    for (var i = 0; i < column.length; i++) {
      if (column[0] === 1) {
        samplerA1.start();
      }
      if (column[1] === 1) {
        samplerA2.start();
      }
      if (column[2] === 1) {
        samplerA3.start();
      }
      if (column[3] === 1) {
        samplerA4.start();
      }
      if (column[4] === 1) {
        samplerA5.start();
      }
      if (column[5] === 1) {
        samplerA6.start();
      }
      if (column[6] === 1) {
        samplerA7.start();
      }
      if (column[7] === 1) {
        samplerA8.start();
      }
    }
    samplerAsequencer.place = col;
}

const samplerA1gain = new Tone.Volume(1);
samplerA1.chain(samplerA1gain, Tone.Master);

