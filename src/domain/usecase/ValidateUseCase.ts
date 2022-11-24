import {AppRegex} from '../../utils/AppRegex';

export interface ValidateUseCase {
  validateEmailPassWord: (
    userName: string,
    password: string,
  ) => ValidatePassWord;
}

export interface ValidatePassWord {
  isValid: boolean;
  emailError?: string | null;
  passwordError?: string | null;
}

export class ValidateUseCaseImpl implements ValidateUseCase {
  validateEmailPassWord(userName: string, password: string): ValidatePassWord {
    let valid: ValidatePassWord = {isValid: true};
    const isEmailValid =
      userName && userName.toLowerCase().match(AppRegex.email);
    if (!isEmailValid) {
      valid.isValid = false;
      valid.emailError = 'Please input valid email';
    }
    if (!password) {
      valid.isValid = false;
      valid.passwordError = 'Please input valid password';
    }
    return valid;
  }
}
