var isImportant = false;
var isAsideHide = false;

function toggleImportant(){
    let icon = $(".iImportant");
    if(isImportant){
        icon.removeClass("fas").addClass("far");
        isImportant = false;
    }
    else{
        icon.removeClass("far").addClass("fas");
        isImportant = true;

    }
    

}

function showTaskInfo(){
    let aisde = $("aside")
    if(isAsideHide){
        aisde.hide()
        isAsideHide = false;
    }
    else{
        aisde.show();
        isAsideHide = true;
    }

}

/*function Task(title,due,location,description,participants,color){
    this.title = title;
    this.due = due;
    this.location = location;
    this.description = description;
    this.participants = participants;
    this.color = color;

}
*/

function clear(){
    $(".form input,textarea").val("");
    isImportant=true
    toggleImportant()

}

function saveTask(){
    let title = $("#txtTaskTitle").val();
    let due = $("#txtDue").val();
    let location = $("#txtLocation").val();
    let description = $("#txtDescription").val();
    let participants = $("#txtParticipants").val();
    let color = $("#txtColor").val();

    //validations
    //if no title, show error and get out
    //if(title==false)
    if(!title){
        alert("Error, empty titles are not allowed");
        return;
    }

    let userTask = new Task(isImportant, title, due, location, description, participants, color);

    $.ajax({
        type:"POST",
        url:"https://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(userTask),
        contentType: "application/json",

        success: function(response){
            console.log("Server says:", response)
            let savedTask = JSON.parse(response);  //object to string is stringify //string to object is parse

                displayTask(savedTask);  //display will wait until request successeds
                clear();

        },
        error: function(){
            console.log("Save Failed", details)
        }
    });

    
}

function displayTask(task){
    let syntax =`<div class="task" style="border:2px solid${task.color}">
        <div class="task-title">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <div class="task-middle">
            <label><i class="fas fa-map-marker-alt"></i> ${task.location}</label>
            <label><i class="far fa-clock"></i> ${task.due}</label>
        </div>
     </div>`;

    $(".task-container").append(syntax)
}

function fetchTasks(){
  // get =>  "https://fsdiapi.azurewebsites.net/api/tasks"   //same as POST but no last /
  $.ajax({
    url:"https://fsdiapi.azurewebsites.net/api/tasks",
    type: "GET",
    success: function(response){
       // console.log("Server says:", response)
        let allTasks=JSON.parse(response)
        for(let i=0; i< allTasks.length;i++){
            let task = allTasks[i];
            if (task.name === "Miles"){
                 console.log(task)
                 displayTask(task);
            }
            //if the user on the task is equal to my name then i will display task
        }
    },
    error: function(){
        console.log("Retrieved failed", details)
    }
});

}

function deleteTasks(){
    $.ajax({
        type: "DELETE",
        url:"https://fsdiapi.azurewebsites.net/api/tasks/clear/Miles",

        success: function(){
            $(".task-container").html("");
        }

    })
}

function testRequest(){
    $.ajax({
        url:"https://restclass.azurewebsites.net/api/test",
        type: "GET",
        success: function(response){
            console.log("Server says:", response)
        },
        error: function(details){
            console.log("Req failed", details)
        }
    });
}

function init(){
    $("aside").hide()

    //load data
    fetchTasks();
    //hook event
    $("#btnSave").click(saveTask);
    
    $(".iImportant").click(toggleImportant)

    $("#btnShow").click(showTaskInfo)

}
window.onload = init;
