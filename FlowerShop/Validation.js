
function validateForm() {
    var cardNumber = document.myForm.cardNumber.value;
    var securityCode = document.myForm.securityCode.value;
    var expiryDate = document.myForm.expiry.value;
    var name = document.myForm.name.value;
    var address = document.myForm.address.value;
    var city = document.myForm.city.value;
    var postCode = document.myForm.PostCode.value;
    var country = document.myForm.country.value;
    var telephone = document.myForm.Telephone.value;
    var fax = document.myForm.Fax.value;
    var email = document.myForm.Email.value;
    var status = true;
    if (cardNumber == "") {
        document.getElementById("txtCardNumber").innerHTML = "Please Enter a card number";
        status = false;
    }
    else {
        var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if (!cardNumber.match(regex)) {
            document.getElementById("txtCardNumber").innerHTML = "Please Enter a valid card number";
            status = false;
        } else {
            document.getElementById("txtCardNumber").innerHTML = "";
            
        }
    }
    if (securityCode == "") {
        document.getElementById("txtSecurityCode").innerHTML = "Please Enter a security code";
        status = false;
    }
    else {
        var regex = /[0-9]{3}/;
        if (!securityCode.match(regex)) {
            document.getElementById("txtSecurityCode").innerHTML = "Please Enter a valid security code";
            status = false;
        } else {
            document.getElementById("txtSecurityCode").innerHTML = "";
            
        }
    }
    if (expiryDate == "") {
        document.getElementById("txtExpiry").innerHTML = "Please Select a date";
        status = false;
    }
    else {
        document.getElementById("txtExpiry").innerHTML = "";
    }
    if (name == "") {
        document.getElementById("txtName").innerHTML = "Please Enter a Name";
        status = false;
    }
    else {
        var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (!name.match(regex)) {
            document.getElementById("txtName").innerHTML = "Please Enter a valid Name";
            status = false;
        } else {
            document.getElementById("txtName").innerHTML = "";
           
        }
    }
    if (address == "") {
        document.getElementById("txtAddress").innerHTML = "Please Enter a Address";
        status = false;
    }
    else {
        var regex = /^[a-zA-Z0-9\s,'-]*$/;
        if (!address.match(regex)) {
            document.getElementById("txtAddress").innerHTML = "Please Enter a valid Address";
            status = false;
        } else {
            document.getElementById("txtAddress").innerHTML = "";
            
        }
    }
    if (city == "") {
        document.getElementById("txtCity").innerHTML = "Please Enter a City";
        status = false;
    }
    else {
        var regex = /^[a-zA-Z]*$/;
        if (!city.match(regex)) {
            document.getElementById("txtCity").innerHTML = "Please Enter a valid City";
            status = false;
        } else {
            document.getElementById("txtCity").innerHTML = "";
            
        }
    }
    if (postCode == "") {
        document.getElementById("txtPostCode").innerHTML = "Please Enter a Post code";
        status = false;
    }
    else {
        var regex = /[0-9]{6}/;
        if (!postCode.match(regex)) {
            document.getElementById("txtPostCode").innerHTML = "Please Enter a valid Post code";
            status = false;
        } else {
            document.getElementById("txtPostCode").innerHTML = "";
            
        }
    }
    if (country == "") {
        document.getElementById("txtCountry").innerHTML = "Please select a country";
        status = false;
    } else {
        document.getElementById("txtCountry").innerHTML = "";
    }
    if (!telephone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)) {
        document.getElementById("txtTelephone").innerHTML = "Please Enter a valid Telephone number";
        status = false;
    } else {
        document.getElementById("txtTelephone").innerHTML = "";    
    }
    if (fax == "") {
        document.getElementById("txtFax").innerHTML = "";
    }
    else {
        if (!fax.match(/^\+?[0-9]{6,}$/)) {
            document.getElementById("txtFax").innerHTML = "Please Enter a valid Fax";
            status = false;
        }
        else {
            document.getElementById("txtFax").innerHTML = "";
        }
    }
    if (email == "") {
        document.getElementById("txtEmail").innerHTML = "Please Enter a Email id";
        status = false;
    } else {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(regex)) {
            document.getElementById("txtEmail").innerHTML = "Please Enter a valid Email id";
            status = false;
        } else {
            document.getElementById("txtEmail").innerHTML = "";
        }
    }
}




