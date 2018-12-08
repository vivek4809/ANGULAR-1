import { Profile } from "../Profile/profile";

export interface Album {
    albumID:number;
	albumName: string;
    albumDate: string;
    albumTime:string;
	profile:Profile;
}
