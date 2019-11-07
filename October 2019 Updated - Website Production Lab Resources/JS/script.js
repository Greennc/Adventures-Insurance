// JavaScript source code

// function Check() {
//         var chkPassport = document.getElementById("chkPassport");
//         var chkPassport2 = document.getElementById("chkPassport2");
//         if (chkPassport.checked == true || chkPassport2.checked  == true) {
//
//           alert("Thank you, you will be contacted by")
//           return true;
//
//         } else {
//             alert("Please choose a method of contact.")
//             return false;
//         }
//     }


var button = document.getElementById("scbutton");
var div = document.getElementById("showstate")
var States = {
    "Insurance": [
        {
            "Name": "General Liability",
            "State": "South Carolina",
            "discount": "20%"
        },

        {
            "Name": "Worker's Compensation",
            "State": "Georgia",
            "discount": "15%"
        },

        {
            "Name": "Fire,Theft,Property",
            "State": "Connecticut",
            "discount": "8%"
        },
        {
            "Name": "Inland Marine",
            "State": "Connecticut",
            "discount": "12%"
        }
    ]
};

var statelength = States.Insurance.length;
function loopStates() {

    for (i = 0; i < statelength; i++) {
        alert("Lines of Buisness : " + States.Insurance[i].Name + "\n" + "State : " + States.Insurance[i].State + "\n" +
            "Discount  : " + States.Insurance[i].discount)
    }
};
button.addEventListener("click", loopStates, false);
