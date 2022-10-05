function palindrome() {
	let inpt = document.getElementById("input").value;
	let charArr = inpt.toString().split("");

	for (let c of charArr) {
		if (c !== charArr.pop()) {
			let para = document.getElementById("result");
			para.innerHTML = "No! It's not a palindrome";
			return false;
		} else {
			let para = document.getElementById("result");
			para.innerHTML = "Yes! It's a palindrome";
			return true;
		}
	}

	let btn = document.querySelector("#btn");
	btn.style.transform = "translateY(4px)";

	setTimeout(() => {
		// let btn = document.querySelector("#btn");
		btn.style.transform = "none";
	}, 1);
}
