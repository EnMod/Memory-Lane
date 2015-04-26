#pragma strict



function Start () {
FadeOut();
}

function Update () {

}
function FadeOut () {

yield WaitForSeconds (5); 
Destroy(this.gameObject);
}