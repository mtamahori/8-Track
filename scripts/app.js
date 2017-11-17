const context = new (window.AudioContext)();

nx.onload = () => {

  nx.colorize("#0892D0")


  samplerAsequencer.col = 16;
  samplerAsequencer.row = 8;
  samplerAsequencer.init();

  samplerBsequencer.col = 16;
  samplerBsequencer.row = 8;
  samplerBsequencer.init();

  samplerAvolume.hslider = false
  samplerAvolume.draw();
  samplerAvolume.init();

  samplerBvolume.hslider = false
  samplerBvolume.draw();
  samplerBvolume.init();

  samplerAeqHigh.set({ value: 0.5 })
  samplerAeqHigh.init();
  samplerAeqMid.set({ value: 0.5 })
  samplerAeqMid.init();
  samplerAeqLow.set({ value: 0.5 })
  samplerAeqLow.init();

  samplerBeqHigh.set({ value: 0.5 })
  samplerBeqMid.set({ value: 0.5 })
  samplerBeqLow.set({ value: 0.5 })

  // bpm.set({ value: 0.5 })
  bpm.init();
}

// bpm.onmouseup = function(){
//   console.log('BPM', bpm.val.value);
//   Tone.Transport.bpm.value = bpm.val.value;
//   $('#bpm').unbind('mouseleave');
// }

bpm.onmouseup = function(){
  console.log('BPM up', bpm.val.value);
  Tone.Transport.bpm.value = bpm.val.value;
  $('#bpm').unbind('mouseleave');
}

bpm.onmousedown = function(){
  console.log('BPM down', bpm.val.value);
  $('#bpm').bind('mouseleave', function (){
    $('body').one('mouseup', function () {
      $('#bpm').mouseup()
    })
  })
}

samplerAvolume.onmouseup = function(){
  console.log('samplerAvolume', samplerAvolume.val.value);
  samplerA1gain.volume.value = samplerAvolume.val.value;
  $('#samplerAvolume').unbind('mouseleave');
}

// $('#samplerAvolume').on('mousedown') = function(){
//   $('#samplerAvolume').bind('mouseleave', function (){
//     $('body').one('mouseup', function () {
//       $('#samplerAvolume').mouseup()
//     })
//   })
// }

samplerAvolume.onmousedown = function(){
  $('#samplerAvolume').bind('mouseleave', function () {
    $('body').one('mouseup', function () {
      $('#samplerAvolume').mouseup()
    })
  })
}


$('#start').on('click', function(){
  Tone.Transport.start();
  masterSequence.start();
})

$('#stop').on('click', function(){
  Tone.Transport.stop();
  [samplerAsequencer, samplerBsequencer].forEach(sequence => sequence.stop())
})


$('#samplerAeqHigh').on('mouse')
