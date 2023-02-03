import { io, Socket } from "socket.io-client";

export class SocketCon {
    socket: Socket;
  constructor(token : string) {
    this.socket = this.connect(token);
  }

  connect(token: string) {
    return io(`${process.env.NEXT_PUBLIC_SERVER_URL}`, {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    }); 
  }
}

