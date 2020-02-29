const index = {
  elements: {
    signupButton: document.getElementById("signup_button"),
    searchButton: document.getElementById("search_button"),
    headlineButton: document.getElementById("headline_button"),
    searchDiv: document.getElementById("search_div"),
    headlineDiv: document.getElementById("headline"),
    searchInput: document.getElementById("search_input"),
    signupForm: document.getElementById("form_box1"),
    jobTitle: document.getElementById("job_title"),
    imageInput: document.getElementById("extend_div"),
    aboutInput: document.getElementById("extend2_div"),
    educationInput: document.getElementById("extend3_div"),
    signupSubmit: document.getElementById("signup_submit")
  },

  methods: {
    show: {
      imageInput: () => {
        let style = index.elements.imageInput.style;
        style.display = "unset";
      },
      educationInput: () => {
        let style = index.elements.educationInput.style;
        style.display = "unset";
      },

      aboutInput: () => {
        let style = index.elements.aboutInput.style;
        style.display = "unset";
      },

      headline: () => {
        let style = index.elements.headlineDiv.style;
        if (style.display === "none") {
          style.display = "block";
          style.textAlign = "center";
        } else {
          style.display = "none";
        }
      },
      graduateForm: () => {
        let style = index.elements.signupForm.style;
        if (style.display === "none") {
          style.display = "flex";
        } else {
          style.display = "none";
        }
      },
      search: () => {
        let style = index.elements.searchDiv.style;
        if (style.display === "none") {
          style.display = "flex";
        } else {
          style.display = "none";
        }
      }
    },
    search: {
      grads: () => {
        let value = searchInput.value;
        let graduates = document.getElementById("show_graduates").childNodes;
        for (let i = 1; i < graduates.length; i++) {
          if (
            graduates[i].innerText.toUpperCase().includes(value.toUpperCase())
          ) {
            graduates[i].style.display = "inline";
          } else {
            graduates[i].style.display = "none";
          }
        }
      }
    },
    http: {
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
  }
};

// Destructuring index object
const { elements, methods } = index;

// Destructuring elements object from the result of index
const {
  signupButton,
  jobTitle,
  imageInput,
  aboutInput,
  searchButton,
  searchInput,
  headlineButton
} = elements;

// Destyructuring methods object from the result of index
const { show, search, http } = methods;

signupButton.addEventListener("click", show.graduateForm);
jobTitle.addEventListener("keypress", show.imageInput);
imageInput.addEventListener("click", show.AboutInput);
imageInput.addEventListener("keypress", show.aboutInput);
aboutInput.addEventListener("keypress", show.educationInput);
searchButton.addEventListener("click", show.search);
searchInput.addEventListener("keypress", search.grads);
headlineButton.addEventListener("click", show.headline);

function showHideElement(elementId, displayType, className) {
  let element;
  [elementId, displayName, className] = arguments;
  console.log(10, elementId, displayName, className);
  if (elementId) {
    element = document.getElementById(elementId);
  } else if (className) {
    element = document.getElementsByClassName(className);
  }

  if (element) {
    let style = element.style;
    if (style.display != "none") {
      style.display = "none";
    } else {
      style.display = displayType;
    }
  }

  console.log(arguments);
}

const getGraduates = (async () => {
  const graduates = await http
    .zFetch("GET", `${location.href}/all`)
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
        a.style = "text-decoration: none;";
        a.setAttribute(
          "href",
          `http://localhost:3000/api/graduates/${graduate._id}`
        );
        if (graduate.jobtitle === "") {
          p3.innerText = "N/A";
        } else {
          p3.innerText = graduate.jobtitle;
        }

        a.appendChild(img);
        div.appendChild(a);
        div.appendChild(p);
        div.appendChild(breakSt);
        div.appendChild(p2);
        div.appendChild(p3);
        div.className = `hover_me`;
        parent.appendChild(div);
      });
    })
    .catch(err => {
      return err;
    });
  console.log(getGraduates);
  return graduates;
})();

const form = document.querySelector("form");

form.addEventListener("submit", createForm);
form.addEventListener("formdata", sendForm);

function sendForm(ev) {
  const formData = ev.formData;
  let data = {};

  for (let objects of formData) {
    const [key, value] = objects;
    value = value.trim()
    switch (key) {
      case "firstname": 
      case "lastname":
      case 'jobtitle':
        if(value.length > 1) {
        data[key] = value;
        } else {
          data[key] = 'N/A'
        }
        break;
      case "email":
      case "about":
      case "education":
      case "avatar":
        if(value.length > 5) {
          data[key] = value;
          } else {
            data[key] = 'N/A'
          }        
        break;
      default:
        console.log('Something didnt pass, un authorized keys.')
    }
  }
  http.zFetch("PoST", "/api/home", data);
  form.reset();
}

function createForm(ev) {
  ev.preventDefault();
  new FormData(form);
}
