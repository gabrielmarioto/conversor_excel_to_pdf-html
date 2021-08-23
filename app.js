const Reader = require("./src/Models/Reader.js");
const Processor = require("./src/Models/Processor.js");
const Table = require("./src/Models/Table.js");

const leitor = new Reader();



async function main()
{
    var data = await leitor.Read("./user.csv");
    var dataProcess = Processor.Process(data);
    var users = new Table(dataProcess);

    console.log(users);
}

main();