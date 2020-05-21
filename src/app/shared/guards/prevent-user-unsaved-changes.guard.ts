import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { FormComponent } from 'src/app/views/dashboard/form/form.component';

@Injectable()

export class PreventUserUnSavedChanges implements CanDeactivate<FormComponent>{

    canDeactivate(component: FormComponent) {

        if(component.editForm.dirty){
            return confirm('Are you sure you want to continue ? Any unsaved changes will be lost')
        }
        return true;
    }
}