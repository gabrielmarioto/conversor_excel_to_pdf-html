

class Processor
{

    static Process(data)
    {
        var rows = data.split("\r\n");
        var nRows = [];
        rows.forEach(element =>
        {
            var arr = element.split(",");
            nRows.push(arr);
        });

        return nRows;
    }
}

module.exports = Processor;