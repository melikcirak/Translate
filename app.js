eventListners();
function eventListners() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);
  document.getElementById("language").onchange = function() {
    //Arayüz İşlemleri
    console.log("Event");
    ui.changeUI();
  };
}

const translate = new Translate(
  document.getElementById("word").value,
  document.getElementById("language").value
);
const ui = new UI();
function translateWord(e) {
  //İnputlara girilen güncel değerleri alıcaz.
  translate.changeParameters(
    document.getElementById("word").value,
    document.getElementById("language").value
  );
  //Err,response
  translate.wordTranslate(function(err, response) {
    if (err) {
      console.log(err);
    } else {
      ui.displayTranslate(response);
    }
  });

  e.preventDefault();
}
