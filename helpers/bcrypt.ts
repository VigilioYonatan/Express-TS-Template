import bcrypt from "bcryptjs";
const hashValue = (value: string): string => {
    const salt = bcrypt.genSaltSync(10);
    const hast = bcrypt.hashSync(value, salt);
    return hast;
};

export { hashValue };
