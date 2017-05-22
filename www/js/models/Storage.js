const exec = require("child_process").execFile
  , fs = require("fs")
  , path = require("path");

class StorageModel {
  constructor() {
    this._pathCsharp = path.join(__dirname, "../../cs");
    this._pathDatabase = path.join(__dirname, "../../db");
  }

  insert(car) {
    return new Promise((resolve, reject) => {
      let parameters = ["--insert", car.plate, car.model, car.year];
      exec(path.join(this._pathCsharp, "storage.bat"), parameters, (err, data) => {
        if(err) return reject(err);
        resolve(data);
      })
    })
  }

  getOne(plate) {
    return new Promise((resolve, reject) => {
      let parameters = ["--one", plate];
      exec(path.join(this._pathCsharp, "storage.bat"), parameters, (err, data) => {
        if(err) return reject(err);
        resolve({
          i: '0',
          j: '1',
          plate: "aaa",
          model: "bbb",
          year: "2000"
        })
      })
    })
  }

  //get all
  readDatabase(callback) {
    fs.readFile(path.join(this._pathDatabase, "storage.txt"), "utf8", (err, data) => {
      if(err) return callback(err);
      let output = data.split('\n')
        , storage = [];
      for(let i = 0; i < output.length - 1; i++) {
        let parse = output[i].split(',');
        if(!parse[0] || !parse[1] || !parse[2] || !parse[3]) continue;
        if(!storage[parse[0]]) storage[parse[0]] = [];
        try {
          storage[parse[0]].push({
            plate: parse[1],
            model: parse[2],
            year: parse[3]
          })
        }catch(e) {}
      }
      callback(null, storage);
    })
  }
}

module.exports = StorageModel;
