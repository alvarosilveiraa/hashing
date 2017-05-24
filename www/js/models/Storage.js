const exec = require("child_process")
  , fs = require("fs")
  , path = require("path");

class StorageModel {
  constructor() {
    this._pathCsharp = path.join(__dirname, "../../cs");
    this._pathDatabase = path.join(__dirname, "../../db");
    this._database = path.join(this._pathDatabase, "storage.txt");
    this._exeFile = path.join(this._pathCsharp, "Hashing.exe");
  }

  insert(car) {
    return new Promise((resolve, reject) => {
      let parameters = ["--insert", this._database, car.plate, car.model, car.year];
      exec.execFile(this._exeFile, parameters, (err, data) => {
        if(err) return reject(err);
        resolve(parseInt(data));
      })
    })
  }

  getOne(plate) {
    return new Promise((resolve, reject) => {
      let parameters = ["--one", this._database, plate];
      exec.execFile(this._exeFile, parameters, (err, data) => {
        if(err) return reject(err);
        let output = null;
        if(data) {
          let parse = data.split('\n');
          output = {
            i: parse[0],
            j: parse[1],
            plate: parse[2],
            model: parse[3],
            year: parse[4]
          }
        }
        resolve(output);
      })
    })
  }

  getAll() {
    return new Promise((resolve, reject) => {
      let parameters = ["--all", this._database];
      exec.execFile(this._exeFile, parameters, (err, data) => {
        if(err) return reject(err);
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
        resolve(storage);
      })
    })
  }

  openDatabase() {
    exec.exec("start storage.txt", {
      cwd: this._pathDatabase
    })
  }
}

module.exports = StorageModel;
