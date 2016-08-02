var term,
    protocol,
    socketURL,
    socket;

var terminalContainer = document.getElementById('terminal-container');

createTerminal("sirius", "22", "lol");

function createTerminal(host, port, password) {
  while (terminalContainer.children.length) {
    terminalContainer.removeChild(terminalContainer.children[0]);
  }
  term = new Terminal({
    cursorBlink: true
  });
  protocol = (location.protocol === 'https:') ? 'wss://' : 'ws://';
  socketURL = protocol + location.hostname + ((location.port) ? (':' + location.port) : '') + '/bash?host='+host+"&password="+password+"&port="+port;
  socket = new WebSocket(socketURL);

  term.open(terminalContainer);
  term.fit();

  socket.onopen = runRealTerminal;
  socket.onclose = runFakeTerminal;
  socket.onerror = runFakeTerminal;
}


function runRealTerminal() {
  term.attach(socket);
  term._initialized = true;
}

function runFakeTerminal() {
  if (term._initialized) {
    return;
  }
  term._initialized = true;
  term.writeln('You are not allowed to access to this machine, or another error occured');
}
