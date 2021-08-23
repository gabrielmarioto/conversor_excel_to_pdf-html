var ejs = require('ejs');
var path = require('path');

class HTMLParser
{

    static async Parse(table)
    {
        try
        {
            return await ejs.renderFile("./table.ejs", { header: table.header, rows: table.rows });
        } catch (e)
        {
            console.log(e)
        }

    }
}

module.exports = HTMLParser;