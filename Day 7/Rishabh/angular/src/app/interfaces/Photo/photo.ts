import { Album } from "../Album/album";

export interface Photo {
    photoID:number;
	photoName:string;
	photoType:string;
	data:Blob;
	location:string;
    photoDate:string;
    photoTime:string;
	album:Album;
    likesCount:number;
    dislikesCount:number;
}
