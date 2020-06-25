// 抚摸
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    health += 5
    basic.showIcon(IconNames.Happy)
    暂停 = false
})
// 检查健康状况
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(health)
})
// 喂食
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    health += 5
    basic.showLeds(`
        . # . . .
        . . # . .
        . # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
})
// 游戏开始，初始化生命值
let Gameover = false
let 暂停 = false
let health = 0
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
health = 100
basic.forever(function () {
    health += -2
    basic.pause(1000)
    // 游戏没有结束，宠物继续走动，相反，则游戏结束
    if (!(Gameover)) {
        basic.showLeds(`
            . . # # .
            . . . # .
            . . . # #
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . . # .
            . . . # #
            . . # . #
            . . . . .
            `)
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
            . . . . .
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
    } else {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showString("Game over!")
    }
    // 生命值小于1，游戏结束
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
