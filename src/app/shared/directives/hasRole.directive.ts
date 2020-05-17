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
    private authService: JwtAuthService) { }

    ngOnInit() {
      
    }

}
