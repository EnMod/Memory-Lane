#pragma strict

var clip : AudioClip;

function Start () {
	AudioSource.PlayClipAtPoint(clip, transform.position);
}

function Update () {

}
