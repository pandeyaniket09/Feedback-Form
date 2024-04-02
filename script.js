function getSelectedRadioValue(name) {
    let radioButtons = document.getElementsByName(name);
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            return radioButton.value;
        }
    }
    return null;
}

let submitBtn = document.querySelector(".btn");
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let Obj = {
        Employee_Fname: document.getElementById("employeeFirstName").value,
        Employee_Lname: document.getElementById("employeeLastName").value,
        Manager_Fname: document.getElementById("managerFirstName").value,
        Manager_Lname: document.getElementById("managerLastName").value,
        Task: document.getElementById("task").value,
        Task_ID: document.getElementById("taskId").value,
        Status: getSelectedRadioValue("status"),
        Additional_Notes: document.getElementById("additionalNotes").value,
        Instructions: document.getElementById("instructions").value
    };

    // Creating a div to display the data
    let displayDiv = document.getElementById('formDataDisplay');
    displayDiv.innerHTML = `<h2>Form Data:</h2>
                                <p>Employee First Name: ${Obj.Employee_Fname}</p>
                                <p>Employee Last Name: ${Obj.Employee_Lname}</p>
                                <p>Manager First Name: ${Obj.Manager_Fname}</p>
                                <p>Manager Last Name: ${Obj.Manager_Lname}</p>
                                <p>Task: ${Obj.Task}</p>
                                <p>Task ID: ${Obj.Task_ID}</p>
                                <p>Status: ${Obj.Status}</p>
                                <p>Additional Notes: ${Obj.Additional_Notes}</p>
                                <p>Instructions: ${Obj.Instructions}</p>`;
});