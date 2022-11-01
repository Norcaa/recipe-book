import { Recipe } from "./recipe";

export class User {
    constructor(
        /* REGISTRATION */
        public id: number, 
        public email: string, 
        public password: string,
        /* USER */
        public username: string,
        public role: string,
        public verified: boolean,
        public status: string,
        public createDate: string,
        public deleteDate: string,
        public updateDate: string,
        /* PERSONAL */
        public firstName: string,
        public lastName: string,
        public introduction: string,
        public image: string,
        public birthDate: string,
        public birthCity: string,
        public gender: string,
        public location: string,
        /* SOCIAL */
        public facebook: string,
        public instagram: string,
        public twitter: string,
        public youtube: string,
        public tiktok: string,
        public linkedin: string,
        /* CHEF */
        public recipes: Recipe[],
        public rating: number,
        public experience: string,
        /* ACTIONS */
        public blocked: string[],
        public followers: string[],
        public following: string[],
        /* 
        public archievements: string[],
        public activity: string[] 
        */
        ) {
    }
}