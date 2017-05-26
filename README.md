# Non Separate JS File Web Worker Introduce (For IE11, Chrome, FireFox)

- Ref: https://stackoverflow.com/questions/5408406/web-workers-without-a-separate-javascript-file
- Ref: https://www.html5rocks.com/en/tutorials/workers/basics/#toc-gettingstarted

![Alt text](https://raw.githubusercontent.com/scott1028/HTML5-Web-Worker-Study/master/sample01.png "sample01.png")
![Alt text](https://raw.githubusercontent.com/scott1028/HTML5-Web-Worker-Study/sample01_ImportScripts.png "sample01_ImportScripts.png")

- Using JS Library by `importScripts('script1.js');`

```
// `importScripts` Only Availalbe in Web Worker Scope
//
// worker.js:
importScripts('script1.js');
importScripts('script2.js');

// Which can also be written as a single import statement:
importScripts('script1.js', 'script2.js');
```
