import {Component, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {availableAccept, DocumentTypeEnum, IFile} from "../../../../5-models/file";

@Component({
  selector: 'file-upload',
  templateUrl: "file-upload.component.html",
  styleUrls: ["file-upload.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true,
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {
  @Input() requiredFileType: string = availableAccept;
  @Input() title: string | undefined;
  public file: IFile | null = null;

  public onFileSelected(event: Event) {
    const file: File = ((event.target as HTMLInputElement)?.files as FileList)[0];
    const fr = new FileReader();

    fr.onloadend = () => {
      this.file = {
        blob: (fr.result as string),
        type: file.type as DocumentTypeEnum,
        createdDate: new Date(),
        name: file.name,
        size: file.size,
      };

      this._onChange(this.file);
    }

    fr.readAsDataURL(file);
  }

  private _onChange(file: IFile) {
    //
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: IFile): void {
    this.file = obj;
  }
}
