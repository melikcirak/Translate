function UI() {
  this.outputImage = document.getElementById("outputImage");
  this.outputLanguage = document.getElementById("outputLanguage");
  this.outputWord = document.getElementById("outputWord");
  this.languageList = document.getElementById("language");
}

//Resim ve Dil değiştime
UI.prototype.changeUI = function() {
  this.outputImage.src = `images/${this.languageList.value}.png`;
  this.outputLanguage.innerHTML = this.languageList.options[
    this.languageList.options.selectedIndex
  ].textContent;
};
//Çevirilen kelimenin span'a yazdırılması
UI.prototype.displayTranslate = function(word) {
  this.outputWord.textContent = word;
};
