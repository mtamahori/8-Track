Tone.Transport.bpm.value = 110;

const samplerB1 = new Tone.Player("../audio/Pad-Thinzer.wav").toMaster();
const samplerB2 = new Tone.Player("../audio/106 Pad Deep Detroit Style Sharper.wav").toMaster();
const samplerB3 = new Tone.Player("../audio/106 Pad Deep Detroit Style.wav").toMaster();
const samplerB4 = new Tone.Player("../audio/kick-808.wav").toMaster();
const samplerB5 = new Tone.Player("../audio/kick-808.wav").toMaster();
const samplerB6 = new Tone.Player("../audio/kick-808.wav").toMaster();
const samplerB7 = new Tone.Player("../audio/kick-808.wav").toMaster();
const samplerB8 = new Tone.Player("../audio/kick-808.wav").toMaster();

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


// Tone.Transport.bpm.value = 110;

// const samplerB = new Tone.Players({
// 			urls : {
//         "sample1" : "../hihat-808.wav",
//         "sample2" : "../tom-808.wav",
// 			},
// 			volume : -10,
// 			fadeOut : 0.1,
// 		}).toMaster();

// function startSamplerB(samplerBsequence, time, col) {
//     var column = samplerBsequencer.matrix[col];
//     for (var i = 0; i < column.length; i++) {
//       if (column[0] === 1) {
//         samplerB.start('hihat', time, 0, "16n", 0)
//       }
//     }
//     samplerBsequencer.place = col;
// }














