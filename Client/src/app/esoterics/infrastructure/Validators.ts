export class Validators {
    static readonly Default: ValidatorConfig = {
        isValid: v => true,
        errorMessage: null,
        working: false
    }

    static readonly IsEmail : ValidatorConfig = {
        isValid: v => /\b(\w)+([\.-]\w+)*@(\w|-|[0-9])+\.([a-z]){2,4}\b/i.test(v),
        errorMessage: 'Incorrect format',
        working: true
    }

    static readonly IsName: ValidatorConfig = {
        isValid: v => /^[A-Za-z]{1,20}$/i.test(v),
        errorMessage: 'Incorrect name format',
        working: true
    }
}

export interface ValidatorConfig {
    readonly isValid: (v: any) => boolean;
    readonly errorMessage: string;
    working: boolean;
}