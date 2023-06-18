let employee=[];

function addEmployee(){
    let name = document.getElementById("name").value;
    let profession = document.getElementById("prof").value;
    let age = document.getElementById("age").value;
    if(name!="" && prof!="" && age!=""){
        document.getElementById("msg").innerHTML = "Success : Emplyee Added!";
        document.getElementById("msg").className = "success";
        let obj = {id:employee.length+1,name:name,profession:profession,age:age};
        employee.push(obj);
        tableCreate();
    }
    else{
        document.getElementById("msg").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById("msg").className = "error";
    }
}

function tableCreate(){
    let tbl= document.createElement('table');
    for(let i=0;i<employee.length;i++){
        let tr = document.createElement('tr');
        tbl.appendChild(tr);

        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(employee[i].id+"."));
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode("Name : "+employee[i].name));
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode("Profession: "+employee[i].profession));
        tr.appendChild(td3);
        let td4 = document.createElement('td');
        td4.appendChild(document.createTextNode("Age:"+employee[i].age));
        tr.appendChild(td4);   
        
        let button = document.createElement('input');
        button.type="submit";
        button.value="Delete User";
        button.onClick=function () {
            del(employee[i].id);
          };
        button.className="delete";
        tbl.appendChild(button);
    }

    document.getElementById("table").innerHTML="";
    document.getElementById("table").appendChild(tbl);

}

function del(id){
    employee.splice(id,1);
    console.log(id);
    tableCreate();
    
}