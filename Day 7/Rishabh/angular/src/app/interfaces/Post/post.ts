import { Profile } from "../Profile/profile";

export interface Post {
    postID:number;
	postText:string;
    postDate:string;
    postTime:string;
    likesCount:number;
    dislikesCount:number;
    profile:Profile;
}
