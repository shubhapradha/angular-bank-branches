export default class BankService {
  constructor($http, APIUrl) {
    this.$http = $http;
    this.APIUrl = APIUrl;
  }

  getBankBranches(cityName) {
    return this.$http({method: 'GET', url: this.APIUrl + cityName});
  }
}

BankService.$inject = ['$http', 'APIUrl'];
