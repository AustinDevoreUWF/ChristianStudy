// domain/Discussion

export class Discussion {
    //Variables
    id: number;
    title: string;
    text: string;
    authorId: number;
    //authorId: number; add this

    //Constructor1.Default/
    constructor(discussionId:number, discussionTitle:string, discussionText:string, authorId:number){
        if(!discussionId)throw new Error("A discussionId was not provided, Im low Level!");
        if(!discussionTitle)throw new Error("A discussionTitle was not provided!");
        if(!discussionText) throw new Error("Discussion Text was not provided!")
        
        //mapping
        this.id = discussionId;
        this.title = discussionTitle;
        this.text = discussionText;
        this.authorId = authorId
    }
    
    //Entity as String
    toString(): string {
        return `Discussion(discussionID)=${this.id}, discussionTitle=${this.title}, discussionText=${this.text}, authorId=${this.authorId}`
    };
}
export class Reply{
    id: number;
    title: string;
    text: string;
    authorId: number;
    discussionId: number;
    constructor(replyId: number, replyTitle: string, replyText: string, authorId:number, discussionId: number){
        //checks
        if(!replyId)throw new Error("A replyId was not provided, Im low Level!");
        if(!replyTitle)throw new Error("A replyTitle was now provided!");
        if(!replyText)throw new Error("A replyText was not provided");
        if(!discussionId)throw new Error("A discussionId is required");
    
        //mapping
        this.id = replyId
        this.title = replyTitle
        this.text = replyText
        this.authorId = authorId
        this.discussionId = discussionId
    }
    toString():string{
        return `reply(replyID)=${this.id}, replyTitle=${this.title}, replyText=${this.text}, authorId=${this.authorId}, discussionId=${this.discussionId}`
    }
}
