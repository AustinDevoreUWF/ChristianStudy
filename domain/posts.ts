// domain/Discussion

export class Discussion {
    //Variables
    id: number;
    title: string;
    text: string
    //authorId: number; add this

    //Constructor1.Default/
    constructor(discussionId:number, discussionTitle:string, discussionText:string){
        if(!discussionId)throw new Error("A discussionId was not provided, Im low Level!");
        if(!discussionTitle)throw new Error("A discussionTitle was not provided!");
        if(!discussionText) throw new Error("Discussion Text was not provided!")
        
        //mapping
        this.id = discussionId;
        this.title = discussionTitle;
        this.text = discussionText;
    }
    
    //Entity as String
    toString(): string {
        return `Discussion(discussionID)=${this.id}, discussionTitle=${this.title}, discussionText=${this.text}`
    };
}
export class Comment{
    id: number;
    title: string;
    text: string;

    constructor(commentId: number, commentTitle: string, commentText: string,){
        //checks
        if(!commentId)throw new Error("A commentId was not provided, Im low Level!");
        if(!commentTitle)throw new Error("A commentTitle was now provided!");
        if(!commentText)throw new Error("A commentText was not provided");
        //mapping
        this.id = commentId
        this.title = commentTitle
        this.text = commentText 
    }
    toString():string{
        return `Comment(commentID)=${this.id}, commentTitle=${this.title}, commentText=${this.text}`
    }
}
