active();
submit();

function active() {
  const span = document.getElementsByTagName("span"); // get all span
  for (let i = 0; i < span.length; i++) {
    // loop through all span
    span[i].addEventListener("click", function (e) {
      // add event listener to each span
      e.target.classList.toggle("active"); // toggle class active
      toggle(e); // call toggle function
      if (e.target.classList.contains("active")) {
        // if target is active
        const value = e.target.innerHTML; // get value
        submit(value); // call submit function
      }
    });
  }
}

function toggle(e) {
  const active = document.querySelectorAll(".active"); // get all active
  const errorMsg = document.getElementById("errorMsg"); // get errorMsg
  errorMsg.innerHTML = ""; // set errorMsg
  for (let i = 0; i < active.length; i++) {
    // loop through all active
    if (e.target.classList.contains("active") && active[i] != e.target) {
      // if target is active and active is not target
      active[i].classList.remove("active"); // remove class active
    }
  }
}

function submit(value) {
  const active = document.getElementsByClassName("active"); // get all active

  const submit = document.getElementsByTagName("button")[0]; // get submit button
  submit.addEventListener("click", function (e) {
    // add event listener to submit button
    const errorMsg = document.getElementById("errorMsg"); // get errorMsg
    e.preventDefault(); // prevent default
    if (active.length > 0) {
      // if active is not empty
      const submit = document.getElementById("submit"); // get submit button
      submit.classList.add("hide"); // add class hide
      const thankfull = document.getElementById("thankfull"); // get thankfull
      thankfull.classList.add("show"); // add class show
      thankfull.classList.remove("hide"); // remove class hide
      thankfull.classList.add("animation"); // add class animation
      /**/
      const result = document.getElementById("result"); // get result
      result.innerHTML = value; // set result
    } else {
      errorMsg.innerHTML = "Please select at least one value !!!"; // set errorMsg
    }
  });
}
