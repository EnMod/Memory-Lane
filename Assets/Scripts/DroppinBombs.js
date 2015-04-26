#pragma strict

var bombs : Transform;
var speed : float = 5.0;
var bombing : boolean = false;
var rotation = Quaternion.identity;

function Start () {
BombRun();
rotation.eulerAngles = Vector3(0,0,180);
}

function Update () {
//make the jet move forward
	transform.Translate(Vector3(0,0,-60) * Time.deltaTime);
	if (bombing == true) {
	Destroy (this.gameObject);
	}
}
//drop bombs
function BombRun () {
//idk why this isn't happening every second, whatever :/
	for (var i = 0; i < 10; i++) {
	//make a bomb at the center of what this is attached to
	Instantiate (bombs, transform.position, rotation);
	yield WaitForSeconds (0.5);
	i++;
	}
	yield WaitForSeconds (Random.Range(0.8,1));
	bombing = true;
}