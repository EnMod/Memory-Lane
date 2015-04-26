#pragma strict

//var soldier : Transform;
var poly : Transform;
var poly2 : Transform;
var rotation = Quaternion.identity;
    // Assign a rotation 30 degrees around the y axis
    
//var anim : int;
function Start () {
SoldierSpawn();
}
function Update () {
rotation.eulerAngles = Vector3(0, Random.Range(0,360),0);
}


//function to spawn jets
function SoldierSpawn () {

	for (var i = 0; i < 5000; i++) {
		
		Instantiate(poly,
			Vector3(Random.Range(120,200),0.25,Random.Range(150,200)),rotation);
		yield WaitForSeconds (Random.Range(0.5, 1));
		Instantiate(poly2,
			Vector3(Random.Range(120,200),0.25,Random.Range(150,200)),rotation);
		yield WaitForSeconds (Random.Range(0.5, 1));
		i++;
	}
}