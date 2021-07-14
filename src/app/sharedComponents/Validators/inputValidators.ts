import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors } from "@angular/forms";

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

    static CheckUniqueNames(control: AbstractControl)
    {
        return new Promise<ValidationErrors|null>((resolve, reject) => {
            setTimeout(() => {
                let value = control.value as string;
                if(value.toLowerCase()==="arun")
                    resolve({notUnique: true});
                else
                    resolve(null);
            }, 3000);     
        });
    }

    static checkOldPassword(control: AbstractControl)
    {
        return new Promise<ValidationErrors|null>((resolve, reject) => {
            setTimeout(() => {
                let value = control.value as string;
                if(value.toLowerCase() !=="1234")
                    resolve({notEqual: true});
                else
                    resolve(null);
            }, 3000);
        });
    }

    static passwordsMatch(control: AbstractControl)
    {
        let oldPass = control.get('newPassword')?.value;
        let newPass = control.get('confirmPassword')?.value;
        console.log(oldPass, newPass);
        if(oldPass !== newPass)
            return {
                passwordMatchFail : true
            };
        else
            return null;
    }


}