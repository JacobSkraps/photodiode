let Tilt = 0
let current = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # # # # #
    . # . # .
    `)
music.play(music.stringPlayable("- - C E B A B C5 ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    current = pins.analogReadPin(AnalogReadWritePin.P0)
    basic.showNumber(current)
    basic.pause(500)
    basic.clearScreen()
    if (current > 50) {
        basic.showIcon(IconNames.Yes)
        Tilt = 27 * (90 + input.rotation(Rotation.Pitch))
        current = 20 * current
        music.play(music.createSoundExpression(
        WaveShape.Square,
        Tilt,
        current,
        255,
        0,
        420,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.LoopingInBackground)
    } else {
        basic.showIcon(IconNames.No)
    }
})
