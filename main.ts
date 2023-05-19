function musiqueta () {
    music.playMelody("C E G E C E G C ", 1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    music.playMelody("F A C5 A F A C5 F ", 1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    music.playMelody("G B D G B D B G ", 1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    music.playMelody("F A C5 A F A C5 F ", 1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
function iniciar_cursa () {
    microshield.Servo(microshield.Servos.S0, 180)
    microshield.Servo(microshield.Servos.S1, 180)
    microshield.Servo(microshield.Servos.S2, 180)
    microshield.Servo(microshield.Servos.S3, 0)
    basic.pause(9000)
    atura_motors()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        microshield.Servo(microshield.Servos.S0, 10)
    } else {
        if (receivedNumber == 2) {
            microshield.Servo(microshield.Servos.S1, 10)
        } else {
            if (receivedNumber == 3) {
                microshield.Servo(microshield.Servos.S2, 10)
            } else {
                if (receivedNumber == 4) {
                    microshield.Servo(microshield.Servos.S3, 175)
                }
            }
        }
    }
    basic.pause(200)
    atura_motors()
})
input.onButtonPressed(Button.A, function () {
    iniciar_cursa()
})
function atura_motors () {
    microshield.Servo(microshield.Servos.S0, 85)
    microshield.Servo(microshield.Servos.S1, 85)
    microshield.Servo(microshield.Servos.S2, 85)
    microshield.Servo(microshield.Servos.S3, 80)
}
input.onButtonPressed(Button.B, function () {
    calibracio_llum = input.lightLevel()
    basic.showNumber(input.lightLevel())
    microshield.Servo(microshield.Servos.S0, 0)
    microshield.Servo(microshield.Servos.S1, 0)
    microshield.Servo(microshield.Servos.S2, 0)
    microshield.Servo(microshield.Servos.S3, 180)
    basic.pause(2000)
    atura_motors()
})
let calibracio_llum = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
calibracio_llum = input.lightLevel()
radio.setGroup(1)
atura_motors()
basic.forever(function () {
    if (input.lightLevel() < calibracio_llum - 5) {
        musiqueta()
        musiqueta()
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(5000)
        iniciar_cursa()
    }
})
