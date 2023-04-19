import express from "express";
import { MetadataKeys } from "../metadata-keys.enum";
import { Methods } from "./methods/methods.enum";
import { Quark } from "../../app";

export function Controller(prefix: string) {
  return function (target: Function) {
    const router = express.Router();

    for (const key in Object.getOwnPropertyDescriptors(target.prototype)) {
      const routerHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      //Get middlewares Metadata
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];
      if (path && method) {
        router[method](path, ...middlewares, routerHandler);
      }
    }

    Quark.Router.getInstance().use(prefix, router);
  };
}
