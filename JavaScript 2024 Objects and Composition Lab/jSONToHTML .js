// function fromJSONToHTMLTable(input) {
//     let finalStr = '<table>'
//     const arr = JSON.parse(input)
//     const keys = Object.keys(arr[0]).map((key) => key.trim())
//     let currentString = ''
//     for (let i = 0; i < keys.length; i++) {
//         currentString += `<th>${keys[i]}</th>`

//     }
//     finalStr += '\n    <tr>' + currentString
//     finalStr += '</tr>'
//     currentString = ''
//     for (let i = 0; i < arr.length; i++) {
//         const obj = arr[i];
//         for (const key in obj) {
//             currentString += `<td>${obj[key]}</td>`
//         }
//         finalStr += '\n    <tr>' + currentString
//         finalStr += '</tr>'
//         currentString = ''
//     }
//     finalStr += '\n</table>'
//     console.log(finalStr);
// }

function fromJSONToHTMLTable(input) {
    // Function to escape HTML entities in text
    function escapeHTML(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // Parse the input JSON string
    const arr = JSON.parse(input);
    let finalStr = '<table>';

    // Generate the table header row
    const keys = Object.keys(arr[0]).map((key) => key.trim());
    let headerRow = keys.map((key) => `<th>${escapeHTML(key)}</th>`).join('');
    finalStr += '\n    <tr>' + headerRow + '</tr>';

    // Generate the table data rows
    for (const obj of arr) {
        let dataRow = keys.map((key) => `<td>${escapeHTML(obj[key].toString().trim())}</td>`).join('');
        finalStr += '\n    <tr>' + dataRow + '</tr>';
    }

    finalStr += '\n</table>';

    // Print the final HTML table
    console.log(finalStr);
}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)