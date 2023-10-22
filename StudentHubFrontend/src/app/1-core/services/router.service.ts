import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private readonly _router: Router) {
  }

  public toAuth(): Promise<boolean> {
    return this._router.navigate(routes.auth.index);
  }

  public toRoot(): Promise<boolean> {
    return this._router.navigate(routes.root);
  }

  public toMain(): Promise<boolean> {
    return this._router.navigate(routes.main.index);
  }

  public refresh(): void {
    return window.location.reload();
  }

  public toViewGroup(groupId: number): Promise<boolean> {
    return this._router.navigate(['main/group', groupId.toString()])
  }
}

export enum AuthRoutes {
  Index = 'auth',
}

export enum MainRoutes {
  Index = 'main',
  CreateGroup = 'create-group',
  ViewGroup = `group/:groupId`
}

const toAuth = [`/${AuthRoutes.Index}`];
const toMain = [`/${MainRoutes.Index}`];
const toRoot = ['/'];

export const routes = {
  root: toRoot,
  auth: {
    index: toAuth,
  },
  main: {
    index: toMain,
    createGroup: [...toMain, MainRoutes.CreateGroup],
    viewGroup: [...toMain, MainRoutes.ViewGroup]
  }
}




