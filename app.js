const Reader = require("./src/Models/Reader.js");

const leitor = new Reader();



async function main()
{
    var data = await leitor.Read("./user.csv");
    console.log(data);
}

main();