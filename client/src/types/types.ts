export interface RegistrationStateType {
    first: string;
    last: string;
    email: string;
    password?: string;
    error: boolean;
}

export interface RegistrationPropsType {}

export interface LoginType {
    email: string;
    password?: string;
    error: boolean;
}
