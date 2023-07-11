let baseURL = "http://api.login2explore.com:5577";
let IRL = "/api/irl";
let IML = "/api/iml";
let dbName = "COLLEGE-DB";
let relName = "PROJECT-TABLE";
let conToken = "90933022|-31949325268071135|90949772";

$(document).ready(function () {
  $("#project-id").focus();
});

function validateAndGetFormData() {
  let project_id, project_name, assigned_to, assignment_date, deadline;
  project_id = $("#project-id").val();
  project_name = $("#project-name").val();
  assigned_to = $("#assigned-to").val();
  assignment_date = $("#assignment-date").val();
  deadline = $("#deadline").val();

  if (project_id === "") {
    alert("Project-ID is required");
    $("#project-id").focus();
    return "";
  }
  if (project_name === "") {
    alert("Project-Name is required");
    $("#project-name").focus();
    return "";
  }
  if (assigned_to === "") {
    alert("Assigned-To is required");
    $("#assigned-to").focus();
    return "";
  }
  if (assignment_date === "") {
    alert("Assignment-Date is required");
    $("#assignment-date").focus();
    return "";
  }
  if (deadline === "") {
    alert("Deadline is required");
    $("#deadline").focus();
    return "";
  }

  return JSON.stringify({
    project_id: project_id,
    project_name: project_name,
    assigned_to: assigned_to,
    assignment_date: assignment_date,
    deadline: deadline,
  });
}

function saveData() {
  var jsonStr = validateAndGetFormData();
  if (jsonStr === "") {
    return;
  }
  var putReqStr = createPUTRequest(conToken, jsonStr, dbName, relName);
  jQuery.ajaxSetup({ async: false });
  var resultObj = executeCommandAtGivenBaseUrl(putReqStr, baseURL, IML);
  jQuery.ajaxSetup({ async: true });
  resetForm();
  $("#project-id").focus();
}

function updateData() {
  let jsonChange = validateAndGetFormData();
  if (jsonChange === "") {
    return;
  }
  var updateRequest = createUPDATERecordRequest(
    conToken,
    jsonChange,
    dbName,
    relName,
    localStorage.getItem("recno")
  );
  jQuery.ajaxSetup({ async: false });
  var resObj = executeCommandAtGivenBaseUrl(updateRequest, baseURL, IML);
  jQuery.ajaxSetup({ async: true });
  resetForm();
  $("#project-id").focus();
}

function resetForm() {
  $("#project-id").val("");
  $("#project-name").val("");
  $("#assigned-to").val("");
  $("#assignment-date").val("");
  $("#deadline").val("");
  $("#project-id").prop("disabled", false);
  $("#save").prop("disabled", true);
  $("#change").prop("disabled", true);
  $("#reset").prop("disabled", true);
  $("#project-id").focus();
}

function getProject() {
  var proIdJsonObj = getProIdAsJsonObj();
  var getRequest = createGET_BY_KEYRequest(conToken, dbName, relName, proIdJsonObj);
  jQuery.ajaxSetup({ async: false });
  var resObj = executeCommandAtGivenBaseUrl(getRequest, baseURL, IRL);
  jQuery.ajaxSetup({ async: true });

  if (resObj.status === 400) {
    $("#save").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#project-name").focus();
  } else if (resObj.status === 200) {
    fillData(resObj);
    $("#project-id").prop("disabled", true);
    $("#change").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#project-name").focus();
  }
}

function fillData(jsonObj) {
  saveRecNoToLS(jsonObj);
  var record = JSON.parse(jsonObj.data).record;
  $("#project-name").val(record.project_name);
  $("#assigned-to").val(record.assigned_to);
  $("#assignment-date").val(record.assignment_date);
  $("#deadline").val(record.deadline);
}

function saveRecNoToLS(jsonObj) {
  let lvData = JSON.parse(jsonObj.data);
  localStorage.setItem("recno", lvData.rec_no);
}

function getProIdAsJsonObj() {
  var proId = $("#project-id").val();
  var jsonStr = {
    project_id: proId,
  };
  return JSON.stringify(jsonStr);
}

