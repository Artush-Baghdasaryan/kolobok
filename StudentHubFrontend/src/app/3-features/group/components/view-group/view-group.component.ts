import {Component, OnInit} from '@angular/core';
import {IFileBackend} from 'src/app/5-models/file';
import {GroupApiService} from 'src/app/1-core/services/group/group-api.service';
import {AccessType, GroupBackendDto} from 'src/app/5-models/group';
import {UserBackendDto} from 'src/app/5-models/user';
import {IAnalyzeDto, Language} from 'src/app/5-models/analyze';
import {FileApiService} from 'src/app/1-core/services/file/file-api.service';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '@pages/user-area/services/user.service';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from "@pages/user-area/services/group.service";
import {DocumentService} from "@pages/user-area/services/document.service";

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.scss']
})
export class ViewGroupComponent implements OnInit {
  public group: GroupBackendDto = {
    id: 0,
    image: '',
    createdDate: null,
    name: '',
    rating: null,
    accessType: AccessType.Public,
    description: ''
  };
  private groupId: string | null = null;
  public docs: IFileBackend[] = [];

  public owner: UserBackendDto | null = null;
  public rating: string = "";
  public members: UserBackendDto[] = [];

  public subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    public apiService: GroupApiService,
    private groupApiService: GroupApiService,
    private userService: UserService,
    public fileApiService: FileApiService,
    private groupService: GroupService,
    private documentService: DocumentService
  ) {
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.paramMap.subscribe(
        (map) => {
          this.groupId = map.get('groupId') as string;

          this.subscription.add(
            this.getGroup().subscribe((group) => {
              this.group = group;

              this.getGroupOwner();
              this.getGroupMembers();
              this.renderGroupRating();
              this.getDocuments();
            }));
        })
    )
  }

  private getDocuments() {
    this.subscription.add(
      this.documentService.getDocsByGroupId(parseInt(this.groupId as string)).subscribe((docs) => this.docs = docs)
    );
  }

  private getGroup(): Observable<GroupBackendDto> {
    return this.groupService.getById(this.groupId as string);
  }

  private getGroupOwner(): void {
    //change testDto to real
    this.subscription.add(
      this.apiService.getGroupOwner(this.group.id).subscribe(res => this.owner = res)
    );
  }

  private getGroupMembers(): void {
    this.subscription.add(
      this.apiService.getGroupMembers(this.group.id).subscribe(res => this.members = res)
    );
  }

  public renderGroupRating(): void {
    this.rating = '';
    const star = '<i class="material-icons icon">star</i>';
    for (let i = 0; i < this.group.rating!; i++) {
      this.rating += star;
    }
  }

  public analyzeImage(fileId: number): void {
    const analyzeDto: IAnalyzeDto = {
      documentId: fileId,
      groupId: Number(this.groupId),
      language: Language.Eng
    };

    // todo
    this.fileApiService.analyzeImage(analyzeDto).subscribe(res => {
      console.log("analyzed");
    })
  }
}
