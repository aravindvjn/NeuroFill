export type UserInput = {
    firstName?: InputType;
    lastName?: InputType;
    email: InputType;
    password: InputType
}

type InputType ={
    value:string;
    error?:string;
}