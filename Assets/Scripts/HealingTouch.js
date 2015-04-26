#pragma strict


var donepat : AudioClip;
var getitpat : AudioClip;
var staypat : AudioClip;
var evac : AudioClip;
var cantDoAgain : boolean = false;
static var EOL : boolean = false;
var DoneHealing : boolean = false;
var target : Transform;


function Start () {

}

function Update () {

}

/*
if (inPain == false) {
	AudioSource.PlayClipAtPoint(jets, transform.position);
}
*/



function OnTriggerEnter (other : Collider) {
if (DoneHealing == false && cantDoAgain == false) {
	cantDoAgain = true;
	AudioSource.PlayClipAtPoint(getitpat, transform.position);
	yield WaitForSeconds (3);
	AudioSource.PlayClipAtPoint(staypat, transform.position);
	yield WaitForSeconds (2);
	AudioSource.PlayClipAtPoint(donepat, transform.position);
	DoneHealing = true;
	}
}

function OnTriggerExit (other : Collider) {
if (DoneHealing == true && cantDoAgain == true) {
	DoneHealing = false;
	iTween.LookTo(GameObject.Find("Reg"), {"time":2,"looktarget":target});
	AudioSource.PlayClipAtPoint(evac, transform.position);
	yield WaitForSeconds (evac.length);
	EOL = true;
	}
}

