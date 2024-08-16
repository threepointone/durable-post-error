## durable-post-error

A small repro to show that Durable Objects:

- in local dev
- throw errors
- when POSTing to them
- with a body

### Steps to reproduce

- In one tab, `npm i`, then `npm start`
- In another tab, run `curl -X POST http://localhost:8787`
  - You'll get a `Hello, world!` response, all good
- Now run `curl -X POST http://localhost:8787 -d \"some body\"`
  - You'll get `Hello, world!curl: (3) URL rejected: Bad hostname`
  - In the tab where you ran `npm start`, you'll see `Uncaught (async) TypeError: Can't read from request stream after response has been sent.`
  - Occasionally you'll see `Error in ProxyController: Error inside ProxyWorker`
