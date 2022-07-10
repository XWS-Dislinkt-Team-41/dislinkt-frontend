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

export const emptyPost : IPost = {
    id: '',
  text: '',
  links: [],
  image: '',
  ownerId: '',
  likedBy: [],
  dislikedBy: [],
  likes: 0,
  dislikes: 0,
  comments: [],
  createdAt: new Date()
}

export interface IComment {
  code: string;
  text: string;
}
