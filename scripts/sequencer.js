let currentStep = 0;

const masterSequence = new Tone.Sequence((time, step) => {
  startSamplerA(samplerAsequencer, time, step);
  startSamplerB(samplerBsequencer, time, step);

  if (step === 15) {
      currentStep++;
      setPlayhead(samplerAsequencer);
      setPlayhead(samplerBsequencer);
  }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '16n');

const setPlayhead = (sequencer) => {
  sequencer.sequence(Tone.Transport.bpm.value * 4)
}

