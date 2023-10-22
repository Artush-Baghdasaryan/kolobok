import {Component, Input} from '@angular/core';
import {UserEntityDto} from "../../../../../5-models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() members!: UserEntityDto[];
}
