// Angular Import
import { AbstractControl } from '@angular/forms';

// Import Regex Patters
import { RegexPatterns } from './regex.pattern';

export class ReactiveFormCustomValidators {

    static checkName(value: number) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            // tslint:disable-next-line: prefer-const
            const regexPattern: RegexPatterns = new RegexPatterns();
            if (control && control.value && !regexPattern.onlyAlpha.test(control.value)) {
                return { onlyAlpha: true };
            }
            if (control && control.value && control.value.length < value) {
                return { nameLengthNotValid: true };
            }
            return null;
        };
    }
}
