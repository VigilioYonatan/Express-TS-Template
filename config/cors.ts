import { CorsOptions } from "cors";

const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:5173"];

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
            callback(null, true);
            return;
        }
        callback(new Error("No allowed by Cors"));
    },
    credentials: true,
    optionsSuccessStatus: 200,
};

export { corsOptions };
