#pragma strict

enum Fade2 {In, Out}
var fadeTime = 4.0;

function Start () {

    

}

function Update () {
if (NoPainNoGain.EOL == true) {
FadeAudio(fadeTime, Fade.Out);
}
}

function FadeAudio (timer : float, fadeType : Fade) {

    var start = fadeType == Fade.In? 0.0 : 1.0;
    var end = fadeType == Fade.In? 1.0 : 0.0;
    var i = 0.0;
    var step = 1.0/timer;

    while (i <= 1.0) {

        i += step * Time.deltaTime;
        audio.volume = Mathf.Lerp(start, end, i);
        yield;

    }
    yield WaitForSeconds (2);
    Application.LoadLevel("Chapter 2");
    }