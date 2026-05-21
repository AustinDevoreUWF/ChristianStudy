// domain/Discussion

export class Discussion {
    //Variables
    id: number|null;
    title: string;
    text: string;
    authorId: number;
    createdAt?: Date;
    //Constructor1.Default/
    constructor(discussionTitle:string, discussionText:string, authorId:number,createdAt?: Date, id:number|null=null){
        if(!authorId)throw new Error("A authorId was not provided, Im low Level!");
        if(!discussionTitle)throw new Error("A discussionTitle was not provided!");
        if(!discussionText) throw new Error("Discussion Text was not provided!")
        
        //mapping
        this.id = id;
        this.title = discussionTitle;
        this.text = discussionText;
        this.authorId = authorId;
        this.createdAt = createdAt;
    }
    
    //Entity as String
    toString(): string {
        return `Discussion(id)=${this.id}, discussionTitle=${this.title}, discussionText=${this.text}, authorId=${this.authorId}, createdAt=${this.createdAt}`
    };
}
export class Reply{
    id: number|null;
    title: string;
    text: string;
    authorId: number;
    discussionId: number;
    parentId?: number;
    createdAt?: Date;
    constructor(replyTitle: string, replyText: string, authorId:number, discussionId: number, parentId: number, createdAt?: Date, id:number|null=null){
        //checks
        if(!replyTitle)throw new Error("A replyTitle was now provided!");
        if(!replyText)throw new Error("A replyText was not provided");
        if(!discussionId)throw new Error("A discussionId is required");
    
        //mapping
        this.id = id
        this.title = replyTitle
        this.text = replyText
        this.authorId = authorId
        this.discussionId = discussionId
        this.parentId = parentId
        this.createdAt = createdAt
    }
    toString():string{
        return `reply(replyID)=${this.id}, replyTitle=${this.title}, replyText=${this.text}, authorId=${this.authorId}, discussionId=${this.discussionId}, createdAt=${this.createdAt}`
    }
}
