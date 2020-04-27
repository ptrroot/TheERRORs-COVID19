import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './_services/login.component';

export class AuthGuard implements CanActivate{

    constructor( private authService : AuthenticationService,
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
               return this.authService.isAuthenticated().then(
                    (authenticated :boolean) =>{
                        if(authenticated){
                            return true;
                        }else{
                            this.router.navigate(['/']);
                        }
                    }
                );
    }

}