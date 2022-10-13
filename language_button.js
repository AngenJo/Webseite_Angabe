function button_toggle() {
  arrow.classList.toggle("arrow_down");
  arrow.classList.toggle("arrow_up");
  var languages = document.querySelector("section.languages");
  languages.classList.toggle("language_opened");
  window.scrollTo(0, document.body.scrollHeight);
}

