///* To Disable Inspect Element */
//$(document).bind("contextmenu", function (e) {
//    e.preventDefault();
//});

//$(document).keydown(function (e) {
//    if (e.which === 123) {
//        return false;
//    }
//});



function blockSpecialChar(e) {
    debugger;
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 45 || k == 47 || k == 32 || (k >= 48 && k <= 57));
}



function ToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}

$(function () {
    checkNumeric();
    checkAlphaNumeric();
    checkAlpha();
    checkAlphaNumericAndSomeSpecialChar();
    checkOnlyNumeric();

    checkAlphaNumericNew();

    checkNumericwithDot();

});




function checkAlphaNumericNew() {
    $('.checkAlphaNumericNew').bind("keypress", function (e) {
        var pattern = /^[a-z\d\-_\s]+$/i;
        //Validating the textBox value against our regex pattern.
        var isValid = pattern.test(String.fromCharCode(e.charCode));
        if (!isValid) {
            e.preventDefault();
        }
    });


}

function checkAlphaNumeric() {
    $('.alphaNumeric').bind("keypress", function (e) {
        ddebugger;
        if (e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.charCode;
            if (!((key == 0) || (key == 8) || (key == 32)
                || (key >= 65 && key <= 90) || (key >= 97 && key <= 122)
                || (key >= 48 && key <= 57)     // Numbers with secial characters
                || (key >= 96 && key <= 105)    // Numbers from number pad
                || (key == 45)                  // "-" (subtract) sign
                || (key == 95)                  // "-" (subtract) sign
                )) {
                e.preventDefault();
            }
        }
    });


}


function ValidateEmail() {
    debugger;
    var email = $('#txtEmailId').val();
    // var lblError = $('#lblError');
    //lblError.innerHTML = "";
    $('#lblError').val('');
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        // lblError.innerText = "Invalid email address.";
        $('#lblError').val('Invalid email address.');

    }
}


function checkAlpha() {
    $('.alpha').bind("keypress", function (e) {
        //debugger;
        if (e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.charCode;
            if (!((key == 0) || (key == 8) || (key == 32)
                || (key >= 65 && key <= 90) || (key >= 97 && key <= 122)
                   )) {
                e.preventDefault();
            }

        }
    });


}
function checkAlphaNumericAndSomeSpecialChar() {
    $('.alphaNumericSpecialChar').bind("keypress", function (e) {
        debugger;
        if (e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.charCode;
            if (!((key == 0) || (key == 8) || (key == 32)
                || (key >= 65 && key <= 90) || (key >= 97 && key <= 122)
                || (key >= 48 && key <= 57)     // Numbers with secial characters
                || (key >= 96 && key <= 105)    // Numbers from number pad
                || (key == 45)                  // "-" (subtract) sign
                || (key == 47)                  // "/" (forward slash) sign
                 || (key == 46)                  // "." (Dot) sign
                )) {
                e.preventDefault();
            }
        }
    });
    $(".alphaNumericSpecialChar").bind("paste", function (e) {
        return false;
    });

}
function checkNumeric() {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    specialKeys.push(46);
    $(".numeric").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
        var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
        //|| keyCode == 65 || keyCode == 85                           //|| keyCode == 67
        //|| keyCode == 97 || keyCode == 117);                          //|| keyCode == 99);
        $(".error").css("display", ret ? "none" : "inline");
        return ret;
    });
    $(".numeric").bind("paste", function (e) {
        return false;
    });
}

function checkNumericwithDot() {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    specialKeys.push(46);
    $(".numericwithdot").bind("keypress", function (e) {
        debugger;
        var keyCode = e.which ? e.which : e.keyCode
        var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
        //|| keyCode == 65 || keyCode == 85                           //|| keyCode == 67
        //|| keyCode == 97 || keyCode == 117);                          //|| keyCode == 99);
        $(".error").css("display", ret ? "none" : "inline");
        return ret;
    });
    $(".numericwithdot").bind("paste", function (e) {
        return false;
    });
}



function checkOnlyNumeric() {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    // specialKeys.push(46);   // "." (Dot) sign
    $(".numericOnly").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
        var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
        //|| keyCode == 65 || keyCode == 85                           //|| keyCode == 67
        //|| keyCode == 97 || keyCode == 117);                          //|| keyCode == 99);
        $(".error").css("display", ret ? "none" : "inline");
        return ret;
    });
    //$(".numeric").bind("paste", function (e) {
    //    return false;
    //});
}


function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}