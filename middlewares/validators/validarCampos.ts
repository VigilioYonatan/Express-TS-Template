import { validationResult, body } from "express-validator";
import { Request, Response, NextFunction } from "express";

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

const expressValidationTyped = <T extends string>() => {
    return {
        body: (a?: T, b?: string) => body(a, b),
    };
};

export { validar, expressValidationTyped };
