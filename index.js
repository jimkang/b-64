var base64Img = require('base64-img');

if (process.argv.length < 3) {
  console.log('Usage: b-64 <path to image>');
  process.exit();
}

var imagePath = process.argv[2];

base64Img.base64(imagePath, writeBase64Data);

function writeBase64Data(error, data) {
  if (error) {
    console.error(error);
  }
  else {
    process.stdout.write(data);
  }
}
