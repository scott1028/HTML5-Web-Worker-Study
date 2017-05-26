'use strict';

self.onmessage = function(e){
    console.log(e);
    self.postMessage('sent by worker!!!');
};
