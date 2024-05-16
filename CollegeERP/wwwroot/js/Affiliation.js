
$(function () {
    $('#LandDetailsCertificateDate').datepicker({
    });
})

$(function () {
    $('#LandRegDate').datepicker({
    });
})

function CheckValidation() {
    debugger;
    if ($("#LandCategoryId").val() == undefined || $("#LandCategoryId").val() == "" || $("#LandCategoryId").val() == null) {
        swal("Warning", "Please select programme .", "warning");
        $("#LandCategoryId").focus();
        return false;
    }
    if ($("#LandAreaId").val() == undefined || $("#LandAreaId").val() == "" || $("#LandAreaId").val() == null) {
        swal("Warning", "Please select land area .", "warning");
        $("#LandAreaId").focus();
        return false;
    }
    if ($("#LandDetailsArea").val() == undefined || $("#LandDetailsArea").val() == "" || $("#LandDetailsArea").val() == null) {
        swal("Warning", "Please fill area .", "warning");
        $("#LandDetailsArea").focus();
        return false;
    }
    if ($("#LandDetailsLocation").val() == undefined || $("#LandDetailsLocation").val() == "" || $("#LandDetailsLocation").val() == null) {
        swal("Warning", "Please fill location .", "warning");
        $("#LandDetailsLocation").focus();
        return false;
    }
    if ($("#LandDetailsCertificateOwner").val() == undefined || $("#LandDetailsCertificateOwner").val() == "" || $("#LandDetailsCertificateOwner").val() == null) {
        swal("Warning", "Please fill certificate owner .", "warning");
        $("#LandDetailsCertificateOwner").focus();
        return false;
    }
    if ($("#LandDetailsCertificateDate").val() == undefined || $("#LandDetailsCertificateDate").val() == "" || $("#LandDetailsCertificateDate").val() == null) {
        swal("Warning", "Please fill certificate date .", "warning");
        $("#LandDetailsCertificateDate").focus();
        return false;
    }
    if ($("#OwnershipDetails").val() == undefined || $("#OwnershipDetails").val() == "" || $("#OwnershipDetails").val() == null) {
        swal("Warning", "Please select ownership details .", "warning");
        $("#OwnershipDetails").focus();
        return false;
    }
    if ($("#LandDetailssurveyNo").val() == undefined || $("#LandDetailssurveyNo").val() == "" || $("#LandDetailssurveyNo").val() == null) {
        swal("Warning", "Please fill survey no .", "warning");
        $("#LandDetailssurveyNo").focus();
        return false;
    }
    if ($("#LandRegName").val() == undefined || $("#LandRegName").val() == "" || $("#LandRegName").val() == null) {
        swal("Warning", "Please fill reg name .", "warning");
        $("#LandRegName").focus();
        return false;
    }
    if ($("#LandRegistered").val() == undefined || $("#LandRegistered").val() == "" || $("#LandRegistered").val() == null) {
        swal("Warning", "Please fill land registered .", "warning");
        $("#LandRegistered").focus();
        return false;
    }
    if ($("#LandRegDate").val() == undefined || $("#LandRegDate").val() == "" || $("#LandRegDate").val() == null) {
        swal("Warning", "Please fill reg date .", "warning");
        $("#LandRegDate").focus();
        return false;
    }
    if ($("#LandRegNo").val() == undefined || $("#LandRegNo").val() == "" || $("#LandRegNo").val() == null) {
        swal("Warning", "Please fill reg no .", "warning");
        $("#LandRegNo").focus();
        return false;
    }
    else {
        return true;
    }
}

function CheckHostelValidation() {
    debugger;
    if ($("#HostalName").val() == undefined || $("#HostalName").val() == "" || $("#HostalName").val() == null) {
        swal("Warning", "Please fill hostal name .", "warning");
        $("#HostalName").focus();
        return false;
    }
    if ($("#TotalBuildUp").val() == undefined || $("#TotalBuildUp").val() == "" || $("#TotalBuildUp").val() == null) {
        swal("Warning", "Please fill total build up .", "warning");
        $("#TotalBuildUp").focus();
        return false;
    }
    if ($("#GenderValue").val() == undefined || $("#GenderValue").val() == "" || $("#GenderValue").val() == null || $("#GenderValue").val() =="0") {
        swal("Warning", "Please select gender .", "warning");
        $("#GenderValue").focus();
        return false;
    }
    if ($("#BackupValue").val() == undefined || $("#BackupValue").val() == "" || $("#BackupValue").val() == null || $("#BackupValue").val() == "0") {
        swal("Warning", "Please select backup .", "warning");
        $("#BackupValue").focus();
        return false;
    }
    if ($("#InternetValue").val() == undefined || $("#InternetValue").val() == "" || $("#InternetValue").val() == null || $("#InternetValue").val() == "0") {
        swal("Warning", "Please select internet .", "warning");
        $("#InternetValue").focus();
        return false;
    }
    if ($("#LibraryValue").val() == undefined || $("#LibraryValue").val() == "" || $("#LibraryValue").val() == null || $("#LibraryValue").val() == "0") {
        swal("Warning", "Please select library .", "warning");
        $("#LibraryValue").focus();
        return false;
    }
    if ($("#OccupantsRoom").val() == undefined || $("#OccupantsRoom").val() == "" || $("#OccupantsRoom").val() == null) {
        swal("Warning", "Please fill occupants/rooms .", "warning");
        $("#OccupantsRoom").focus();
        return false;
    }
    if ($("#NoOfRoom").val() == undefined || $("#NoOfRoom").val() == "" || $("#NoOfRoom").val() == null) {
        swal("Warning", "Please fill no of room .", "warning");
        $("#NoOfRoom").focus();
        return false;
    }
    if ($("#Tariff").val() == undefined || $("#Tariff").val() == "" || $("#Tariff").val() == null) {
        swal("Warning", "Please fill tariff .", "warning");
        $("#Tariff").focus();
        return false;
    }
    if ($("#CapicityAsPerNorm").val() == undefined || $("#CapicityAsPerNorm").val() == "" || $("#CapicityAsPerNorm").val() == null) {
        swal("Warning", "Please fill capicity as per norm .", "warning");
        $("#CapicityAsPerNorm").focus();
        return false;
    }
    if ($("#ActualOccupancy").val() == undefined || $("#ActualOccupancy").val() == "" || $("#ActualOccupancy").val() == null) {
        swal("Warning", "Please fill actual occupancy .", "warning");
        $("#ActualOccupancy").focus();
        return false;
    }
    else {
        return true;
    }
}

function SetOwnershipDetailsValue(obj) {
    debugger;
    $('#hdnOwnershipDetails').val($(obj).val());
}

function OpenAddLandDetailsModal(Id) {
    debugger;
    ResetRecord();
    GetProgrammeRecord();
    SetLandAreaDdlValue();
    $('#' + Id).show();
    $('#LandDetailsModal').css('overflow', 'scroll');
}

function CloseAddLandDetailsModal(Id) {
    debugger;
    $('#' + Id).hide();
    ResetRecord();
}

function ResetRecord() {
    debugger;
    $('#LandRegNo').val('');
    $('#LandRegDate').val('');
    $('#LandRegistered').val('');
    $('#LandRegName').val('');
    $('#LandDetailssurveyNo').val('');
    $('#OwnershipDetails').val(0);
    $('#LandDetailsCertificateDate').val('');
    $('#LandDetailsCertificateOwner').val('');
    $('#LandDetailsLocation').val('');
    $('#LandDetailsArea').val('');
    $('#LandCategoryId').val('');
    $('#LandAreaId').val('');
    if ($('#ProgrammeDetailsTbody').children() != undefined && $('#ProgrammeDetailsTbody').children().length > 0) {
        $('#ProgrammeDetailsTbody').children().remove();
    }
    $('#DiVProgrameeDetailsWithLandArea').hide();
}

function ResetComputational_facilityRecord() {
    debugger;
    $('#ComputationFacilityStepBody input[type="text"]').val('');
    $('#ComputationFacilityStepBody select').val('');
    $('#DivNextButtion').hide();
    $('#DivNextButtion').removeClass('d-grid');
    $('#DivNextButtion').addClass('col-md-3');
}

function ResetComputational_facility() {
    debugger;
    $('#ComputationFacilityStepBody input[type="text"]').val('');
    $('#ComputationFacilityStepBody select').val('');
}

function Resetfacilities() {
    debugger;
    $('#FacalitiesTbody input[type="checkbox"]').prop('checked', false);
    $('#DivNextButtion').hide();
    $('#DivNextButtion').removeClass('d-grid');
    $('#DivNextButtion').addClass('col-md-3');
}

function OpenHostelModal() {
    $('#HostelModal').show();
}

function SetGenderValue(obj) {
    $('#Gender').val($(obj).val());
}

function SetBackupValue(obj) {
    $('#EBackUp').val($(obj).val());
}

function SetInternetValue(obj) {
    $('#Internet').val($(obj).val());
}

function SetLibraryValue(obj) {
    $('#Library').val($(obj).val());
}

function ResetHostelModal() {
    $('#HostelModal input[type="text"]').val('');
    $('#HostelModal select').val(0);
}

function ResetHostelModalRecord() {
    debugger;
    $('#HostelData tbody').children().remove();
    $('#DivNextButtion').hide();
    $('#DivNextButtion').removeClass('d-grid');
    $('#DivNextButtion').addClass('col-md-3');
}

function ResetLibraryFacalitiesRecord() {
    debugger;
    $('#LibraryFacilitiesTbody').children().remove();
    $('#DivNextButtion').hide();
    $('#DivNextButtion').removeClass('d-grid');
    $('#DivNextButtion').addClass('col-md-3');
}

function CheckPlacementDetailsValidation() {
    if ($("#PlacementYear").val() == undefined || $("#PlacementYear").val() == "" || $("#PlacementYear").val() == null || $("#PlacementYear").val() == "0") {
        swal("Warning", "Please select year .", "warning");
        $("#PlacementYear").focus();
        return false;
    }
    if ($("#Company").val() == undefined || $("#Company").val() == "" || $("#Company").val() == null) {
        swal("Warning", "Please fill name .", "warning");
        $("#Company").focus();
        return false;
    }
    if ($("#NoOfStudent").val() == undefined || $("#NoOfStudent").val() == "" || $("#NoOfStudent").val() == null) {
        swal("Warning", "Please fill no of student .", "warning");
        $("#NoOfStudent").focus();
        return false;
    }
    else {
        return true;
    }
}

function ResetPlacementDetailsModal() {
    $('#PlacementDetailsModal input[type="text"]').val('');
    $('#PlacementDetailsModal select').val(0);
}

function CloseEquipmentModal(obj) {
    $('#' + obj).hide();
}

function OpenEquipmentModal(obj) {
    $('#' + obj).show();
}

function CheckEquipmentDetailsValidation() {
    debugger;
    if ($('#EquipmentData').val() == '' || $('#EquipmentData') == undefined || $('#EquipmentData').val() == null) {
        swal("Warning", "Please fill name  .", "warning");
        $("#EquipmentData").focus();
        return false;
    }
    if ($('#MinNo').val() == '' || $('#MinNo').val() == undefined || $('#MinNo') == null) {
        swal("Warning", "Please fill minimum no  .", "warning");
        $("MinNo").focus();
        return false;
    }
    if ($('#WorkingStatusData').val() == '' || $('#WorkingStatusData').val() == undefined || $('#WorkingStatusData').val() == null) {
        swal("Warning", "Please select working status  .", "warning");
        $('#WorkingStatusData').focus();
        return false;
    }
    if ($('#AvailNo').val() == '' || $('#AvailNo').val() == undefined || $('#AvailNo').val() == null) {
        swal("Warning", "Please fill available no  .", "warning");
        $('#AvailNo').focus();
        return false;
    }
    else {
        return true;
    }
}

function ResetEquipmentRecord() {
    $('#DivNextButtion').hide();
    $('#EquipmentTbody').children().remove();
    $('#DivNextButtion').removeClass('d-grid');
    $('#DivNextButtion').addClass('col-md-3');
}

function ResetEquipmentModal() {
    $('#EquipmentModal input[type="text"]').val('');
    $('#EquipmentModal select').val('');
}

function CheckFacultyDetailsValidation() {
    debugger;
    if ($('#FacultyType').val() == '' || $('#FacultyType') == undefined || $('#FacultyType').val() == null) {
        swal("Warning", "Please select faculty type  .", "warning");
        $("#FacultyType").focus();
        return false;
    }
    if ($('#FirstName').val() == '' || $('#FirstName') == undefined || $('#FirstName').val() == null) {
        swal("Warning", "Please fill first name  .", "warning");
        $("#FirstName").focus();
        return false;
    }
    if ($('#LastName').val() == '' || $('#LastName') == undefined || $('#LastName').val() == null) {
        swal("Warning", "Please fill last name  .", "warning");
        $("#LastName").focus();
        return false;
    }
    if ($('#DesignationID').val() == '' || $('#DesignationID') == undefined || $('#DesignationID').val() == null) {
        swal("Warning", "Please select designation  .", "warning");
        $("#LastName").focus();
        return false;
    }
    if ($('#PANNo').val() == '' || $('#PANNo') == undefined || $('#PANNo').val() == null) {
        swal("Warning", "Please select PAN number  .", "warning");
        $("#PANNo").focus();
        return false;
    }
    if ($('#Gender').val() == '' || $('#Gender') == undefined || $('#Gender').val() == null) {
        swal("Warning", "Please select gender  .", "warning");
        $("#Gender").focus();
        return false;
    }
    if ($('#DOB').val() == '' || $('#DOB') == undefined || $('#DOB').val() == null) {
        swal("Warning", "Please select DOB  .", "warning");
        $("#DOB").focus();
        return false;
    }
    if ($('#Email').val() == '' || $('#Email') == undefined || $('#Email').val() == null) {
        swal("Warning", "Please fill email  .", "warning");
        $("#Email").focus();
        return false;
    }
    if ($('#Mobile').val() == '' || $('#Mobile') == undefined || $('#Mobile').val() == null) {
        swal("Warning", "Please fill mobile number  .", "warning");
        $("#Mobile").focus();
        return false;
    }
    if ($('#CategoryId').val() == '' || $('#CategoryId') == undefined || $('#CategoryId').val() == null) {
        swal("Warning", "Please select category  .", "warning");
        $("#CategoryId").focus();
        return false;
    }
    if ($('#OriginStateId').val() == '' || $('#OriginStateId') == undefined || $('#OriginStateId').val() == null) {
        swal("Warning", "Please select origin state  .", "warning");
        $("#OriginStateId").focus();
        return false;
    }
    if ($('#AppointmentDate').val() == '' || $('#AppointmentDate') == undefined || $('#AppointmentDate').val() == null) {
        swal("Warning", "Please select appointment date  .", "warning");
        $("#AppointmentDate").focus();
        return false;
    }
    if ($('#JoiningDate').val() == '' || $('#JoiningDate') == undefined || $('#JoiningDate').val() == null) {
        swal("Warning", "Please select joining date  .", "warning");
        $("#JoiningDate").focus();
        return false;
    }
    if ($('#JobTypeId').val() == '' || $('#JobTypeId') == undefined || $('#JobTypeId').val() == null) {
        swal("Warning", "Please select job type  .", "warning");
        $("#JobTypeId").focus();
        return false;
    }
    if ($('#EmpId').val() == '' || $('#EmpId') == undefined || $('#EmpId').val() == null) {
        swal("Warning", "Please fill employee id Aa per AICTE/adharcard no  .", "warning");
        $("#EmpId").focus();
        return false;
    }
    if ($('#BioId').val() == '' || $('#BioId') == undefined || $('#BioId').val() == null) {
        swal("Warning", "Please fill biometric id.", "warning");
        $("#BioId").focus();
        return false;
    }
    if ($('#EPFNo').val() == '' || $('#EPFNo') == undefined || $('#EPFNo').val() == null) {
        swal("Warning", "Please fill epf no .", "warning");
        $("#EPFNo").focus();
        return false;
    }
    if ($('#DepartmentID').val() == '' || $('#DepartmentID') == undefined || $('#DepartmentID').val() == null) {
        swal("Warning", "Please select department .", "warning");
        $("#DepartmentID").focus();
        return false;
    }
    if ($('#YearOfExp').val() == '' || $('#YearOfExp') == undefined || $('#YearOfExp').val() == null) {
        swal("Warning", "Please fill year of exp .", "warning");
        $("#YearOfExp").focus();
        return false;
    }
    if ($('#Qualification').val() == '' || $('#Qualification') == undefined || $('#Qualification').val() == null) {
        swal("Warning", "Please fill qualification .", "warning");
        $("#Qualification").focus();
        return false;
    }
    else {
        return true;
    }
}

function CheckOnlinePaymentDetailsValidation() {
    debugger;
    if ($('#BranchId').val() == '' || $('#BranchId') == undefined || $('#BranchId').val() == null || $('#BranchId').val() == "0") {
        swal("Warning", "Please select program .", "warning");
        $("#BranchId").focus();
        return false;
    }
    if ($('#AdmissionQuotaId').val() == '' || $('#AdmissionQuotaId') == undefined || $('#AdmissionQuotaId').val() == null || $('#AdmissionQuotaId').val() == "0") {
        swal("Warning", "Please select quota name.", "warning");
        $("#AdmissionQuotaId").focus();
        return false;
    }
    if ($('#TutionFeeForYear').val() == '' || $('#TutionFeeForYear').val() == undefined || $('#TutionFeeForYear') == null) {
        swal("Warning", "Please fill tuition fee for one year  .", "warning");
        $("TutionFeeForYear").focus();
        return false;
    }
    if ($('#OtherFeeForYear').val() == '' || $('#OtherFeeForYear').val() == undefined || $('#OtherFeeForYear') == null) {
        swal("Warning", "Please fill others fee in year  .", "warning");
        $("OtherFeeForYear").focus();
        return false;
    }
    else {
        return true;
    }
}

function ResetOnlinePaymentModal() {
    $('#OnlinePaymentModal input[type="text"]').val('');
    $('#OnlinePaymentModal select').val('');
}

function CheckSaleryPaymentValidation() {
    debugger;
    if ($("#FacultyDetailsAffiliationId").val() == undefined || $("#FacultyDetailsAffiliationId").val() == "" || $("#FacultyDetailsAffiliationId").val() == null || $("#FacultyDetailsAffiliationId").val() == "0") {
        swal("Warning", "Please select teaching faculties .", "warning");
        $("#FacultyDetailsAffiliationId").focus();
        return false;
    }
    if ($("#BankACName").val() == undefined || $("#BankACName").val() == "" || $("#BankACName").val() == null) {
        swal("Warning", "Please fill bank a/c name .", "warning");
        $("#BankACName").focus();
        return false;
    }
    if ($("#ACNumber").val() == undefined || $("#ACNumber").val() == "" || $("#ACNumber").val() == null) {
        swal("Warning", "Please fill a/c Number .", "warning");
        $("#ACNumber").focus();
        return false;
    }
    if ($("#BankName").val() == undefined || $("#BankName").val() == "" || $("#BankName").val() == null) {
        swal("Warning", "Please fill bank name .", "warning");
        $("#BankName").focus();
        return false;
    }
    if ($("#IFSCCode").val() == undefined || $("#IFSCCode").val() == "" || $("#IFSCCode").val() == null) {
        swal("Warning", "Please fill IFSC code .", "warning");
        $("#IFSCCode").focus();
        return false;
    }
    if ($("#Branch").val() == undefined || $("#Branch").val() == "" || $("#Branch").val() == null) {
        swal("Warning", "Please fill branch .", "warning");
        $("#Branch").focus();
        return false;
    }
    if ($("#ProcedureForPaymentOfSalary").val() == undefined || $("#ProcedureForPaymentOfSalary").val() == "" || $("#ProcedureForPaymentOfSalary").val() == null) {
        swal("Warning", "Please fill procedure for payment of salary .", "warning");
        $("#ProcedureForPaymentOfSalary").focus();
        return false;
    }
    if ($("#ProcedureForIncomeTaxDeduction").val() == undefined || $("#ProcedureForIncomeTaxDeduction").val() == "" || $("#ProcedureForIncomeTaxDeduction").val() == null) {
        swal("Warning", "Please fill procedure for income tax deduction of all the employee of institute .", "warning");
        $("#ProcedureForIncomeTaxDeduction").focus();
        return false;
    }
    else {
        return true;
    }
}

function ResetSaleryPayment() {
    debugger;
    $('#FacultyDetailsAffiliationId').val(''); 
    $('#BankACName').val('');
    $('#ACNumber').val('');
    $('#BankName').val('');
    $('#IFSCCode').val('');
    $('#Branch').val('');
    $('#ProcedureForPaymentOfSalary').val('');
    $('#ProcedureForIncomeTaxDeduction').val('');
    $('#DivNextButtion').addClass('col-md-3');
    $('#DivNextButtion').removeClass('d-grid');
    $('#DivNextButtion').hide();
    $('#SaleryPaymentTable tbody').children().remove();
    $('#SavingDiv').hide();
}

function ResetSaleryPaymentFields() {
    debugger;
   // $('#FacultyDetailsAffiliationId').val('');
    $('#BankACName').val('');
    $('#ACNumber').val('');
    $('#BankName').val('');
    $('#IFSCCode').val('');
    $('#Branch').val('');
    $('#ProcedureForPaymentOfSalary').val('');
    $('#ProcedureForIncomeTaxDeduction').val('');
}

function ResetOnlinePaymentRecord() {
    $('#DivNextButtion').hide();
    $('#OnlinePaymentTable tbody').children().remove();
    $('#DivNextButtion').removeClass('d-grid');
    $('#DivNextButtion').addClass('col-md-3');
}

function checkFinancialPositionModal() {
    debugger;
    if ($('#IFSCCode').val() == '' || $('#IFSCCode') == undefined || $('#IFSCCode').val() == null) {
        swal("Warning", "Please fill IFSC code .", "warning");
        $("#BranchId").focus();
        return false;
    }
    if ($('#AccountNo').val() == '' || $('#AccountNo') == undefined || $('#AccountNo').val() == null) {
        swal("Warning", "Please fill a/c no .", "warning");
        $("#AccountNo").focus();
        return false;
    }
    if ($('#TypeOfAccount').val() == '' || $('#TypeOfAccount') == undefined || $('#TypeOfAccount').val() == null || $('#TypeOfAccount').val() == "0") {
        swal("Warning", "Please select type of account .", "warning");
        $("#TypeOfAccount").focus();
        return false;
    }
    if ($('#Amount').val() == '' || $('#Amount') == undefined || $('#Amount').val() == null) {
        swal("Warning", "Please fill amount .", "warning");
        $("#Amount").focus();
        return false;
    }
    if ($('#Date').val() == '' || $('#Date') == undefined || $('#Date').val() == null) {
        swal("Warning", "Please select date .", "warning");
        $("#Date").focus();
        return false;
    }
    else {
        return true;
    }
}

$(function () {
    $('#Date').datepicker({
    });
})

function CloseFinancialPositionModal() {
    $('#FinancialPositionModal').hide();
    ResetFinancialPositionModal();
}

function OpenFinancialPositionModal() {
    ResetFinancialPositionModal();
    $('#FinancialPositionModal').show();
}

function ResetFinancialPositionModal() {
    $('#FinancialPositionModal input[type="text"]').val('');
    $('#FinancialPositionModal select').val('');
}

function ResetFinancialPositionRecord() {
    $('#DivNextButtion').hide();
    $('#FinancialPositionTable tbody').children().remove();
    $('#DivNextButtion').removeClass('d-grid');
    $('#DivNextButtion').addClass('col-md-3');
}

function ValidateContactEmail(obj) {
    debugger;
    var email = obj.currentTarget.value;// $('#txtPrimaryEmail').val();
    $('#lblError').val('');
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        $('#lblError').text('Please enter valid email id');
        setTimeout(function () { $('#lblError').text(''); }, 3000);
        obj.currentTarget.value = '';
        return false;
    }
}

function ValidateContactEmail2(obj) {
    debugger;
    var email = obj.currentTarget.value;// $('#txtPrimaryEmail').val();
    $('#lblError').val('');
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        $('#lblError1').text('Please enter valid email id');
        setTimeout(function () { $('#lblError1').text(''); }, 3000);
        obj.currentTarget.value = '';
        return false;
    }
}


// PCI Start

function ValidateSocietyEmail(obj) {
    debugger;
    var email = obj.currentTarget.value;
    $('#lblErrorSocietyEmail').val('');
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        $('#lblErrorSocietyEmail').text('Please enter valid email id');
        setTimeout(function () { $('#lblErrorSocietyEmail').text(''); }, 3000);
        obj.currentTarget.value = '';
        return false;
    }
}

function ValidatePrincipalEmail(obj) {
    debugger;
    var email = obj.currentTarget.value;
    $('#lblErrorPrincipalEmail').val('');
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        $('#lblErrorPrincipalEmail').text('Please enter valid email id');
        setTimeout(function () { $('#lblErrorPrincipalEmail').text(''); }, 3000);
        obj.currentTarget.value = '';
        return false;
    }
}
function AntiRagingValidateEmail(obj) {
    debugger;
    var email = obj.currentTarget.value;
    $('#lblErrorAntiRaggingEmail').val('');
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        $('#lblErrorAntiRaggingEmail').text('Please enter valid email id');
        setTimeout(function () { $('#lblErrorAntiRaggingEmail').text(''); }, 3000);
        obj.currentTarget.value = '';
        return false;
    }
}
function WomenProtectionValidateEmail(obj) {
    debugger;
    var email = obj.currentTarget.value;
    $('#lblErrorWomenProtectionEmail').val('');
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        $('#lblErrorWomenProtectionEmail').text('Please enter valid email id');
        setTimeout(function () { $('#lblErrorWomenProtectionEmail').text(''); }, 3000);
        obj.currentTarget.value = '';
        return false;
    }
}
function RedresselGrievancesValidateEmail(obj) {
    debugger;
    var email = obj.currentTarget.value;
    $('#lblErrorRedresselGrievancesEmail').val('');
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        $('#lblErrorRedresselGrievancesEmail').text('Please enter valid email id');
        setTimeout(function () { $('#lblErrorRedresselGrievancesEmail').text(''); }, 3000);
        obj.currentTarget.value = '';
        return false;
    }
}

// PCI End