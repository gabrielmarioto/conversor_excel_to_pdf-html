const fs = require('fs');

var content;

fs.readFile('./user.json', { encoding: 'utf-8' }, (err, data) =>
{
    if (err)
    {
        console.log('Error while reading');
    }
    else
    {
        content = JSON.parse(data);
        console.log(content)
    }
});

// fs.writeFile('./archive.txt', "New Content", (err) =>
// {
//     if (err)
//     {
//         console.log('Error while saving');
//     }
// })