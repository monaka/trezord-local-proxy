# Tresord local proxy.

## Prequisite

npm '6.11.3' or above.

But it can be run older versions. Just I've not tested.

## Install

```
npm install
```

## run

This example is for Linux and Unix like OSes.
(Your pull requests for Windows are welcome :-)


### run trezord-go

Open your console and run `trezord-go`

You will see logs like below.

```
2019/11/04 14:06:06 trezord v2.0.27 is starting.
```

### run proxy

Open your another console and run `npm run proxy`

You will see logs like below.

```
> trezord-local-proxy@0.0.1 proxy /home/monaka/git/trezord-local-proxy
> node index.js

Proxy is listening port 5000
```

### check if it works

Open your yet another console and run `curl -XPOST http://localhost:5000/`

You will get the response from `trezord-go` via `proxy` like below.

```
{"version":"2.0.27"}
```

You will see logs in the console that runs `trezor-go`.

```
POST /
127.0.0.1 - - [04/Nov/2019:14:07:48 +0900] "POST / HTTP/1.1" 200 21
```

## configuration

You can change the listening port by the proxy.
Set the environment variable `PORT`.

## License

MIT

## Donation

https://github.com/sponsors/monaka/
