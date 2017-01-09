function check(stime, wh, d, p, callback){
  var meta = MetaCoin.deployed();
  // var addr = "null";
  var l = 1;
  meta.check.call(d, l, {from: account}).then(function(value) {
    value = value.toNumber();
    console.log("HERE")
     console.log(value)
    if (value == 0){
      console.log("can deploy")
      createSellOrder(stime, wh, d, p)
      callback(null)
    }
    else {
      console.log("alert users")
      callback ("invalid")
    }
 }).catch(function(e) {
   console.log(e);
   // There was an error! Handle it.
 });
}

function createSellOrder(stime, wh, d, p){
   var meta = MetaCoin.deployed();
   // var addr = "null";
   meta.createSellOrder( stime, wh, d , p*100, {from: account, gas: 1550000}
).then(function(code, instance) {
     console.log("HERE")
  		console.log(wh)
  		console.log(d)
  		console.log(instance)
      console.log(code)
  }).catch(function(e) {
  	console.log(e);
    // There was an error! Handle it.
  });
}


function htmlSellOrder(){
	var params =getJsonFromUrl();

  var status = document.getElementById("sellorderstatus");
	var stime = document.getElementById("stime");
	var wh = document.getElementById("wh");
	var d = document.getElementById("d");
	var p = document.getElementById("p");

	// console.log(stime)
	// var cstime = stime.valueAsNumber;
	// console.log(cstime)
	// console.log(new Date(stime.valueAsNumber))


  status.innerHTML = 'Sell Order Complete';
	stime.innerHTML = params['stime'];
	wh.innerHTML = params['wh'];
	d.innerHTML = params['d'];
	p.innerHTML = params['p'];
}

function htmlSellOrder2(){
	var params =getJsonFromUrl();

  var status = document.getElementById("sellorderstatus");
	var stime = document.getElementById("stime");
	var wh = document.getElementById("wh");
	var d = document.getElementById("d");
	var p = document.getElementById("p");

  status.innerHTML = 'Sell Order Failed, Duration Exceeds 1 hr';
  stime.innerHTML = params['stime'];
  wh.innerHTML = params['wh'];
  d.innerHTML = params['d'];
  p.innerHTML = params['p'];

	// console.log(stime)
	// var cstime = stime.valueAsNumber;
	// console.log(cstime)
	// console.log(new Date(stime.valueAsNumber))

}

function backHome(){
	var params =getJsonFromUrl();
	post('/surge.html', {uname: params['uname']}, "get");
}
