#pragma strict

var speed : int = 100;
var damage : float = 50;
var target : Collider;
var firedBy : String;

function Start () {
	Debug.DrawLine(transform.position, target.transform.position, Color.red, 10, false);
	Debug.DrawRay(transform.position, target.transform.position - transform.position, Color.green, 10, false);

}

function Update () {
	transform.LookAt(target.transform);
	var dir = target.transform.position - transform.position;
	var thing = transform.TransformDirection(dir);
	//print(dir);print(thing);print(target.transform.position);print(transform.position);
	transform.Translate(thing);
}

/*function OnCollisionEnter(info: Collision){
	Debug.Log("Colided");
	//if(info.gameObject.name != firedBy){
		Destroy(this.gameObject);
		info.gameObject.networkView.RPC("takeDamage", RPCMode.AllBuffered, damage); //.currentHealth -= damage;
	//}
}*/
function OnTriggerEnter(info: Collider){
	Debug.Log("Colided");
	if(info.gameObject.name == target.name){
		Destroy(this.gameObject);
		info.gameObject.networkView.RPC("takeDamage", RPCMode.AllBuffered, damage); //.currentHealth -= damage;
	}
}
