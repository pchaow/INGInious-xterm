INGInious-xterm
===============

A small node.js app that allows to run interactive SSH debugging of INGInious tasks in your browser.
Mainly the demo app of xterm.js, with some small additionnal security measures.

Installation
------------

```
npm install
```


Usage (command line)
--------------------

```
npm start hostname port server1=portRangeStart-portRangeStop,port1,port2 server2=port3,port4
```

example:

```
npm start 0.0.0.0 3000 localhost=64000-64100
```

Usage (in your browser)
-----------------------

INGInious-xterm is made to be called on its '/' with some data in the GET parameters:

- `hostname`, for example `localhost`, on which INGInious will attempt to connect via SSH
- `port`, for example `22`, the port used for the SSH connection
- `password`, the password of the remote machine.

INGInious-xterm is not intended to be used outside of INGInious:
- it makes assumption that the user via which you attempt to connect is `worker`
- it also expect that the remote host will ask for a password, and will attempt to fill it

The ambition of this tool is not to provide secure ssh connexion, but to provide a secure "proxy" that only allows to connect to a given list
of hosts, with a given set of available ports.
