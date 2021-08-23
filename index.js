const fs = require('fs');

fs.readFile('./archive.txt', { encoding: 'utf-8' }, (err, data) =>
{
    if (err)
    {
        console.log('Error');
    }
    else
    {
        console.log(data);
    }
});

fs.writeFile('./archive.txt', "New Content", (err) =>
{
    if (err)
    {
        console.log('Error while saving');
    }
})