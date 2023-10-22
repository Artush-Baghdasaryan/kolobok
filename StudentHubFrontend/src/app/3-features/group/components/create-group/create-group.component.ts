import {Component, OnDestroy} from '@angular/core';
import {GroupDto} from "../../../../5-models/group";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IconType} from '@shared/components/dumb/icon/icon.component';
import {IFile, imagesAccept} from "../../../../5-models/file";
import {GroupApiService} from "../../../../1-core/services/group/group-api.service";
import {GroupActionsEnum, GroupRootService} from "../../../../1-core/services/group/group-root.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();
  public addGroupForm: FormGroup;
  public hasFile: boolean = false;

  imagesAccept = imagesAccept;
  IconType = IconType;

  constructor(private groupApiService: GroupApiService, private groupRootService: GroupRootService) {
    this.addGroupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
      description: new FormControl(null, [Validators.required]),
      accessType: new FormControl<number>(0, [Validators.required]),
      avatar: new FormControl<IFile | null>(null)
    });
    this.subscription.add(
      this.addGroupForm.valueChanges.subscribe(
        () =>
          this.hasFile = this.addGroupForm.get('avatar')?.value !== null
      )
    )
  }

  public submit(): void {
    this.addGroupForm.markAllAsTouched();

    const groupDto: GroupDto = {
      name: this.addGroupForm.get('name')?.value,
      description: this.addGroupForm.get('description')?.value,
      accessType: parseInt(this.addGroupForm.get('accessType')?.value),
      rating: 5,
      createdDate: new Date(),
      image: (this.addGroupForm.get('avatar')?.value as IFile).blob
    }

    this.subscription.add(
      this.groupApiService.create(groupDto).subscribe(() => this.groupRootService.event$.next(GroupActionsEnum.created))
    );
  }

  public resetAvatar(): void {
    this.addGroupForm.get('avatar')?.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
