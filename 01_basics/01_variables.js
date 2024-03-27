const accountId = 28930
let accountEmail = "Pragati@gmail.com"
var accountPassword = 12345
accountCity = "Jaipur"

// accountId=2 not allowed cz const can't br changed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])