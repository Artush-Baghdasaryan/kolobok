import {Component, OnInit} from '@angular/core';
import {IconSize} from "@shared/components/dumb/icon/icon.component";
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs';
import {UserService} from "@pages/user-area/services/user.service";

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent implements OnInit {
  IconSize = IconSize;
  public searchForm: FormGroup = new FormGroup({
    search: new FormControl(null, [])
  });

  constructor(public readonly userService: UserService) {
    this.searchForm.get("search")?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(($event) => {
        this.searchGroups($event);
      })
  }

  ngOnInit() {
  }

  public searchGroups(search: string): void {
    console.log("search", search);
    // var groups = this.groupApiService.searchGroups(search);
    // console.log(groups);
    //todo continue...
  }
}
