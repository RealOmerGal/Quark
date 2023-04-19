import { MetadataKeys } from "./metadata-keys.enum";

export function bodyValidator(...keys: string[]) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
