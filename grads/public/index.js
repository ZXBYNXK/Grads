//Index script for pug.

let signupButton = document.getElementById("sign_up"),
  signupForm = document.getElementById("form_box1"),
  jobTitle = document.getElementById("job_title"),
  password1 = document.getElementById("password1_div"),
  password2 = document.getElementById("password2_div"),
  signupSubmit = document.getElementById("signup_submit");

signupButton.addEventListener("click", showForm);
jobTitle.addEventListener("keypress", showPassword1);
password1.lastChild.addEventListener("keypress", showPassword2);

function showPassword1() {
  let style = password1.style;
  style.display = "unset";
}

function showPassword2() {
  let style = password2.style;
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

getGraduates = (async () => {
  const graduates = await fetch(`${window.location.href}/all`)
    .then(grads => {
      return grads.json();
    })
    .then(grads => {
      parent = document.getElementById("show_graduates");
      //-grads = JSON.parse(grads)
      grads.forEach(graduate => {
        //- console.log(graduate)
        let div = document.createElement("div"),
          img = document.createElement("img"),
          p = document.createElement("p");
        p2 = document.createElement("p");
        div.setAttribute("class", "hover_me");
        div.style = "margin: 0 auto; margin-top: 10px; width: 10%; padding: 20px;";
        img.setAttribute("src", graduate.avatar);
        img.style =
          "margin-top: 12px; border-radius: 12px; width: 120px; background-color: white;";
        p.innerText = `${graduate.firstname} ${graduate.lastname}`;
        p2.innerText = `Job Title: ${graduate.jobtitle}`;
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(p2);
        parent.appendChild(div);
      });
    })
    .catch(err => {
      return err;
    });
  return graduates;
})();

//XHR TO FETCH

function zFetch(method, url, json) {
  return (async () => {
    const Xhr = new XMLHttpRequest();
    switch (method) {
      case "POST":
        json = JSON.stringify(json);
        alert(json);

        //JSON.stringify(json);
        Xhr.open(method, url, true);
        Xhr.setRequestHeader("Content-type", "application/json");
               Xhr.send(json);

        Xhr.onload = () => {
          alert(4, Xhr.response);
        };

        break;

      default:
        Xhr.open("GET", url, true);
        Xhr.onload = () => {
          console.log(Xhr.responseText);
        };
        Xhr.send();
        break;
    }
  })();
}
const form = document.querySelector("form");

console.log(form);
form.addEventListener("submit", createForm);
form.addEventListener("formdata", sendForm);


function sendForm(ev) {
  const formData = ev.formData;
  let data = {};

  for (let vals of formData) {
    data[vals[0]] = vals[1];
  };
  zFetch("POST", "/api/home", data);
}

function createForm(ev) {
  ev.preventDefault();
  new FormData(form);
}
