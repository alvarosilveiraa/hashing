const exec = require("child_process").execFile
  path = require("path");

class StorageModel {
  constructor() {
    this._path = path.join(__dirname, "../../../www/cs/teste.bat");
    this._parameters = [];
    exec(this._path, this._parameters, (err, data) => {
      if(err) return console.log(err);
      let output = data.split('\n');
      output.pop();

      console.log(output);
    })
  }
}

module.exports = StorageModel;
