/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Mr. Leon
 * Created on: Oct 2023
 * This program finds the distanse in cm using sonar
*/

let distansetoObject: number = 0

// setup
basic.showIcon(IconNames.Silly)

// finding distanse from sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distansetoObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  basic.showNumber(distansetoObject)
  basic.showIcon(IconNames.Duck)
})
