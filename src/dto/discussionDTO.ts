
export type DiscussionDTO = {
    id:number|null;
    title: string;
    text: string;
    authorId: number;
    userName: string;
    createdAt?: Date;
}
