var QRCode = require('qrcode');

for (let i = 0; i < 6; i++) {
  QRCode.toString(`${i}`, {type:'terminal'}, function (err, id) {
    console.log(id)
  });
}