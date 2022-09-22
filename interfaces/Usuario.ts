interface Usuario {
    _id?: string;
    nombre: string;
    correo: string;
    password: string;
    foto: string[];
}
type AddUser = Omit<Usuario, "_id" | "foto">;

export { Usuario, AddUser };
