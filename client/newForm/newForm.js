Template.newForm.events({
	'submit form': (event,template) =>{

	event.preventDefault();

	let firstname = template.find("#firstName").value;
	let lastname = template.find("#lastName").value;
	let quote = template.find("#qoute").value;
	let gender =template.find("#gender").value;
	let githublink =template.find("#githublink").value;

	console.log(firstName);
	}
});