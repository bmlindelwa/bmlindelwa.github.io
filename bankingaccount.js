
window.onload = function(){
    var accountInfoList = [];
    var btn = document.getElementById('createacc');
    btn.onclick = createAccountHandler;

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

    function bankAccountInfo(){
        var accName = document.getElementById('accname');
        var depAmt = document.getElementById('deposit');
        
        return  {
            accountName: accName.value,
            depositAmount: depAmt.value
        };
    }
};