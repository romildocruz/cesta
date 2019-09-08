import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserUtil } from '../utils/user.utils';

@Injectable()
export class ManagerGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        return UserUtil.isInRole('manager');
    }
}