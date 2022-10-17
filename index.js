
let button = document.getElementById("submit")

button.addEventListener("click", () => {
    alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია")
})

function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
