import {DocumentTypeEnum, IFile} from "../5-models/file";

export function base64toIFile(base64: string): IFile {
  return {
    type: getDocTypeFromBase64(base64),
    blob: base64,
    name: '',
    size: 0,
    createdDate: new Date(),
  }
}

export function getDocTypeFromBase64(base64: string): DocumentTypeEnum {
  const mime = base64.substring("data:".length, base64.indexOf(";base64"));
  return mime as DocumentTypeEnum;
}
