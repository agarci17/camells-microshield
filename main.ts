function musiqueta () {
    music.playMelody("C E G E C E G C ", 1000)
    music.playMelody("F A C5 A F A C5 F ", 1000)
    music.playMelody("G B D G B D B G ", 1000)
    music.playMelody("F A C5 A F A C5 F ", 1000)
}
function iniciar_cursa () {
    microshield.Servo(microshield.Servos.S0, 180)
    microshield.Servo(microshield.Servos.S1, 180)
    microshield.Servo(microshield.Servos.S2, 180)
    microshield.Servo(microshield.Servos.S3, 0)
    basic.pause(9000)
    atura_motors()
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
    basic.showNumber(input.lightLevel())
    microshield.Servo(microshield.Servos.S0, 0)
    microshield.Servo(microshield.Servos.S1, 0)
    microshield.Servo(microshield.Servos.S2, 0)
    microshield.Servo(microshield.Servos.S3, 180)
    basic.pause(2000)
    atura_motors()
})
radio.setGroup(1)
atura_motors()
basic.forever(function () {
    if (input.lightLevel() < 30) {
        musiqueta()
        musiqueta()
        basic.pause(5000)
        iniciar_cursa()
    }
})
