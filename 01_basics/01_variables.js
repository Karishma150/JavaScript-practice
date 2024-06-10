const accountId =144553;
let accountEmail ="karishma@google.com";
var accountPassword = "12345";
accountCity = "Jodhpur" ;
let accountState; //output- undefined

//accountId=2; It will give error of "cannot assign to constant variable"
accountEmail ="km@gm.com";
accountPassword ="343434434";
accountCity = "Mumbai";

// to display output
console.log(accountId);

// to display data in tabular form
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
