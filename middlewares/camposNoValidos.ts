import { NextFunction, Request, Response } from "express";

const returnErrorCamposNoValidos = <T extends Object>(
    array: Array<keyof T | string>
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { ...rest } = req.body as T;
        const data = Object.keys(rest);
        for (const dat of data) {
            if (!array.includes(dat)) {
                const error = new Error(`Este campo no es permitido ${dat}`);
                return res.status(401).json({ msg: error.message });
            }
        }
        next();
    };
};

export { returnErrorCamposNoValidos };
