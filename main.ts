input.onButtonPressed(Button.A, function () {
    Periode += -5000
})
input.onButtonPressed(Button.B, function () {
    Periode += 5000
})
let Middelverdi = 0
basic.showIcon(IconNames.Heart)
let Speed = 200
let Periode = 25000
let Periode_t4 = Periode
let Periode_t3 = Periode
let Periode_t2 = Periode
let Periode_t1 = Periode
let MåltPeriode = Periode
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.constrain(Speed, 100, 1023))
    Periode_t4 = Periode_t3
    Periode_t3 = Periode_t2
    Periode_t2 = Periode_t1
    Periode_t1 = MåltPeriode
    MåltPeriode = pins.pulseIn(DigitalPin.P8, PulseValue.High)
    Middelverdi = (Periode_t4 + Periode_t3 + Periode_t2 + Periode_t1 + MåltPeriode) / 5
    Speed += Math.round((Middelverdi - Periode) / Periode * 100)
})
