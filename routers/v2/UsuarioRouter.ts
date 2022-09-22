import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.json("hola mundo2");
});

export default router;
