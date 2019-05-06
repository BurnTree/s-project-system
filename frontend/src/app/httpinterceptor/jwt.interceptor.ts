import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class JwtInt implements HttpInterceptor{
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log(this.activatedRoute.snapshot);
            this.router.navigate(['login'], {state: {reason: 'Your authorization is invalid now, log in'}});
          }
        }
      })
    );
  }
}
