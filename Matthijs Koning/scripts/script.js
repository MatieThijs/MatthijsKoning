function validateForm() {
    let x = document.forms["fname"]["lname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }