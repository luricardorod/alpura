var Sprite0 : Sprite;
var Sprite1 : Sprite;
var Sprite2 : Sprite;
var Sprite3 : Sprite;
var Sprite4 : Sprite;
var Sprite5 : Sprite;
var Sprite6 : Sprite;
var Sprite7 : Sprite;
var Sprite8 : Sprite;
var Sprite9 : Sprite;
var time : float = .5;

private var flag = true;
function Start () {
    
}

function Update () {
	if (flag) {
		if (Input.GetKeyUp (KeyCode.Keypad1) || Input.GetKeyUp (KeyCode.Alpha1)) {
			GetComponent(SpriteRenderer).sprite = Sprite1;
			backCenterPosition();
	    //transform.localScale = new Vector3(.309, .309, .309);
		}
		if (Input.GetKeyUp (KeyCode.Keypad2) || Input.GetKeyUp (KeyCode.Alpha2)) {
			GetComponent(SpriteRenderer).sprite = Sprite2;
			backCenterPosition();
	    transform.localScale = new Vector3(.85, .85, .85);
	    transform.localPosition = new Vector3(-.15, -.5, 0);
		}
		if (Input.GetKeyUp (KeyCode.Keypad3) || Input.GetKeyUp (KeyCode.Alpha3)) {
			GetComponent(SpriteRenderer).sprite = Sprite3;
			backCenterPosition();
	    transform.localScale = new Vector3(.79, .79, .79);
	    transform.localPosition = new Vector3(-.63, -1.19, 0);
		}
		if (Input.GetKeyUp (KeyCode.Keypad4) || Input.GetKeyUp (KeyCode.Alpha4)) {
			GetComponent(SpriteRenderer).sprite = Sprite4;
			backCenterPosition();
	    //transform.localScale = new Vector3(.309, .309, .309);
		}
		if (Input.GetKeyUp (KeyCode.Keypad5) || Input.GetKeyUp (KeyCode.Alpha5)) {
			GetComponent(SpriteRenderer).sprite = Sprite5;
			backCenterPosition();
	    //transform.localScale = new Vector3(.309, .309, .309);
		}
		if (Input.GetKeyUp (KeyCode.Keypad6) || Input.GetKeyUp (KeyCode.Alpha6)) {
			GetComponent(SpriteRenderer).sprite = Sprite6;
			backCenterPosition();
	    transform.localScale = new Vector3(.29, .29, .309);
		}
		if (Input.GetKeyUp (KeyCode.Keypad7) || Input.GetKeyUp (KeyCode.Alpha7)) {
			GetComponent(SpriteRenderer).sprite = Sprite7;
			backCenterPosition();
	    transform.localScale = new Vector3(.25, .25, .309);
		}
		if (Input.GetKeyUp (KeyCode.Keypad8) || Input.GetKeyUp (KeyCode.Alpha8)) {
			GetComponent(SpriteRenderer).sprite = Sprite8;
			backCenterPosition();
	    //transform.localScale = new Vector3(.309, .309, .309);
		}
		if (Input.GetKeyUp (KeyCode.Keypad9) || Input.GetKeyUp (KeyCode.Alpha9)) {
			GetComponent(SpriteRenderer).sprite = Sprite9;
			backCenterPosition();
	    transform.localScale = new Vector3(.25, .25, .309);
	    transform.localPosition = new Vector3(0, .5, 0);
		}
	};
}

function backCenterPosition () {
	flag = false;
	yield WaitForSeconds (time);
	GetComponent(SpriteRenderer).sprite = Sprite0;
	transform.localScale = new Vector3(1, 1, 1);
	transform.localPosition = new Vector3(0, 0, 0);
	flag = true;
}