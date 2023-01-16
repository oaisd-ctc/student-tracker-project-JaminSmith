var keySize = 256;
var iterations = 1000;
function access(protectedText, pass) {
    var salt = CryptoJS.enc.Hex.parse(protectedText.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(protectedText.substr(32, 32));
    var protected = protectedText.substring(64);
 
    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: keySize / 32,
        iterations: iterations,
    });
 
    var decrypted = CryptoJS.AES.decrypt(protected, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    }).toString(CryptoJS.enc.Utf8);
    return decrypted;
}
 
document.getElementById(
  "static-pass-form").addEventListener("submit", function (e) {
    e.preventDefault();
 
    var passphrase = document.getElementById("static-pass").value,
        // Add encrypt string of the Passphrase
        protectedText ="Encrypt Passphrase",
        protectedHMAC = protectedText.substring(0, 64),
        protectedHTML = protectedText.substring(64),
        decryptedHMAC = CryptoJS.HmacSHA256(
          protectedHTML, CryptoJS.SHA256(
            passphrase).toString()).toString();
    // If passphrase is wrong
    if (decryptedHMAC !== protectedHMAC) {
        alert("Bad passphrase!");
        return;
    }
 
    var plainHTML = access(protectedHTML, passphrase);
 
    document.write(plainHTML);
    document.close();
});