input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    while (true) {
        if (input.acceleration(Dimension.Strength) - 1000 > 100) {
            basic.showIcon(IconNames.Sad)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
            break;
        }
    }
})
