export declare global {
    namespace Express {
        interface Request {
            usuario?: UsuarioReturnLogin;
            t: TranslateCustom;
        }
    }
}
