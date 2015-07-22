class MainController {
  constructor($timeout, webDevTec, toastr, CSVParser) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1437591934346;
    this.toastr = toastr;

    this.activate($timeout, webDevTec);


    this.toJson = function () {
      var truc = this.json;
      CSVParser.toJson(this.csv).then((result) => {
        this.json = result;
      });
    };
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}

export default MainController;
