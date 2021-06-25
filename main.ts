let light2 = 0
basic.forever(function () {
    light2 = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    Math.max(0, 200 - light2),
    200
    )
    serial.writeValue("x", light2)
})
