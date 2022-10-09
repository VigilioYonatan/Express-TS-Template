import { validationResult, body } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { join } from "path";

const validar = (
    req: Request,
    res: Response<{ param: string; msg: string }>,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            msg: errors.array()[0].msg,
            param: errors.array()[0].param,
        });
    }

    next();
};

const returnErrorCamposNoValidos = <T extends Object>(
    array: Array<keyof T | string>
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { ...rest } = req.body as T;
        const data = Object.keys(rest);
        for (const dat of data) {
            if (!array.includes(dat)) {
                const error = new Error(
                    `Campos no permitidos: ${dat} - [${array.join("-")}]`
                );
                return res.status(401).json({ msg: error.message });
            }
        }
        next();
    };
};
const expressValidationTyped = <T extends object>() => {
    return {
        body: (a?: keyof T, b?: string) => body(a as string, b),
    };
};

export { validar, returnErrorCamposNoValidos, expressValidationTyped };
