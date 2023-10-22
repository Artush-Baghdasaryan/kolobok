import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import {AccessType, GroupBackendDto, GroupDto} from 'src/app/5-models/group';
import {Subscription} from "rxjs";
import {GroupService} from "@pages/user-area/services/group.service";
import {base64toIFile} from "../../../../utils/base64";
import {DocumentTypeEnum, IFile} from "../../../../5-models/file";
import {RouterService} from "../../../../1-core/services/router.service";
import { group } from '@angular/animations';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public groups: GroupBackendDto[] = [];
  public selectedGroupId: number | undefined; 
  private groupSubscription: Subscription = new Subscription();

  @ViewChildren("groupsPanel") groupsPanel : ElementRef | undefined;

  constructor(private groupService: GroupService, public routerService: RouterService) {
  }

  public getIFileFromBase64 = base64toIFile;

  public stub: IFile = {
    name: 'groupChatImage.jpg',
    type: DocumentTypeEnum.Jpg,
    size: 0,
    createdDate: new Date(),
    blob: "../../../../../assets/groupChatImage.jpg"
  }

  ngOnInit() {
    this.groupSubscription.add(
      this.groupService.getMyUserGroups().subscribe((backendGroups) => {
        console.log(backendGroups);
        this.groups = backendGroups
      })
    )
  }

  public isGroupPrivate(group: GroupDto): boolean {
    return group.accessType === AccessType.Private;
  }

  public selectGroup(groupId: number): void {
    this.selectedGroupId = groupId;
    this.routerService.toViewGroup(groupId);
  }
}
