export const bank = {
  template: require('./bank.html'),
  controller: ['$scope', 'BankService', 'APIUrl', BankController]
};

BankController.$inject = ['$scope', 'BankService'];

function BankController($scope, BankService) {
  $scope.cityList = [{name: 'Kolkatta', id: 'KOLKATTA'},
                     {name: 'Bangalore', id: 'BANGALORE'},
                     {name: 'Mumbai', id: 'MUMBAI'},
                     {name: 'Chennai', id: 'CHENNAI'},
                     {name: 'Delhi', id: 'DELHI'}];
  $scope.selectedOption = $scope.cityList[0];

  function getData() {
    $scope.banks = '';
    $scope.loading = true;

    BankService
      .getBankBranches($scope.selectedOption.id)
      .then(response => {
        $scope.banks = response.data;
        $scope.loading = false;
        return response;
      })
      .catch(error => {
        $scope.errMsg = error;
      });
  }

  getData();

  $scope.onChange = () => {
    getData();
  };
}
