/* To Disable Inspect Element */
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
/* To Disable F12 */
//document.onkeydown = function (e) {
//    if (event.keyCode == 123) {
//        return false;
//    }
//    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//        return false;
//    }
//    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//        return false;
//    }
//    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//        return false;
//    }
//    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//        return false;
//    }
//}


/* HOW TO USER AES ENCRYPTION ON CLIENT SIDE */
//$scope.source_string = 'Satyendra';
//console.log('source String = ' + $scope.source_string);
//var encrypted = CryptoJS.AES.encrypt(
//    $scope.source_string,
//    $rootScope.base64Key,
//    { iv: $rootScope.iv });
//console.log('encrypted = ' + encrypted);

//$scope.ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
//console.log('ciphertext = ' + $scope.ciphertext);

//var cipherParams = CryptoJS.lib.CipherParams.create({
//    ciphertext: CryptoJS.enc.Base64.parse($scope.ciphertext)
//});
//var decrypted = CryptoJS.AES.decrypt(
//    cipherParams,
//    $rootScope.base64Key,
//    { iv: $rootScope.iv });
//$scope.descrString = decrypted.toString(CryptoJS.enc.Utf8);
//console.log('decrypted=' + $scope.descrString);


//$scope.source_string = incompleteApp.ApplicationId.toString();
//var encrypted = CryptoJS.AES.encrypt(
//    $scope.source_string,
//    $rootScope.base64Key,
//    { iv: $rootScope.iv });

//var encryptedId = encrypted.ciphertext.toString(CryptoJS.enc.Base64);


/********************************************************************************/
/********************************************************************************/


var ApplicationTypes = {
    MobileTower: 1,
    LayOFCAerialOverground: 2,
    UseDuctToLayOFC: 3,
    LayOFCUnderground: 4,
    InBuildingSolutionIBS: 5,
    MicroCommunicationEquipment: 6,
    CellOnWheel: 7,
    FiveG: 8
};

var HTTPStatusCode = {
    OK: 200,
    Created: 201,
    InternalServerError: 500,
    NotFound: 404,
    BadRequest: 400
};


var FeeStructureType = {
    MobileTowerGBTMunicipalCorporation: 1,
    MobileTowerGBTOtherULBs: 2,
    MobileTowerRTTMunicipalCorporation: 3,
    MobileTowerRTTOtherULBs: 4,
    OFCAerial: 5,
    DuctOFC: 6,
    OFCUnderground: 7,
    MicroCommunicationEquipment: 8,
    FiveGEstablishmentOfPole: 9,
    FiveGUseOfBuildingForSmallCell: 10,
    FiveGUseOfStreetFurnitureForOverheadTelegraphLine: 11,
    FiveGUseOfStreetFurnitureForSmallCell: 12
};

var AreaCategory = {
    Rural: 1,
    Urban: 2
};

var FeeStructureCategory = {
    LWE1: 1,
    LWE2: 2,
    NONLWE: 3
};





function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

function ValidateEmail() {
    debugger;
    $('#lblError').fadeIn('fast');
    var email = $('#Email').val();
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        $('#Email').val('');
        $('#lblError').text('Please enter valid email id');
        setTimeout(function () { $('#lblError').text(''); }, 3000);
        return false;
    }
    else {
        $('#lblError').text('');
        return true;
    }
}


function blockSpecialChar(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}


 


function decimalValidation(el, evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var number = el.value.split('.');
    if (charCode == 8) {
        return true;
    }
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot
    if (number.length > 1 && charCode == 46) {
        return false;
    }
    //get the carat position
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(".");
    //if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
        return false;
    }
    return true;
}

//function decimalValidation(el, evt) {
//    var charCode = (evt.which) ? evt.which : evt.keyCode;
//    var number = el.value.split('.');
//    if (charCode == 8) {
//        return true;
//    }
//    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
//        return false;
//    }
//    //just one dot
//    if (number.length > 1 && charCode == 46) {
//        return false;
//    }
//    //get the carat position
//    var caratPos = getSelectionStart(el);
//    var dotPos = el.value.indexOf(".");
//    //if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
//    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
//        return false;
//    }
//    return true;
//}



function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


function isNumberDecKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 46 || charCode > 57))
        return false;
    return true;
}

function isAlphaNum(evt) {
    debugger;
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if ((charCode <= 31 )|| ((charCode >= 48 && charCode <= 57)) ||(charCode >= 65 && charCode <= 91) || charCode == 8 || charCode == 9 || charCode == 32 || (charCode >= 97 && charCode <= 122) || charCode == 46)
        return true;
    return false;
}

function isAlphabet(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if ((charCode >= 65 && charCode <= 91) || charCode == 8 || charCode == 9 || charCode == 32 || (charCode >= 97 && charCode <= 122) || charCode == 46)
        return true;
    return false;
}

function AllowWithSomeSpecialChar(evt) {
    debugger;
    var charCode = (evt.which) ? evt.which : evt.keyCode
   // alert(charCode);
    if (charCode == 124 || charCode == 60 || charCode == 33 || charCode == 62 || charCode == 38 || charCode == 54 || charCode == 36 || charCode == 34 || charCode == 59 || charCode == 94) {
        return false;
    }
    return true;
}
;

// window.location.href = "http://www.w3schools.com";

function unauthorizeAPIAccess() {
    window.location.href = "../../Account/Login";
}




function degToDms(deg) {
    var d = Math.floor(deg);
    var minfloat = (deg - d) * 60;
    var m = Math.floor(minfloat);
    var secfloat = (minfloat - m) * 60;
    var s = Math.round(secfloat);
    // After rounding, the seconds might become 60. These two
    // if-tests are not necessary if no rounding is done.
    if (s == 60) {
        m++;
        s = 0;
    }
    if (m == 60) {
        d++;
        m = 0;
    }
    return ("" + d + "° " + m + "′ " + s + "′′");
}