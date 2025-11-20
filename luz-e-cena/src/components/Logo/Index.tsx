import type { ImgHTMLAttributes } from "react";

const Logo = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
};

export default Logo;