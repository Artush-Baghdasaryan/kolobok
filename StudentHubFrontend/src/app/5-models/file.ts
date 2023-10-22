export interface IFile {
  name: string,
  type: DocumentTypeEnum,
  blob: string,
  size: number,
  createdDate: Date,
}

export interface IFileBackend extends IFile {
  id: number
}

export const availableAccept = [
  'application/vnd.oasis.opendocument.text',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'video/mp4',
  'audio/wav',
  'video/x-msvideo',
  'image/jpeg',
  'image/jpeg',
  'image/png'
].reduce((acc, val) => acc += `, ${val}`);

export const imagesAccept = [
  'image/jpeg',
  'image/jpeg',
  'image/png'
].reduce((acc, val) => acc += `, ${val}`);

export enum DocumentTypeEnum {
  Odt = 'application/vnd.oasis.opendocument.text',
  Pdf = 'application/pdf',
  Doc = 'application/msword',
  Docx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  Txt = 'text/plain',
  Mp4 = 'video/mp4',
  Wav = 'audio/wav',
  Avi = 'video/x-msvideo',
  Jpg = 'image/jpeg',
  Jpeg = 'image/jpeg',
  Png = 'image/png'
}
