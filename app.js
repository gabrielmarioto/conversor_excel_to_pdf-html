const Reader = require("./src/Models/Reader.js");
const Processor = require("./src/Models/Processor.js");
const Table = require("./src/Models/Table.js");
const HTMLParser = require("./src/Models/HTMLParser.js");
const Writer = require("./src/Models/Writer.js");
const PDFWriter = require("./src/Models/PDFWriter.js");

const leitor = new Reader();
const escritor = new Writer();


async function main()
{
    var data = await leitor.Read("./user.csv");
    var dataProcess = Processor.Process(data);
    var users = new Table(dataProcess);

    var html = await HTMLParser.Parse(users);

    escritor.writer(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".pdf", html);
}

main();