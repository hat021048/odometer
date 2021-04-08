input.onButtonPressed(Button.A, function () {
    Periode = Periode * 1.1
})
function Hurtig () {
    Periode = 15000
}
function Stopp () {
    pins.analogWritePin(AnalogPin.P0, 0)
}
input.onButtonPressed(Button.B, function () {
    Periode = Periode * 0.9
})
let MåltPeriode = 0
let Periode = 0
basic.showIcon(IconNames.Heart)
let Speed = 500
Periode = 25000
pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P12, 0)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.constrain(Speed, 0, 1023))
    MåltPeriode = Math.constrain(pins.pulseIn(DigitalPin.P1, PulseValue.High), 25000, 30000)
    Speed += Math.round((MåltPeriode - Periode) / Periode * 100)
})
