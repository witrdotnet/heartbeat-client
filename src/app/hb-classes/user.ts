﻿import { SocialUser } from "angularx-social-login";

export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    birthname: string;
    nickname: string;
    token: string;
    socialUser: SocialUser;
}
