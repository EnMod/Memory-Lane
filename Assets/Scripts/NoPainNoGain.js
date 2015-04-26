#pragma strict


var thanks : AudioClip;
var getit : AudioClip;
var stay : AudioClip;
var done : AudioClip;
var DoneHealing : boolean = false;
static var EOL : boolean = false;
var cantDoAgain : boolean = false;
//var canExit : boolean = false;
/*
if (inPain == false) {
	AudioSource.PlayClipAtPoint(jets, transform.position);
}
*/



function OnTriggerEnter (other : Collider) {
if (DoneHealing == false && cantDoAgain == false) {
	cantDoAgain = true;
	AudioSource.PlayClipAtPoint(getit, transform.position, 0.7f);
	yield WaitForSeconds (3);
	AudioSource.PlayClipAtPoint(stay, transform.position, 0.7f);
	yield WaitForSeconds (2);
	AudioSource.PlayClipAtPoint(done, transform.position, 0.7f);
	yield WaitForSeconds (done.length);
	DoneHealing = true;
	}
	//canExit = true;
}

function OnTriggerExit (other : Collider) {

	if (DoneHealing == true && cantDoAgain == true) {
	DoneHealing = false;
	yield WaitForSeconds (1);
	AudioSource.PlayClipAtPoint(thanks, transform.position, 0.7f);
	yield WaitForSeconds (thanks.length);
	
	EOL = true;
	}
}

