import "reflect-metadata";
import { Methods } from "./methods.enum";
import { MetadataKeys } from "../../metadata-keys.enum";

function routeFactory(method: string) {
  return function (path?: string) {
    return function (target: any, key: string, dec: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path || "/" + key, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const Get = routeFactory(Methods.get);
export const Put = routeFactory(Methods.put);
export const Post = routeFactory(Methods.post);
export const Del = routeFactory(Methods.del);
export const Patch = routeFactory(Methods.patch);
