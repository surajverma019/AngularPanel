import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from "@angular/router";
import { JwtAuthService } from "../services/auth/jwt-auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UserRoleGuard implements CanActivate {
    constructor(private router: Router,
        private jwtAuth: JwtAuthService,
        private snack: MatSnackBar) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var user = this.jwtAuth.getUser();
        const roles = route.firstChild.data['roles'] as Array<string>
        console.log('UserGuard');
        if (roles) {
            const match = this.jwtAuth.roleMatch(roles);
            if (match) {// this indicate that match is null
                return true
            }
            else {
                this.snack.open('You do not have access to this page!', 'OK');
                return false;
            }
        }
        return true;
    }
}