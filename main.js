var form1 = [
  { type: 'text', label: 'Name' },
  { type: 'email', label: 'Email' },
  { type: 'password', label: 'Password' },
  { type: 'submit', label: 'Register'}
];


var registForm = $("#registrationForm");

var nameField,
    emailField,
    passwordField,
    submitField,
    formHolder;

nameField = '<label>' + form1[0].label  + '</label><input type="' + form1[0].type + '">';
emailField = '<label>' + form1[1].label + '</label><input type="' + form1[1].type + '">';
passwordField = '<label>' + form1[2].label + '</label><input type="' + form1[2].type + '">';
submitField = '<label>' + form1[3].label + '</label><input type="' + form1[3].type + '">';
formHolder = nameField + '<br><br>' + emailField + '<br><br>' + passwordField + '<br><br>' + submitField;

registForm.append(formHolder);


//Tim's solution

/*function formBuilder(data) {
  var formHTML = '<form>';

  data.forEach (function (elem) {

    if (elem.type === 'submit') {
      formHTML += '<input type="' + elem.type + '"value="' + elem.label + '" />';

    } else {
      formHTML += '<label>' + elem.label + '</label>';
      formHTML += '<input type="' + elem.type + '" />';
      formHTML += '<br><br>'
    }

  });
  formHTML += '</form>';

  $('#registrationForm').html(formHTML);
}

formBuilder(form1);*/
