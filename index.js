function calcLoan() {
	var amount = Number(document.getElementById('amount').value);
	var rate = Number(document.getElementById('rate').value);
	var time = Number(document.getElementById('time').value);
	var result = (amount*rate*time) / 100;
	document.getElementById("loan_result").innerHTML = "You are to pay " + "NGN " + result.toFixed(2) + " by the end of " + time + " years.";
}