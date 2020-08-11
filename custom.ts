
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function checkDoor(doorNum: number): void {
        if (doorNum == 1) {
            basic.showIcon(IconNames.Yes)
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
            basic.showString("You found it!")
        } else {
            basic.showIcon(IconNames.No)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            game.gameOver()
        }
    }


}
