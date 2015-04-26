#pragma strict
var itsyou : AudioClip;
var remain : AudioClip;
var sugar : AudioClip;
var worse : AudioClip;
var task : AudioClip;
var luck : AudioClip;
static var EOL : boolean = false;

var welcome : GameObject;
var trythison : GameObject;
var hesintrouble : GameObject;
var toldyou : GameObject;
var yourtask : GameObject;
var goodluck : GameObject;

function Start () {
	welcome.renderer.enabled = true;
	trythison.renderer.enabled = false;
	hesintrouble.renderer.enabled = false;
	toldyou.renderer.enabled = false;
	yourtask.renderer.enabled = false;
	goodluck.renderer.enabled = false;
Muzak();
//audio.Play();
}

function Update() {

}

function Muzak () {
	for (var i = 0; i < 1; i++) {
	AudioSource.PlayClipAtPoint(itsyou, transform.position);
		yield WaitForSeconds (itsyou.length);
			welcome.renderer.enabled = false;
			trythison.renderer.enabled = true;
			

	AudioSource.PlayClipAtPoint(remain, transform.position);
	yield WaitForSeconds (remain.length);
			trythison.renderer.enabled = false;
			hesintrouble.renderer.enabled = true;
			
			
	AudioSource.PlayClipAtPoint(sugar, transform.position);
	yield WaitForSeconds (sugar.length);
			hesintrouble.renderer.enabled = false;
			toldyou.renderer.enabled = true;
			
			
	AudioSource.PlayClipAtPoint(worse, transform.position);
	yield WaitForSeconds (worse.length);
			toldyou.renderer.enabled = false;
			yourtask.renderer.enabled = true;
			
			
	AudioSource.PlayClipAtPoint(task, transform.position);
	yield WaitForSeconds (task.length);
			yourtask.renderer.enabled = false;
			goodluck.renderer.enabled = true;
			

	AudioSource.PlayClipAtPoint(luck, transform.position);
	yield WaitForSeconds (luck.length);
	yield WaitForSeconds (1);
	EOL = true;
	i++;
	}
}
