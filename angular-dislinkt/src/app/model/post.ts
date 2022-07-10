export interface IPost {
  id: string;
  text: string;
  links: string[];
  image: string;
  ownerId: string;
  likedBy: string[];
  dislikedBy: string[];
  likes: number;
  dislikes: number;
  comments: IComment[];
  createdAt: Date;
}

export interface IComment {
  code: string;
  text: string;
}
