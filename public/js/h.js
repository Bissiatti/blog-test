class h_main{
	constructor(){
		this.hightTags = ["Home","Educação","Empregos","Ciência","Brasil","Mundo"];

		for (let i=0; i < this.hightTags.length; i++){
			let section = new Sections(this.hightTags[i],"sections-buttons");
		}
	}
}

const m = new h_main();