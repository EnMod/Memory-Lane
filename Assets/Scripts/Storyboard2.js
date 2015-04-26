#pragma strict
var itsyou : AudioClip;
var remain : AudioClip;
var sugar : AudioClip;
var worse : AudioClip;
var task : AudioClip;
var luck : AudioClip;
var the : AudioClip;
static var EOL : boolean = false;


var welcome : GameObject;
var trythison : GameObject;
var hesintrouble : GameObject;
var toldyou : GameObject;
var yourtask : GameObject;
var goodluck : GameObject;
var sec1 : GameObject;
var sec2 : GameObject;
var sec3 : GameObject;
var end : GameObject;

function Start () {
	welcome.renderer.enabled = true;
	trythison.renderer.enabled = false;
	hesintrouble.renderer.enabled = false;
	toldyou.renderer.enabled = false;
	yourtask.renderer.enabled = false;
	goodluck.renderer.enabled = false;
	sec1.renderer.enabled = false;
	sec2.renderer.enabled = false;
	sec3.renderer.enabled = false;
	end.renderer.enabled = false;
Muzak();
//audio.Play();
}

function Update() {

}

function Muzak () {
	for (var i = 0; i < 1; i++) {
	AudioSource.PlayClipAtPoint(itsyou, transform.position, 0.7f);
		yield WaitForSeconds (itsyou.length);
			welcome.renderer.enabled = false;
			trythison.renderer.enabled = true;
			

	AudioSource.PlayClipAtPoint(remain, transform.position);
	yield WaitForSeconds (remain.length);
	yield WaitForSeconds (1.7);
			trythison.renderer.enabled = false;
			hesintrouble.renderer.enabled = true;
			
			
	AudioSource.PlayClipAtPoint(sugar, transform.position);
	yield WaitForSeconds (sugar.length);
	yield WaitForSeconds (1.7);
			hesintrouble.renderer.enabled = false;
			toldyou.renderer.enabled = true;
			
			
	AudioSource.PlayClipAtPoint(worse, transform.position);
	yield WaitForSeconds (worse.length);
	yield WaitForSeconds (1.7);
			toldyou.renderer.enabled = false;
			yourtask.renderer.enabled = true;
			
			
	AudioSource.PlayClipAtPoint(task, transform.position);
	yield WaitForSeconds (3);
			yourtask.renderer.enabled = false;
			goodluck.renderer.enabled = true;
	yield WaitForSeconds (7);
			goodluck.renderer.enabled = false;
			sec1.renderer.enabled = true;
	yield WaitForSeconds (4);
			sec1.renderer.enabled = false;
			sec2.renderer.enabled = true;
	yield WaitForSeconds (5);
			sec2.renderer.enabled = false;
			sec3.renderer.enabled = true;
	AudioSource.PlayClipAtPoint(luck, transform.position);
	yield WaitForSeconds (luck.length);
	yield WaitForSeconds (0.7);
		sec3.renderer.enabled = false;
			end.renderer.enabled = true;
	AudioSource.PlayClipAtPoint(the, transform.position);
	yield WaitForSeconds (the.length);
	yield WaitForSeconds (1);
	EOL = true;
	i++;
	}
}
