input.onButtonPressed(Button.A, function () {
    Tally += 1
})
input.onButtonPressed(Button.AB, function () {
    Tally = 0
})
input.onButtonPressed(Button.B, function () {
    Tally += -1
})
let Tally = 0
Tally = 0
basic.forever(function () {
    basic.showNumber(Tally)
})
