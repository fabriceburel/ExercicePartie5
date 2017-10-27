var CreationTableauLangages = function () {
  //déclarer un tableau de texte
  var languagesCode=[ 'Html', 'CSS', 'Java', 'PHP' ];
  return languagesCode;
}

var CreationTableauNombres = function () {
    //déclarer un tableau de nombres
    var arrayNumber=[ 0, 1, 2, 3, 4, 5 ];
    return arrayNumber;
}

var RemplacementElement = function (langages) {
  //écrase l'élément dans le tableau
  langages[2]='Javascript';
  return langages;
}

var AjoutElementLangages = function (langages) {
  //ajout d'élément à la fin du tableau
langages.push('Ruby','Python');
  return langages;
}

var AjoutElementNombres = function (nombres) {
  //ajout d'élément au début du tableau
  nombres.unshift(-2,-1);
  return nombres;
}

var SuppressionPremierElement = function (langages) {
  langages.shift();
  return langages;
}

var SuppressionDernierElement = function (langages) {
  langages.pop();
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  var reseaux_sociaux=reseaux_sociaux_chaine.split(',');
  return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
  var texte=langages.toString();
  return texte;
}

var TriTableau = function (reseaux_sociaux) {
  reseaux_sociaux.sort();
  return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
  reseaux_sociaux.reverse()
  return reseaux_sociaux;
}
