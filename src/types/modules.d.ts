declare module "*.icon.svg" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.styl" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.md" {
  const src: string;
  export default src;
}

declare module "*.json" {
  const value: string;
  export default value;
}

declare module "*.woff";
declare module "*.woff2";
declare module "*.otf";
declare module "*.ttf";
declare module "*.eot";
declare module "*.font.svg";
