#pragma strict


function Start () {
	animation.Play("stay");
	
}

function Update () {
	AnimationSeq();

}

function AnimationSeq () {

	if (TriggerTalk.talking == true) {
		yield WaitForSeconds (animation["stay"].clip.length);
		animation.Stop("stay");
		animation.Play("look");
		yield WaitForSeconds (animation["look"].clip.length);
		animation.Stop("look");
		animation.Play("locked");
	}	
	
	}



/*
if (inPain == false) {
	AudioSource.PlayClipAtPoint(jets, transform.position);
}
}

function OnTriggerEnter () {
	change the effect somehow of when you are healing;
}
*/

