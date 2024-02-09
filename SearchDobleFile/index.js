const walk = require("walk")
const path = require("path")

const fileNameSizeCount = {}; //{size: path}


(function () {
  'use strict';

  var walk = require('walk');
  var fs = require('fs');
  var options;
  var walker;

  // To be truly synchronous in the emitter and maintain a compatible api,
  // the listeners must be listed before the object is created
  options = {
    listeners: {
      names: function (root, nodeNamesArray) {
        nodeNamesArray.sort(function (a, b) {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        });
      },
      file: function (root, fileStats, next) {
        const name = fileStats.name
        const size = fileStats.size
        const p = path.join(__dirname,root.slice(2),name)

        if(size in fileNameSizeCount){
          console.log('Potential duplicate file found')
          console.log(p)
          console.log(fileNameSizeCount[size])
          console.log('\n')
        }else {
          fileNameSizeCount[size] = p
        }

        next();
        
      }
    },
  };

walk.walkSync('./', options);

  console.log('all done');
})();