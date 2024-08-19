function convertToJSON(sheet) {
  var range = sheet.getDataRange();
  var values = range.getValues();

  values.shift();

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

  return JSON.stringify(jsonData, null, 2);
}
