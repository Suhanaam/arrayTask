let taskArray=[]
 addTask=()=>
{    
    task=document.getElementById("taskText").value;
    if(task=="")
    {
      alert("Please , enter the task");
    }
    else{
    taskArray.push(task);
    display();
    document.getElementById("taskText").value="";
    }
   }

    display = () => {
        const list = document.getElementById("listTask");
        list.innerHTML = "";
      
        taskArray.forEach((item) => {
          const li = document.createElement("li");
          li.id="listItemTask"
          li.textContent = item;
          list.appendChild(li);
        });
      };

  deleteTask=()=>
{

   
   taskArray.pop();
   display();


}
