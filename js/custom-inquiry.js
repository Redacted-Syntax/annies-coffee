console.log("Custom Inquiry JS Loaded");

let inquiryForm = document.getElementById("inquiry-form");
let thankYouDiv = document.getElementById("thank-you-message");

inquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(inquiryForm);
  let formObject = Object.fromEntries(formData);

  console.log(formObject);

  let name = formObject.name;
  let email = formObject.email;
  let phone = formObject.phone;
  let flavor = formObject.flavor;
  let interest = formObject.interest;
  let comments = formObject.comments;

    let message = `Thank you ${name}! We appreciate your interest in ${interest}.
   Your favorite coffee flavor is ${flavor} and your comments are ${comments}. 
   
   We will soon contact you at ${email} or ${phone}.`;

  thankYouDiv.textContent = message;

  // BONUS: Hide the form
  inquiryForm.style.display = "none";
});
