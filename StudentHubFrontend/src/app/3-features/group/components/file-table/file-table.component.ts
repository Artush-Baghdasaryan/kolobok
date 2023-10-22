import {Component, Input, OnInit} from '@angular/core';
import {GroupBackendDto} from "../../../../5-models/group";
import {DocumentTypeEnum, IFile, IFileBackend} from "../../../../5-models/file";
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {DocumentService} from "@pages/user-area/services/document.service";
import {IconType} from '@shared/components/dumb/icon/icon.component';
import {RouterService} from "../../../../1-core/services/router.service";
import {IAnalyzeDto, Language} from "../../../../5-models/analyze";
import {DocumentApiService} from "../../../../1-core/services/document/document-api.service";
import {DocumentActionsEnum, DocumentRootService} from "../../../../1-core/services/document/document-root.service";

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss']
})
export class FileTableComponent implements OnInit {
  @Input() group!: GroupBackendDto;
  @Input() docs: IFileBackend[] = [];
  formControl: FormControl = new FormControl<IFile | null>(null);
  private subscription: Subscription = new Subscription();
  IconType = IconType;

  public deleteGroup() {
    this.subscription.add(
      this.documentService.delete(this.group.id).subscribe(() => this.routerService.toMain())
    )
  }

  constructor(private documentService: DocumentService, private routerService: RouterService, private documentApiService: DocumentApiService, private rootService: DocumentRootService) {
  }

  public isFileImage(file: IFile) {
    return file.type === DocumentTypeEnum.Jpeg || file.type === DocumentTypeEnum.Png;
  }

  public isUserOwner(): boolean {
    return true;
  }

  public analyzeImage(fileId: number): void {
    const analyzeDto: IAnalyzeDto = {
      documentId: fileId,
      groupId: Number(this.group.id),
      language: Language.Eng
    };

    this.documentApiService.analyze(analyzeDto).subscribe((res) => {
      this.rootService.event$.next(DocumentActionsEnum.Create);
    })
  }

  ngOnInit() {
    this.subscription.add(
      this.formControl.valueChanges.subscribe((file) => {
          const copy = {...file};
          copy.type = 0;
          this.subscription.add(
            this.documentService.create(this.group.id, copy as IFile).subscribe()
          )
        }
      )
    );
  }
}
