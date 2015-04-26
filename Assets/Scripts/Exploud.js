#pragma strict

var explosion : Transform;

// When a collision happens destroy ourselves
// and spawn an explosion prefab instead
function OnCollisionEnter () {
    Destroy (gameObject);

    var theClonedExplosion : Transform;
    theClonedExplosion = Instantiate(explosion,
            transform.position, transform.rotation);
}