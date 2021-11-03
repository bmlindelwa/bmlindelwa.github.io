window.onload = function(){
    
    var btn = document.getElementById('createacc');
    btn.onclick = bankingAccountsModule.accountData;

   
};

var bankingAccountsModule = (function(){
    //private array to contain accounts data.
    var accountInfoList = [];

    //private function that cannot be accessed outside the module.
    function bankAccountInfo(){
        var accName = document.getElementById('accname');
        var depAmt = document.getElementById('deposit');
        
        return  {
            accountName: accName.value,
            depositAmount: depAmt.value
        };
    }

    //public function that will be used as the entry point to the module
    function createAccountHandler(){
        var newBankAcount = bankAccountInfo();
        accountInfoList.push({accountName: newBankAcount.accountName, depositAmount: newBankAcount.depositAmount});
       
        var txtArea = document.getElementById('txtarea');
        var data = "";
        accountInfoList.forEach(function(element){
            data += "Account name: "+element.accountName +"  Balance: "+element.depositAmount+"\n";
        });
        txtArea.innerHTML = data;
    }

    //return object literal of the public function.
    return {
        accountData: createAccountHandler
    };
})();