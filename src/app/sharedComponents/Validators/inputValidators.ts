import { AbstractControl } from "@angular/forms";

export class InputFieldValidator
{

    static NoSpaceAllowed(control: AbstractControl)
    {
        if((control.value as string).indexOf(' ')>=0)
            return {
                noSpaceAllowed : true
            };
        else
            return null;
    }
}