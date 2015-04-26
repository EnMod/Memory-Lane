var target : GameObject;

function OnMouseDown() {
	target.GetComponent(iTweenEvent).Play();
	
	// alternatively you could find this object some other way, using GameObject.Find for example
}
