let distToOb = 0
forever(function () {
    distToOb = sensors.ultrasonic3.distance()
    brick.showValue("US", distToOb, 1)
    if (sensors.color1.isColorDetected(ColorSensorColor.Black)) {
        motors.largeBC.steer(0, -50, 0.5, MoveUnit.Rotations)
        motors.largeBC.steer(200, 50, Math.randomRange(0, 360), MoveUnit.Degrees)
    }
    motors.largeBC.steer(0, 50 * (distToOb / 255))
})
