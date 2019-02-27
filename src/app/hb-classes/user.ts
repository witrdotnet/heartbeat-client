export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    birthname: string;
    nickname: string;
    token: string;
    socialUser: HbSocialUser;
}

export class HbSocialUser {
    validToken: boolean;
    error: string;
    id: string;
    email: string;
    name: string;
    photoUrl: string;
    locale: string;
    firstName: string;
    lastName: string;
    authToken: string;
    idToken: string;
}
