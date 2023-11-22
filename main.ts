basic.forever(function () {
    serial.writeValue("Nivel de luz", input.lightLevel())
    basic.pause(1000)
})
basic.forever(function () {
    serial.writeValue("Nivel de sonido", input.soundLevel())
    basic.pause(1000)
})
