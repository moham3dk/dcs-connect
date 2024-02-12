// Function to convert extracurricular data to JSON format
function convertToJSON() {
  // Get the values of the extracurricular spreadsheet
  var range = extracurriculars.getDataRange();
  var values = range.getValues();

  // Shift once because the top row doesn't contain extracurricular info
  values.shift();

  // Create the JSON data
  var jsonData = values.map(function (row) {
    return {
      title: row[0],
      link: row[1],
      description: row[2],
      tags: row[3].split(', '),
      location: row[4],
      contact: [
        {
          name: row[5].split(' - ')[0],
          email: row[5].split(' - ')[1],
          phone: row[5].split(' - ')[2],
        },
      ],
    };
  });

  // Return the JSON data as a string with indentation for readability
  return JSON.stringify(jsonData, null, 2);
}
