var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
document.getElementById("p1_fullName").innerHTML = firstName + " " + lastName;
var bothFields;
if (firstName.length >0 && lastName.length >0) {bothFields="Yes";
} else {bothFields="No";
};
document.getElementById("p1_valid").innerHTML = bothFields
document.getElementById("p1_fullNameLength").innerHTML = firstName.length + lastName.length;
/*  ### Email Address
Set the following element's innerHTML with the following values

- `p2_email` - put the value of `emailAddress` here
- `p2_valid` - does `emailAddress` contain the "@" symbol? (boolean value)
- `p2_emailLength` - the number of characters in `emailAddress`*/
    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
document.getElementById("p2_email").innerHTML = emailAddress;
var emailAddressCheck;
if (emailAddress.charAt("@")> -1) {emailAddressCheck="Yes";
} else {emailAddressCheck="No";
};
document.getElementById("p2_valid").innerHTML = emailAddressCheck;
document.getElementById("p2_emailLength").innerHTML = emailAddress.length;

/*  ### Email Address
### Numbers
Set the following element's innerHTML with the following values
- `p3_number` - put `randomNumber`'s value here
- `p3_valid` - is `randomNumber` a number? Set the value to true if it is a number. Set it to false if it is a string.`*/

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
document.getElementById("p3_number").innerHTML = randomNumber;
var x;
if (isNaN (randomNumber))
{x = false;
} else {x = true;
};
document.getElementById("p3_valid").innerHTML = x;

    // Part 4
/*### Arrays
- Add the value of `arrayInput` to the array named `arrayItems`. `arrayItems is declared on the first line of the file.
- `p4_arraylength` - the number of items in `arrayItems`
- `p4_valid` - the value of `arrayItems`*/

    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
arrayItems.push(arrayInput);
document.getElementById("p4_arraylength").innerHTML = arrayItems.push("arrayInput");
document.getElementById("p4_valid").innerHTML = arrayItems;











    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
