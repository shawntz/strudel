$: s("[bd <hh oh>]*2").bank("tr909").dec(.4)
$: s("[bd <hh oh>]*4").bank("tr808").dec(.4)
$: s("[bd <hh oh>]*2").bank("tr707").dec(.4)

$: n("<0 1 3 7>*4").scale("c:minor").trans(-16)
  .s("supersaw")
  .detune(0.2)
  .attack(0.2)
  .release(1.2)
  ._pianoroll()

// $: n("<0 4 0 9 7>*16").add("<0>*2").scale("c:minor").trans(-8)
//   .s("sawtooth")
//   .delay(.6)
//   // .pan(rand)
// ._pianoroll()

$: n("<0 4 1 9 3 7>*16").add("<0>*2").scale("c:minor").trans(-8)
  .s("sawtooth")
  .delay(.6)
  ._pianoroll()

// $: n("<0 1 3 7>*16").add("<0>*2").scale("c:minor").trans(-8)
//   .s("sawtooth")
//   .delay(.6)
//   ._pianoroll()

// $: n("<7 _ _ 6 5 _ <5 3> <6 4>>*2").scale("c:minor").trans(-8)
// .detune(rand).s("supersaw")
// ._pianoroll()

// $: n("<0>*16").scale("c:minor").trans(-24)
// .detune(rand).s("supersaw")
// ._pianoroll()

// $: n("<7 _ 1 6 5 _ <5 3> <6 4 3>>*2").scale("c:minor").trans(-8)
//   .detune(rand).s("supersaw")
//   ._pianoroll()
// $: n("<0 7 10 11>*8")   // 0=C, 7=C, 10=Eb, 11=E/B depending on scale impl
//   .scale("c:harmonicMinor")
//   .trans(-8)
//   .s("supersaw")
//   ._pianoroll()

// $: note("<c3 [eb3,g3] g2 [g3,b3]>*8")
//   .clip(saw.slow(2))
//   ._pianoroll()

// $: note("<c3 [eb3,g3] g2 [g3,bb3 a3]>*8")
//   .clip(saw.slow(2))
//   ._pianoroll()

// $: note("<c3 [eb3,g3] g2 [g3,bb3]>*8")
// .clip(saw.slow(2))
// ._pianoroll()

// $: n(isaw.range(0,8).segment(8))
// .scale('A minor')
// ._pianoroll()
