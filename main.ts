input.onButtonPressed(Button.A, function () {
    if (AOnOff == 0) {
        AOnOff = 1
        pins.digitalWritePin(DigitalPin.P0, AOnOff)
    } else {
        AOnOff = 0
        pins.digitalWritePin(DigitalPin.P0, AOnOff)
    }
})
input.onButtonPressed(Button.B, function () {
    if (BOnOff == 0) {
        BOnOff = 1
        pins.digitalWritePin(DigitalPin.P0, BOnOff)
    } else {
        BOnOff = 0
        pins.digitalWritePin(DigitalPin.P0, BOnOff)
    }
})
let BOnOff = 0
let AOnOff = 0
AOnOff = 0
BOnOff = 0
basic.forever(function () {
	
})
