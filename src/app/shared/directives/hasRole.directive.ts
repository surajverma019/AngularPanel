import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { JwtAuthService } from '../services/auth/jwt-auth.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  isVisible = false;

  constructor(private viewContainerRef: ViewContainerRef,
    private templetRef: TemplateRef<any>,
    private jwtAuthService: JwtAuthService) { }

  ngOnInit() {

    const userRole = this.jwtAuthService.user.role as string;
    console.log('Had User');
    console.log(userRole);
    //if no roles clear the view conatiner ref
    if (!userRole) {
      this.viewContainerRef.clear();
    }

    //if user role present then render the element
    if (this.jwtAuthService.roleMatch(this.appHasRole)) {
      if (!this.isVisible) {
        this.isVisible = true;
        //this.elementRef refers to we are appling structural directive
        this.viewContainerRef.createEmbeddedView(this.templetRef);
      }
      else {
        this.isVisible = false;
        this.viewContainerRef.clear();
      }
    }
  }

}
