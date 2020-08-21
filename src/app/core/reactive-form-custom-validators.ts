// Angular Import
import { AbstractControl } from '@angular/forms';

export class ReactiveFormCustomValidators {
    static checkNameLength(value: number) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (control && control.value && control.value.length < value) {
                return { nameLengthNotValid: true };
            }
            return null;
        };
    }
}
