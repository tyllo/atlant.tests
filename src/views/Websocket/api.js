/* eslint arrow-parens: 0 */

function log(message) {
  if (process.env.NODE_ENV === 'development') {
    /* eslint no-console: 0 */
    console.log(`[Channel] ${message}`);
  }
}

class Channel {
  constructor(apiUrl) {
    this.id = 0;
    this.socket = new WebSocket(apiUrl);
    this.callbacks = [];
    this.socket.onopen = Channel.onopen;
    this.socket.onclose = Channel.onclose;
    this.socket.onerror = Channel.onerror;
    this.socket.onmessage = this.onmessage.bind(this);
  }

  static onopen() {
    log('Соединение установлено.');
  }

  static onclose(event) {
    if (event.wasClean) {
      log('Соединение закрыто чисто');
    } else {
      log('Обрыв соединения');
    }

    log(`Код: ${event.code} причина: ${event.reason}`);
  }

  static onerror(error) {
    log(`Ошибка ${error.message}`);
  }

  onmessage(e) {
    log(`Получены данные: <${e.data}>`);
    this.executeCallback(e.data);
  }

  executeCallback(data) {
    const id = +data.split(',')[0];
    const index = this.callbacks.findIndex(_ => _.id === id);
    if (index !== -1) {
      log(`Execute callback ${id}`);
      this.callbacks[index].cb();
      this.callbacks.splice(index, 1);
    }
  }

  send(data, cb) {
    if (cb) {
      this.callbacks.push({ id: this.id, cb });
    }

    const message = `${this.id}, ${data}`;
    this.id += 1;

    this.socket.send(message);
  }

  close() {
    this.socket.close();
  }
}

export default class Api {
  constructor(apiUrl, timeout) {
    this.timeout = timeout;
    this.channel = new Channel(apiUrl);
  }

  remove({ data, resolve, reject }) {
    let timerId;
    if (this.timeout && reject) {
      timerId = setTimeout(reject, this.timeout, 'Timeout remove api');
    }

    this.channel.send(`remove, ${data}`, resolve ? () => {
      if (timerId) clearTimeout(timerId);
      resolve();
    } : null);
  }

  destroy() {
    this.channel.close();
  }
}
