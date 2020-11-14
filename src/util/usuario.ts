export interface Iusuario {
  _id?: string;
  nombre: string;
  apellido: string;
  codigo: number;
}

export const getUsuario = (): Iusuario => {
  let usuario = JSON.parse(`${localStorage.getItem("usuario")}`);

  return usuario;
};

export const setUsuario = (usuario: Iusuario) => {
  localStorage.setItem("usuario", JSON.stringify(usuario));
};

export const deleteUsuario = () => {
  localStorage.removeItem("usuario");
};
