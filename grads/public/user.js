
// Will import the index object as a module later on
// Had trouble getting it to work.
const http = {
zFetch: async (method, url, json) => {
    return await (() => {
      method = method.toUpperCase();
      const Xhr = new XMLHttpRequest();
      let promise = new Promise((resolve, reject) => {
        if (!url && method) {
          reject();
        }

        switch (method) {
          case "POST" :
            json = JSON.stringify(json);
            Xhr.open(method, url, true);
            Xhr.setRequestHeader("Content-type", "application/json");
            Xhr.send(json);

            Xhr.onload = () => {
              const response = JSON.parse(Xhr.response);
              alert(response.message);
              setTimeout(() => {
                resolve(response.message);
                location.reload();
              }, 100);
            };

            break;
        case "PUT":
            json = JSON.stringify(json);
            Xhr.open(method, url, true);
            Xhr.setRequestHeader("Content-type", "application/json");
            Xhr.send(json);

            Xhr.onload = () => {
              const response = JSON.parse(Xhr.response);
              alert(response.message);
              setTimeout(() => {
                resolve(response.message);
                location.reload();
              }, 100);
            };          
            break;
        case "DELETE": 
            
            Xhr.open(method, url, true);
            Xhr.send();
            Xhr.onload = () => {
                const response = JSON.parse(Xhr.response);
                alert(response.message);
                setTimeout(() => {
                  resolve(response.message);
                  window.location.assign(location.href.slice(0, 24))
                }, 100);
              }; 
              break;
          default:
            Xhr.open("GET", url, true);
            Xhr.onload = () => {
              let response = JSON.parse(Xhr.response);
              resolve(response);
            };
            Xhr.send();
            break;
        }
      });
      return promise;
    })();

}
}

let editButton = document.getElementById("edit_button")
let deleteButton = document.getElementById("delete_button")
let homeButton = document.getElementById("home_button")
homeButton.addEventListener("click", goHome)
editButton.addEventListener("click", editMode)
deleteButton.addEventListener('click', deleteGraduate)
function goHome() {
  window.location.assign("http://localhost:3000/api/home")
}


function deleteGraduate() {
   let areYouSure = confirm("You are about to delete this account press cancel to stop.")
   if(areYouSure) {
       http.zFetch('DELETE', window.location.href)
       }
}

let editModeOn = false;
let profileElement = document.getElementById('graduate_profile')

function editMode() {
if(!editModeOn) {    
    for (elements of profileElement.children) {   
        console.log(elements.id)     
            switch(elements.id) {
                case 'avatar_div':
                    let inputElement1 = document.createElement("input");
                    inputElement1.style = 'background-color: black; margin-top: 20px; color: white;'
                    inputElement1.setAttribute("placeholder", "Set new avatar url")
                    inputElement1.setAttribute("name", "avatar") 
                    inputElement1.style.display = 'inline'
                    elements.append(inputElement1)
                    break;
                case 'jobtitle_div':
                    let inputElement2 = document.createElement("input");
                    inputElement2.style = 'background-color: black; margin-top: 20px; color: white;'
                    inputElement2.setAttribute("placeholder", "Edit Jobtitle")
                    inputElement2.setAttribute("name", "jobtitle") 
                    inputElement2.style.display = 'inline'
                    elements.append(inputElement2)                    
                    break;
                case 'education_div':
                    let textArea1 = document.createElement("textarea");
                    textArea1.style = 'background-color: black; margin-top: 20px; color: white;'
                    textArea1.setAttribute("placeholder", "Edit Education") 
                    textArea1.setAttribute("name", "education") 
                    textArea1.style.display = 'inline';
                    elements.append(textArea1)
                    break;
                case 'about_div':
                    let textarea2 = document.createElement("textarea");
                    textarea2.style = 'background-color: black; margin-top: 20px; color: white;'
                    textarea2.style.display = 'inline'
                    textarea2.setAttribute("placeholder", "Edit about")
                    textarea2.setAttribute("name", "about") 
                    elements.append(textarea2)
                    break;
                case 'contact_div':
                    let textArea3 = document.createElement("textarea");
                    textArea3.style = 'background-color: black; margin-top: 20px; color: white;'
                    textArea3.setAttribute("placeholder", "Add more contact information") 
                    textArea3.setAttribute("name", "contact") 
                    textArea3.style.display = 'inline';
                    elements.append(textArea3)
                    break;
                
                default: 
                    console.log('Something Isnt Right')
                    break;
            }
     } 
     editModeOn = true;
     let buttonSubmit = document.createElement('button')
     buttonSubmit.style.display = 'inline'
     buttonSubmit.style = ' margin: 0 auto; padding: 10px; font-size: 20px; width: 50%;'
     buttonSubmit.innerText = 'Submit'
     buttonSubmit.addEventListener("click", updateProfile)
     buttonSubmit.setAttribute("class", "header_buttons")
     profileElement.append(buttonSubmit)
     editButton.style.backgroundColor = 'red';
     editButton.innerText = 'Cancel?'
     deleteButton.style.display = 'inline'
    } else if(editModeOn) {
        for(elements of profileElement.children) {
        if(elements.lastElementChild) {
            let style = elements.lastElementChild.style

            if(style.display === 'inline') {
                editButton.style.backgroundColor = 'black';
                editButton.innerText = 'Edit'
                style.display = 'none'
                deleteButton.style.display = 'none'
                profileElement.lastElementChild.style.display = 'none'
            } else {
                editButton.style.backgroundColor = 'red';
                editButton.innerText = 'Cancel?'
                style.display = 'inline'
                deleteButton.style.display = 'inline'
                profileElement.lastElementChild.style.display = 'inline'
            }
            
        }
        }
    }
}

function updateProfile() {
  let data = {}
    for(elements of profileElement.children) {
       if(elements.lastElementChild) {
       let input = elements.lastElementChild
       if(input.value) {
        data[input.name] = input.value.trim()
       }
    }
   } 

   http.zFetch('PUT', window.location.href, data)
}