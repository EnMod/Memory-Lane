#pragma strict
static var talking : boolean = false;
var talkbox : Transform;
var speak : boolean = false;


function OnTriggerEnter (other : Collider) {
talking = true;
yield WaitForSeconds (1);
talking = false; 
speak = true;
if (speak == true) {
	Instantiate(talkbox, transform.position, Quaternion.identity);
	speak = false;
	}
}


