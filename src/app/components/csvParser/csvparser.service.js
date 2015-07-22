class CSVParser {
  constructor($q) {
    'ngInject';
    this.$q = $q;
  }


  toJson(csv) {
    csv = csv.split('\n');
    var entete = csv[0].split(";");
    csv.splice(0, 1);
    console.log(csv);
    var json = [];
    angular.forEach(csv, (ligne) => {
      var datas = ligne.split(";");
      var obj = {};
      angular.forEach(entete, (colonne, index) => {
        console.log(index);
        obj[colonne] = datas[index];
      })
      json.push(obj);
    })
    return this.$q.when(json);
  }
}

export default CSVParser;
