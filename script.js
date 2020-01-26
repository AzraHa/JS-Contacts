function addContact(){
	var contactName = document.getElementById('contact-name');
	var contactPhone = document.getElementById('contact-phone');
	var contactMail = document.getElementById('contact-mail');

	if(contactName.value === '' || contactPhone.value === '' || contactMail.value === ''){
		alert('All fields must be filled!');
	}
	else{
		createContact(contactName.value,contactPhone.value,contactMail.value);
		
	}
}

function createContact(name,phone,mail){
	var contact = document.createElement('div');

	var contact_name = document.createElement('h5');
	contact_name.innerHTML = name;

	var contact_phone = document.createElement('p');
	contact_phone.innerHTML = 'Phone:' + phone;

	var contact_mail = document.createElement('p');
	contact_mail.innerHTML = 'Email:' + mail;	

	contact.appendChild(contact_name);
	contact.appendChild(contact_phone);
	contact.appendChild(contact_mail);


	var contactContainer = document.getElementById('contact-container');
	contactContainer.appendChild(contact);
}

function deleteAllContacts(){
	var contactContainer = document.getElementById('contact-container');
	contactContainer.innerHTML = '';
}