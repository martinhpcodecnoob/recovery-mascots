export interface RegisterModel {
    name: string;
    lastName: string;
    email: string;
    cellPhone: number;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

export interface LoginModel {
    email:string
    password:string
}