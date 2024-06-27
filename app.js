//var Output = "";
// var heading = document.querySelector(".heading");
var Display = document.querySelector(".Display");
Display.classList.add("Display");
const form = document.getElementById("form1");
const form2 = document.getElementById("form2");
var errorfname = document.getElementById("errorfname");
var errorlname = document.getElementById("errorlname");
var errormobile = document.getElementById("errormobile");
var errorgender = document.getElementById("errorgender");
var erroremail = document.getElementById("erroremail");
var personalDetails = {};
var familyDetails = {};
var educationDetails = {};

function inputPersonalDetails() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.getElementById("fname").value;
    var birthDate = document.getElementById("DOB").value;
    var lastName = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var mobileNumber = document.getElementById("mobile").value;
    var emailId = document.getElementById("email").value;

    personalDetails = {
      FirstName: firstName,
      BirthDate: birthDate,
      LastName: lastName,
      Gender: gender,
      Age: age,
      Address: address,
      Mobile: mobileNumber,
      Email: emailId,
    };

    if (
      firstName === "" ||
      firstName == null ||
      firstName == parseInt(firstName)
    ) {
      errorfname.innerText = "Enter a valid name";
    }

    if (lastName === "" || lastName == null) {
      errorlname.innerText = "Last Name cannot be empty";
    }

    if (
      mobileNumber != parseInt(mobileNumber) ||
      mobileNumber == null ||
      mobileNumber === ""
    ) {
      errormobile.innerText = "Enter your registered mobile number";
    }

    if (gender === "" || gender == null) {
      errorgender.innerText = "Select your gender";
    }

    if (emailId === "" || emailId == null) {
      erroremail.innerText = "Enter your email address";
    }

    if (
      firstName != "" &&
      lastName != "" &&
      gender != "" &&
      mobileNumber != "" &&
      emailId != ""
    ) {
      document.getElementById("familyDetails").style.display = "block";
    }
  });
}

function inputFamilyDetails() {
  var fatherName = document.getElementById("fathername").value;
  var motherName = document.getElementById("mothername").value;
  var status = document.getElementById("status").value;
  var children = document.getElementById("child").value;
  var dependency = document.getElementById("dependent").value;

  familyDetails = {
    FatherName: fatherName,
    MotherName: motherName,
    MaritalStatus: status,
    Children: children,
    Dependency: dependency,
  };

  document.getElementById("qualificationDetails").style.display = "block";
}

function inputEducationDetails() {
  var tenth = document.getElementById("schoolName").value;
  var tenthSubject = document.getElementById("Subject").value;
  var tenthMarks = document.getElementById("marks").value;
  var twelth = document.getElementById("schoolName1").value;
  var twelthSubject = document.getElementById("Subject1").value;
  var twelthMarks = document.getElementById("marks1").value;
  var collegeName = document.getElementById("collegeName").value;
  var fromDate = document.getElementById("fromDate").value;
  var toDate = document.getElementById("toDate").value;
  var degree = document.getElementById("degree").value;

  educationDetails = {
    Tenth: tenth,
    TenthSubject: tenthSubject,
    TenthMarks: tenthMarks,
    Twelth: twelth,
    TwelthSubject: twelthSubject,
    TwelthMarks: twelthMarks,
    CollegeName: collegeName,
    FromDate: fromDate,
    ToDate: toDate,
    Degree: degree,
  };

  document.getElementById("heading").style.display = "none";
  document.getElementById("first").style.display = "none";
  document.getElementById("form1").style.display = "none";
  document.getElementById("familyDetails").style.display = "none";
  document.getElementById("qualificationDetails").style.display = "none";
  document.getElementById("heading1").style.display = "block";
  document.getElementById("DisplayDetails").style.display = "block";

  document.getElementById("valueFirstName").innerText =
    personalDetails.FirstName;
  document.getElementById("valueLastName").innerText = personalDetails.LastName;
  document.getElementById("valueGender").innerText = personalDetails.Gender;
  document.getElementById("valueDOB").innerText = personalDetails.BirthDate;
  document.getElementById("valueAge").innerText = personalDetails.Age;
  document.getElementById("valueMobile").innerText = personalDetails.Mobile;
  document.getElementById("valueEmail").innerText = personalDetails.Email;
  document.getElementById("valueAddress").innerText = personalDetails.Address;
  document.getElementById("valueFatherName").innerText =
    familyDetails.FatherName;
  document.getElementById("valueMotherName").innerText =
    familyDetails.MotherName;
  document.getElementById("valueMaritalStatus").innerText =
    familyDetails.MaritalStatus;
  document.getElementById("valueChildren").innerText = familyDetails.Children;
  document.getElementById("valueDependent").innerText =
    familyDetails.Dependency;
  document.getElementById("valueSchool").innerText = educationDetails.Tenth;
  document.getElementById("valueSubject").innerText =
    educationDetails.TenthSubject;
  document.getElementById("valueMarks").innerText = educationDetails.TenthMarks;
  document.getElementById("valueSchool1").innerText = educationDetails.Twelth;
  document.getElementById("valueSubject1").innerText =
    educationDetails.TwelthSubject;
  document.getElementById("valueMarks1").innerText =
    educationDetails.TwelthMarks;
  document.getElementById("valueCollege").innerText =
    educationDetails.CollegeName;
  document.getElementById("valueDegree").innerText = educationDetails.FromDate;
  document.getElementById("valuefrom").innerText = educationDetails.ToDate;
  document.getElementById("valueTo").innerText = educationDetails.Degree;
}

function popupMessage() {
  document.getElementById("DisplayDetails").style.display = "none";
  document.getElementById("heading1").style.display = "none";
  document.getElementById("messagePopup").style.display = "block";
}

function redirect() {
  window.location.href = "./CreateAccount.html";
}
