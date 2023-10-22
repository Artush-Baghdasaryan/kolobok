import {Component, Input, OnInit} from '@angular/core';
import {DocumentTypeEnum, IFile} from "../../../../5-models/file";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() fileBackend!: IFile
  public src: string | null = null;

  public get isImage() {
    switch (this.fileBackend.type) {
      case DocumentTypeEnum.Jpeg:
      case DocumentTypeEnum.Jpg:
      case DocumentTypeEnum.Png:
        return true;
    }
    return false;
  }

  ngOnInit() {
    this.src = this.fileBackend.blob;
  }
}
