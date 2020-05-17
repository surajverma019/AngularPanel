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
        console.log(roles);
        if (roles) {
            console.log(this.jwtAuth);
            const match = this.jwtAuth.roleMatch(roles);
            if (match) {// this indicate that match is null
                return true
            }
            else {
                this.router.navigate(['/sessions/login']);
                this.snack.open('You are not allowed to access this area !');
            }
        }
        return true;
    }
}