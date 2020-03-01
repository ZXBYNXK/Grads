
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
          case "POST":
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

        case "UPDATE":
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


document.getElementById("home_button").addEventListener("click", goHome)
document.getElementById("edit").addEventListener("click", editMode)
function goHome() {
  window.location.assign("http://localhost:3000/api/home")
}

var editOn = false;  

function editMode() {
  
    let profileElement = document.getElementById("graduate_profile");
    
    if(!editOn){
        
    for (elements of profileElement.children) {        
            switch(elements.id) {
                case 'avatar_div':
                    break;
                case 'jobtitile_div':
                    break;
                case 'education_div':
                    break;
                case 'about_div':
                    break;
                case 'contact_div':
                    break;
                default: 
                    console.log('Something Isnt Right')
                    break;
            }
     }

     let buttonSubmit = document.createElement('button')
     buttonSubmit.innerText = 'Submit'
     profileElement.append(buttonSubmit)
            editOn = true;
    }
}