input.onButtonPressed(Button.A, function () {
    Periode += -5000
})
input.onButtonPressed(Button.B, function () {
    Periode += 5000
})
basic.showIcon(IconNames.Heart)
let Speed = 200
let Periode = 25000
let MåltPeriode = Periode
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.constrain(Speed, 100, 1023))
    MåltPeriode = pins.pulseIn(DigitalPin.P8, PulseValue.High)
    Speed += Math.round((MåltPeriode - Periode) / Periode * 100)
})
