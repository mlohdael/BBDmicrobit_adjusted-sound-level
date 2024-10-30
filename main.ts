input.onSound(DetectedSound.Loud, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
})
let Threshold = 100
input.setSoundThreshold(SoundThreshold.Loud, Threshold)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    Threshold
    )
})
