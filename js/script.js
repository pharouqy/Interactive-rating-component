active();
submit();

function active() {
  const span = document.getElementsByTagName("span");
  for (let i = 0; i < span.length; i++) {
    span[i].addEventListener("click", function (e) {
      this.classList.toggle("active");
      const spanActive = document.getElementsByClassName("active");
      console.log(spanActive.length);
      if (spanActive.length === 1) {
        submit(e.target.innerHTML);
      } else {
        alert("Please select at least one option");
        window.location.reload();
      }
    });
  }
}

function submit(value) {
  const active = document.getElementsByClassName("active");

  const submit = document.getElementsByTagName("button")[0];
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.value);
    if (active.length > 0) {
      const submit = document.getElementById("submit");
      submit.classList.add("hide");
      const thankfull = document.getElementById("thankfull");
      thankfull.classList.add("show");
      thankfull.classList.remove("hide");
      thankfull.classList.add("animation");
      /**/
      const result = document.getElementById("result");
      result.innerHTML = value;
    } else {
      alert("Please select at least one option");
    }
  });
}
