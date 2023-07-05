content = document.getElementById("content");

function find_comments(){
	const comments = document.getElementById("sections");	
	const list = comments.getElementsByTagName("ytd-comment-thread-renderer");
	for (var i=0, item; item = list.item(i); i++) {	
		const author_text = item.querySelector("#author-text");
		//console.log(author_text);
		let str = author_text.firstElementChild.innerHTML;
		while (str.charAt(0) == "@" | str.charCodeAt(0) <= 32){
			str = str.substring(1);
		}
		author_text.firstElementChild.innerHTML = str;
		//console.log(str)
		//console.log(str.charCodeAt(0));
	}
	if (i == 0){
		console.log("no element found");
	}
	//document.getElementById("content").removeEventListener("click", find_comments);
}

content.addEventListener("click", find_comments);
console.log("loaded successfully");
