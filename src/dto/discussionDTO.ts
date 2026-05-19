import { JSX } from "react/jsx-runtime";

export type DiscussionDTO = {
    id:number|null;
    title: string;
    text: string;
    authorId: number;
    userName: string;
    createdAt?: Date;
}
export type ReplyDTO={
    id: number|null;
    title: string;
    text: string;
    authorId: number;
    discussionId: number;
    userName: string;
    createdAt?: Date;
}