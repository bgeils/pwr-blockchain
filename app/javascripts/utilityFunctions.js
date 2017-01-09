function toggle_visibility(id){
	this.__toggle = !this.__toggle;
    var target = document.getElementById(id);
    if( this.__toggle) {
        target.style.height = target.scrollHeight+"px";
    }
    else {
        target.style.height = 0;
    }
}