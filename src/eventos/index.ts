import { Imensajes } from "../components/Chat.component";
import { Iusuario } from "../util/usuario";

export interface INotificacion {
  code: number;
  mensaje: string;
  data?: any;
}

interface ImensajeSocket {
  grupoId: string;
  usuario: Iusuario;
  contenido: any;
}

interface Mensajes {
  _id?: string;
  texto: string;
  fecha?: Date;
  usuario?: Iusuario;
}

export function eventos(socket: any, usuario: Iusuario) {
  notificacionGlobal(socket, usuario);
}

const notificacionGlobal = (socket: any, usuario: Iusuario) => {
  socket.on(`${usuario.codigo}:notificacion`, (data: INotificacion) => {
    alert(data.mensaje);
  });
};
