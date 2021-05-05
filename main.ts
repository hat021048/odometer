input.onButtonPressed(Button.A, function () {
    Periode += -1000
})
function Stopp () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function Bak () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, Math.constrain(Speed, 100, 1023))
    Regulator()
}
function Fram () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.analogWritePin(AnalogPin.P0, Math.constrain(Speed, 100, 1023))
    Regulator()
}
input.onButtonPressed(Button.B, function () {
    Periode += 1000
})
function Regulator () {
    MåltPeriode = Math.constrain(pins.pulseIn(DigitalPin.P8, PulseValue.High), 15000, 25000)
    Speed += Math.round((MåltPeriode - Periode) / Periode * 100)
}
let MåltPeriode = 0
let Periode = 0
let Speed = 0
basic.showIcon(IconNames.Heart)
Speed = 200
Periode = 25000
MåltPeriode = Periode
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        Fram()
    } else {
        for (let index = 0; index < 50; index++) {
            Bak()
        }
    }
})
