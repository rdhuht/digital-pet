input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    health += 5
    basic.showNumber(health)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    health += 10
    basic.showNumber(health)
})
let health = 0
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
health = 100
let Gameover = false
basic.forever(function () {
    if (!(Gameover)) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # # .
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            . # . . .
            . # # . .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . # # . .
            . # . . .
            # # . . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # . .
            . # . . .
            # # . . .
            # . # . .
            # . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # . .
            . # # . .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # . .
            . # # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # .
            . . # # .
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # .
            . . # # .
            . . # . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . # #
            . . . . .
            `)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showString("Game over!")
    }
})
basic.forever(function () {
    if (health < 1) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . # . .
            . . # # .
            `)
        Gameover = true
    }
})
basic.forever(function () {
    health += -2
    basic.pause(1000)
})
