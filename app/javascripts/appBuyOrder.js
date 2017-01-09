function attemptBuy(){
	var params = getJsonFromUrl();
	orderid = params['orderid'];
	console.log(orderid);

	document.getElementById("order-num").innerHTML = orderid;

	returnOrderDetails(orderid);
}

function returnOrderDetails(address){
	var sell = SellOrder.at(address);

  inter(sell, address, false);
}

function buyOrderBuilder(z, a, b, c, k){
	var stime = document.getElementById("stime");
  	stime.innerHTML = a;

  	var wh = document.getElementById("wh");
  	wh.innerHTML = b;

  	var d = document.getElementById("d");
  	d.innerHTML = c;

  	var p = document.getElementById("p");
  	p.innerHTML = k/100;

  	document.getElementById("wattHours").value = b;
  	//document.getElementById("duration").value = c;

}

function submitPurchase(){
	console.log("submitted purchase")

	var params = getJsonFromUrl();
	orderid = params['orderid'];

	var sell = SellOrder.at(orderid);
	var amount = parseInt(document.getElementById("wattHours").value);
	sell.addBuyer(amount, 1, {from: account, gas: 1550000}).then(function(value) {
	    console.log(value)
			htmlBuyOrder()
	}).catch(function(e) {
		console.log(e);
	});

}

function htmlBuyOrder(){
	var params =getJsonFromUrl();

  var status = document.getElementById("buystatus");
	document.getElementById("wattHours").html()
	// console.log(stime)
	// var cstime = stime.valueAsNumber;
	// console.log(cstime)
	// console.log(new Date(stime.valueAsNumber))


  status.innerHTML = 'Buy Order Complete';

}
