function validateForm(event) {
    event.preventDefault();
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var enquiryCategory = document.querySelectorAll('input[name="enquiry-category[]"]:checked');
    var detailedEnquiry = document.getElementById("detailed-enquiry").value;

    if (fullName == "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    if (course == "") {
        alert("Please select a course.");
        return false;
    }

    if (enquiryCategory.length == 0) {
        alert("Please select at least one category of enquiry.");
        return false;
    }

    // Open a new window to show the confirmation message
    var confirmationWindow = window.open("", "Confirmation", "width=500,height=400");
    confirmationWindow.document.write("<h3>Congratulations...!!!</h3>");
    confirmationWindow.document.write("<p><strong>Name:</strong> " + fullName + "</p>");
    confirmationWindow.document.write("<p><strong>Email:</strong> " + email + "</p>");
    confirmationWindow.document.write("<p><strong>Selected Program:</strong> " + course + "</p>");
    confirmationWindow.document.write("<p><strong>Detailed Enquiry:</strong> " + detailedEnquiry + "</p>");
    confirmationWindow.document.close();

    return true;
}
