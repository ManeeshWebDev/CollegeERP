/// <reference path="UploadImage.js" />
var validPicFileSize = 50 * 1024;// 200 kb Max size // 1* 1024*1024 1 MB
var validPicFilesTypes = ["jpg", "JPEG", "jpeg", "JPG"];//Format "xls",
var extnpic;

function CheckPicExtension(file) {
    var filePath = file.value;
    var ext = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
    extnpic = ext
    // alert(ext);
    if (ext != '') {
        var isValidFile = false;
        for (var i = 0; i < validPicFilesTypes.length; i++) {
            if (ext == validPicFilesTypes[i]) {
                isValidFile = true;
                break;
            }
        }

        if (!isValidFile) {
            file.value = null;
            swal("Only .JPEG and .JPG files are allowed.", "", "warning");
        }
    }
    return isValidFile;
}

function CheckPicFileSize(file) {
    /*global document: false */
    var fileSize = file.files[0].size;
    var isValidFile = false;
    if (fileSize !== 0 && fileSize <= validPicFileSize) {
        isValidFile = true;
    }
    else {
        file.value = null;
        swal("Maximum File size should be 50KB.", '', "warning");
    }

    return isValidFile;
}

function CheckPicFile(file) {
    var isValidFile = CheckPicExtension(file);
    if (isValidFile) {
        isValidFile = CheckPicFileSize(file);
    }
    return isValidFile;
}
$("#photo").change(function () {
    debugger
    var data = new FormData();
    var files = $("#photo").get(0).files;
    $("#PhotoSize").html((this.files[0].size / 1024).toFixed(2) + ' KB');
    var validFile = CheckPicFile(this);

    if (validFile) {
        if (files.length > 0) {
            data.append("StudentDoc", files[0]);
        }
        $.ajax({
            url: '../Master/UploadPhotoFile',
            type: "POST",
            processData: false,
            contentType: false,
            data: data,
            success: function (response) {
                $("#PhotoPath").val('../Content/readWriteData/' + response);
                $("#Imgphoto").prop("src", '../Content/readWriteData/' + response);
                swal("Photograph Uploaded Successfully.", "", "success")
            },
            error: function (er) {
                swal(er, "", "error");
            }

        });
    }
});

$("#sign").change(function () {
    debugger
    var data = new FormData();
    var files = $("#sign").get(0).files;
    $("#SignSize").html((this.files[0].size / 1024).toFixed(2) + ' KB');
    var validFile = CheckPicFile(this);
    if (validFile) {
        if (files.length > 0) {
            data.append("StudentDoc", files[0]);
        }
        $.ajax({
            url: '../Master/UploadSignFile',
            type: "POST",
            processData: false,
            contentType: false,
            data: data,
            success: function (response) {
                $("#SignPath").val('../Content/readWriteData/' + response);
                $("#Imgsign").prop("src", '../Content/readWriteData/' + response);
                swal("Signature Uploaded Successfully.", "", "success")
            },
            error: function (er) {
                swal(er, "", "error");
            }

        });
    }
});


var validDocFileSize = 300 * 1024;// 200 kb Max size // 1* 1024*1024 1 MB
var validDocFilesTypes = ["jpg", "JPEG", "jpeg", "JPG", "PDF", "pdf"];//Format "xls",


function CheckDocExtension(file) {
    var filePath = file.value;
    var ext = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
    extnpic = ext
    // alert(ext);
    if (ext != '') {
        var isValidFile = false;
        for (var i = 0; i < validDocFilesTypes.length; i++) {
            if (ext == validDocFilesTypes[i]) {
                isValidFile = true;
                break;
            }
        }

        if (!isValidFile) {
            file.value = null;
            swal("Only .JPEG and .JPG and .PDF files are allowed.", "", "warning");
        }
    }
    return isValidFile;
}

function CheckDocFileSize(file) {
    /*global document: false */
    var fileSize = file.files[0].size;
    var isValidFile = false;
    if (fileSize !== 0 && fileSize <= validDocFileSize) {
        isValidFile = true;
    }
    else {
        file.value = null;
        swal("Maximum File size should be 300KB.", '', "warning");
    }

    return isValidFile;
}

function CheckDocFile(file) {
    var isValidFile = CheckDocExtension(file);
    if (isValidFile) {
        isValidFile = CheckDocFileSize(file);
    }
    return isValidFile;
}


$("input[name*=Docs]").change(function () {
    debugger
    var data = new FormData();
    var files = $(this).get(0).files;
    var idName = $(this).attr("id").replace("fu", "");
    var hdnDocs = "";
    var hdnView = "";
    if (idName == "HighSchoolMSheet") {
        hdnDocs = $("#HMarkSheetPath")
        hdnView = $("#ViewHighSchoolMSheet")
    }

    else
        if (idName == "IExamMSheet") {
            hdnDocs = $("#IMSheetPath")
            hdnView = $("#ViewIExamMSheet")
        }

        else if (idName == "QExamMSheet") {
            hdnDocs = $("#QualifyingExamMSheetPath")
            hdnView = $("#ViewQExamMSheet")
        }
        else if (idName == "AllotmentLetter") {
            hdnDocs = $("#AllotmentLetterPath")
            hdnView = $("#ViewAllotmentLetter")
        }
        else if (idName == "CasteCertificate") {
            hdnDocs = $("#CasteCertificatePath")
            hdnView = $("#ViewCasteCertificate")
        }
        else if (idName == "IncomeCertificate") {
            hdnDocs = $("#IncomeCertificatePath")
            hdnView = $("#ViewIncomeCertificate")
        }
        else if (idName == "TCCertificate") {
            hdnDocs = $("#TCCertificate")
            hdnView = $("#ViewTCCertificate")
        }

    var validFile = CheckDocFile(this);
    if (validFile) {
        if (files.length > 0) {
            data.append("StudentDoc", files[0]);
            data.append("DocsName", idName);
        }

        $.ajax({
            url: '../Master/UploadDocsFile',
            type: "POST",
            processData: false,
            contentType: false,
            data: data,
            success: function (response) {
                debugger
                hdnDocs.val('../Content/readWriteData/' + response);
                hdnView.attr("href", '../Content/readWriteData/' + response);
                if (hdnView.attr("href") != "#" || hdnView.attr("href") != "") {
                    hdnView.attr("Style", "display:block")
                }
                swal("Document uploaded successfully.", "", "success")
            },
            error: function (er) {
                swal(er, "", "error");
            }

        });

    }
});


function ValidateImage() {
    debugger;
    var PhotoPath = $("#PhotoPath").val();
    var SignPath = $("#SignPath").val();

    var HMarkSheetPath = $("#HMarkSheetPath").val();
    var QualifyingExamMSheetPath = $("#QualifyingExamMSheetPath").val();
    var AllotmentLetterPath = $("#AllotmentLetterPath").val();
    var CasteCertificatePath = $("#CasteCertificatePath").val();
    var IncomeCertificatePath = $("#IncomeCertificatePath").val();
    var IMSheetPath = $("#IMSheetPath").val();
    var TCCertificate = $("#TCCertificate").val();

    var hdnBranch = $("#hdnBranch").val();
    var hdnSemester = $("#hdnSemester").val();

    if (PhotoPath == '') {
        swal("Upload Photograph", "Photograph must be 'jpeg' or 'jpg' format and less than 300 KB. ", "warning");
        return false;
    }
    else if (SignPath == '') {
        swal("Upload Signature", "Signature must be 'jpeg' or 'jpg' format and less than 300 KB. ", "warning");
        return false;
    }
    else if (HMarkSheetPath == "") {
        swal("Upload High School Marksheet", "File must be 'jpeg' or 'jpg' format and less than 300 KB. ", "warning");
        return false;
    }
    else if (IMSheetPath == "" && (hdnSemester == "1")) {
        swal("Upload Intermediate Marksheet", "File must be 'jpeg' or 'jpg' format and less than 300 KB. ", "warning");
        return false;
    }
    else if ((hdnBranch == "70" || hdnSemester == "3") && QualifyingExamMSheetPath == "") {
        swal("Upload Qualifying Exam Marksheet", "File must be 'jpeg' or 'jpg' format and less than 300 KB. ", "warning");
        return false;
    }
    else if (AllotmentLetterPath == "") {
        swal("Upload Allotment Letter", "File must be 'jpeg' or 'jpg' format and less than 300 KB. ", "warning");
        return false;
    }
    else if (TCCertificate == "") {
        swal("Upload T.C./Migration", "File must be 'jpeg' or 'jpg' format and less than 300 KB. ", "warning");
        return false;
    }
}