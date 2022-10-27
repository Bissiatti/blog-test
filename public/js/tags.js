class Sections{
	constructor(tag_name,document_id){
		const someValue = this;
		this.name = document.createTextNode(tag_name);
		this.button = this.createButton.bind(someValue);
		this.html = document.getElementById(document_id);
		this.html.appendChild(this.button());
	}
	
	createButton(){
		const button = document.createElement('button');
		button.appendChild(this.name);
		button.addEventListener('click', function(e){
			console.log(e);
		});
		button.classList.add('sections');
		console.log(typeof(button))
		return button;
	}
	
}

// hightTags = ["Home","Educação","Empregos","Pesquisa","Brasil","Mundo"]

// for (let i=0; i < hightTags.length; i++){
// 	let section = new Sections(hightTags[i],"sections-buttons");
// }