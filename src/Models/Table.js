

class Table
{
    constructor(arr)
    {
        this.header = arr[0];
        arr.shift(); //remove header
        this.rows = arr;
    }


}

module.exports = Table;