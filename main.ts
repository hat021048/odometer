input.onButtonPressed(Button.A, function () {
    Periode += -5000
})
input.onButtonPressed(Button.B, function () {
    Periode += 5000
})
basic.showIcon(IconNames.Heart)
let Speed = 100
let Periode = 30000
let MåltPeriode = Periode
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P12, 1)
pins.analogWritePin(AnalogPin.P0, Math.constrain(Speed, 0, 1023))
basic.pause(500)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.constrain(Speed, 0, 1023))
    MåltPeriode = Math.constrain(pins.pulseIn(DigitalPin.P1, PulseValue.Low), 10000, 100000)
    Speed += Math.round((MåltPeriode - Periode) / Periode * 100)
})
