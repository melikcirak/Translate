function Translate(word, language) {
  this.apiKey =
    "trnsl.1.1.20190425T100524Z.d274aaf87662c42f.1609e34e5f23b0c8ff3527a152de62290ee4e9f2";
  this.word = word;
  this.language = language;
  this.xhr = new XMLHttpRequest();
}

Translate.prototype.wordTranslate = function(callback) {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${
    this.apiKey
  }&text=${this.word}&lang=${this.language}`;
  //Ajax işlemleri
  this.xhr.open("GET", url);
  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];
      callback(null, text);
    } else {
      callback("Bir hata oluştu", null);
    }
  };
  this.xhr.send();
};

//İnputlara girilen güncel değerleri alıcaz.
Translate.prototype.changeParameters = function(newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
