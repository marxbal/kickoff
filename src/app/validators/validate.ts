import {
  AbstractControl
} from '@angular/forms';

import {
  FormGroup
} from '@angular/forms';

export function validateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return {
      validUrl: true
    };
  }
  return null;
}
