// Script for index.pug.

let signupButton = document.getElementById("signup_button"),
  searchButton = document.getElementById("search_button"),
  headlineButton = document.getElementById("headline_button"),
  searchDiv = document.getElementById("search_div"),
  headlineDiv = document.getElementById("headline"),
  searchInput = document.getElementById("search_input"),
  signupForm = document.getElementById("form_box1"),
  jobTitle = document.getElementById("job_title"),
  imageInput = document.getElementById("extend_div"),
  aboutInput = document.getElementById("extend2_div"),
  educationInput = document.getElementById("extend3_div"),
  signupSubmit = document.getElementById("signup_submit");

signupButton.addEventListener("click", showForm);
jobTitle.addEventListener("keypress", showImageInput);
imageInput.addEventListener("click", showAboutInput);
imageInput.addEventListener("keypress", showAboutInput);
aboutInput.addEventListener("keypress", showEducationInput)
searchButton.addEventListener("click", showSearch);
searchInput.addEventListener("keypress", sortGrads);
headlineButton.addEventListener("click", showHeadline);
function showImageInput() {
  let style = imageInput.style;
  style.display = "unset";
}

function showHeadline() {
  let style = headlineDiv.style;
  if (style.display === "none") {
    style.display = "block";
    style.textAlign = "center";
  } else {
    style.display = "none";
  }
}
function showEducationInput() {
  let style = educationInput.style;
  style.display = "unset"
}
function showAboutInput() {
  let style = aboutInput.style;
  style.display = "unset";
}

function showForm() {
  let style = signupForm.style;
  if (style.display === "none") {
    style.display = "flex";
  } else {
    style.display = "none";
  }
}
function sortGrads() {
  let value = searchInput.value;
  let graduates = document.getElementById("show_graduates").childNodes;
  for (let i = 1; i < graduates.length; i++) {
    if (graduates[i].innerText.toUpperCase().includes(value.toUpperCase())) {
      graduates[i].style.display = "inline";
    } else {
      graduates[i].style.display = "none";
    }
  }
}

function showSearch() {
  let style = searchDiv.style;
  if (style.display === "none") {
    style.display = "flex";
  } else {
    style.display = "none";
  }
}

const getGraduates = (async () => {
  const graduates = await zFetch('GET', `${location.href}/all`)
    .then(grads => {

      parent = document.getElementById("show_graduates");
      grads.reverse().forEach(graduate => {
        let div = document.createElement("div"),
          img = document.createElement("img"),
          breakSt = document.createElement("hr"),
          a = document.createElement("a"),
          p = document.createElement("h4"),
        p2 = document.createElement("h4"),
        p3 = document.createElement("h4");
        div.setAttribute("class", "hover_me");
        div.style =
          "margin: 0 auto; margin-top: 20px; margin-bottom: 20px; width: 15%;";
        img.setAttribute("src", graduate.avatar);
        img.style =
          "border-radius: 12px; width: 88%; background-color: white; margin: 0 auto;";
        p.innerText = `${graduate.firstname} ${graduate.lastname}`;
        p2.innerText = `Job Title:`;
        a.style = 'text-decoration: none;'
        a.setAttribute("href", `http://localhost:3000/api/graduates/${graduate._id}`)
        if(graduate.jobtitle === '') {
          p3.innerText = 'N/A'
        }else {
          p3.innerText = graduate.jobtitle
        }
        
        a.appendChild(img)
        div.appendChild(a);
        div.appendChild(p);
        div.appendChild(breakSt)
        div.appendChild(p2);
        div.appendChild(p3);
        div.className = `hover_me`;
        parent.appendChild(div);
      });
    })
    .catch(err => {
      return err;
    });
  return graduates;
})();

//XHR TO FETCH

async function zFetch(method, url, json) {
  return await (() => {
    method = method.toUpperCase()
    const Xhr = new XMLHttpRequest();
    let promise = new Promise((resolve, reject) => {
    
      if(!url && method){
        reject()
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
            resolve(response.message)
            location.reload();
          }, 100);
        };

        break;

      default:
        Xhr.open("GET", url, true);
        Xhr.onload = () => {
          let response = JSON.parse(Xhr.response)
          resolve(response);
        };
        Xhr.send();
        break;
    }
  })
  return promise
  })();
}
const form = document.querySelector("form");

form.addEventListener("submit", createForm);
form.addEventListener("formdata", sendForm);

function sendForm(ev) {
  const formData = ev.formData;
  let data = {};

  for (let vals of formData) {
    if(vals[1]){
    data[vals[0]] = vals[1].trim();
  }
}
  zFetch("PoST", "/api/home", data);
  form.reset()
}

function createForm(ev) {
  ev.preventDefault();
  new FormData(form);
}
