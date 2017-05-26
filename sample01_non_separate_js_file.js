'use strict';

// JavaScript Multi-Thread 替代方案

var worker = new Worker(window.URL.createObjectURL(new Blob([`
	importScripts();

    self.onmessage = function(e){
        console.log(e);
        self.postMessage('sent from worker');
    };
`], {type: 'text/javascript'})))

worker.onmessage = function(e){
    console.log('received from worker', e);
};

worker.postMessage('Hello World!');
