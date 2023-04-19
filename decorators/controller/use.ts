import { RequestHandler } from "express";
import { MetadataKeys } from "../metadata-keys.enum";

export function Use(middleware: RequestHandler) {
  return function (target: any, key?: any, desc?: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
