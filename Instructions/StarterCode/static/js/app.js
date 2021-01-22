// from data.js
var tableData = data;
console.log(data);

// Identify the table and tbody
var tbody = d3.select('#ufo-table>tbody');

// Create function to generate and populate the table
function buildTable(tableData){
    // Dynamically build table
    tableData.forEach(iteams => {
        var row = tbody.append('tr');

        Object.values(iteams).forEach(val => {
            row.append('td').text(val);        
        });
    })
}


//Could not get this filter function to work
// function filterTable(elem){

//     var changedElem = d3.event.target;
//     var elemName = changedElem.id;
//     var elemValue =changedElem.value;

//     var date = d3.select('#datetime').properties.value;
//     var city = d3.select('#city').properties.value;
//     var state = d3.select('#state').properties.value;
//     var country = d3.select('#country').properties.value;
//     var shape = d3.select('#shape').properties.value;

//     console.log(city, state, country, shape)

//     console.log(elemName);
//     console.log(elemValue);

//     filterFields= {
//         'date': date,
//         'city': city,
//         'state':state,
//         'country':country,
//         'shape': shape
//     }

//     Object.defineProperties(filterFields).forEach(([key, val]) => {
//         if(val == ''){
//             delete filterFields[key];
//         }
//     });

//     console.log(filterFields);

//     filteredData = tableData.filter(rec => {
//         rec[elemName] == elemValue
//     });

//     tbody.html('');

//     buildTable(filteredData);

// }

// filter for Datetime
function filterTable(elem){
    //console.log('filter table event');
        
    //var changedElem = d3.event.target;
    var dateElem = d3.select('#datetime');   
    var filterDate = dateElem.property('value'); 
    
    filteredData = tableData.filter(rec => rec['datetime'] == filterDate);

    console.log(filteredData);

    // Clear out the tbody
    tbody.html('');

    // Rebuild the filtered table using the buildTable function 
    buildTable(filteredData);
}

// Identify web elements on the page
btn = d3.select('#filter-btn');
datetimefield = d3.select('#datetime')
cityfield = d3.select('#city')
statefield = d3.select('#state')
countryfield = d3.select('#country')
shapefield = d3.select('#shape')
// Add event listeners to the web elements
btn.on('click', filterTable);
datetimefield.on('change', filterTable);
cityfield.on('change', filterTable);
statefield.on('change', filterTable);
countryfield.on('change', filterTable);
shapefield.on('change', filterTable);
// Call the function to initially load the table
 buildTable(tableData);