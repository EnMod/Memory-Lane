#pragma strict

//var soldier : Transform;
var jet : Transform;
var rotation = Quaternion.identity;
    // Assign a rotation 30 degrees around the y axis
    
//var anim : int;
function Start () {
SoldierSpawn();
}
function Update () {
rotation.eulerAngles = Vector3(0, Random.Range(0,360),0);
}

/*
//function to spawn soldiers
function SoldierSpawn () {
//for a max of 5000 times...
	for (var i = 0; i < 5000; i++) {
	//spawn at random x, y, and z coordinates
		Instantiate(soldier, 
			Vector3(Random.Range(minimum.x,maximum.x),
    	            Random.Range(minimum.y,maximum.y),
    	            Random.Range(minimum.z,maximum.z)),
			        Quaternion.LookRotation(center));
		//pick a number between 1 and 3 (0 and 2 for comps)
		anim = Random.Range(0, 2);
		
		//choose an animation according to the number...   
		if (anim == 0) {
			//then play it...
			animation.Play("hit");
			//and wait for it to finish...
			yield WaitForSeconds (animation["hit"].clip.length);
			//before destroying the object
			Destroy(gameObject);
		}
		else if (anim == 1) {
			animation.Play("run");
			yield WaitForSeconds (animation["run"].clip.length);
			Destroy(gameObject);
		}
		else if (anim == 2) {
			animation.Play("shoot");
			yield WaitForSeconds (animation["shoot"].clip.length);
			Destroy(gameObject);
		}
		yield WaitForSeconds (Random.Range(1, 4));
		i++;
	}
}
*/

//function to spawn jets
function SoldierSpawn () {

	for (var i = 0; i < 5000; i++) {
		
		Instantiate(jet,
		
			Vector3(Random.Range(35,200),35,Random.Range(35,200)),rotation);
		yield WaitForSeconds (Random.Range(1, 4));
		i++;
	}
}