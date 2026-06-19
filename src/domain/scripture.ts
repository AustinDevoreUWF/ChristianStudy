
export class Weekly{
  id                       :number;             
  saintName                :string;
  saintDescription         :string;             
  saintFeastDay            :string;             
  featuredScriptureRef     :string;             
  featuredScriptureSummary :string;             
  discussionTitle          :string;             
  discussionDescription    :string;             
  discussionImage          :string;             
  discussionCloses         :string;             
  citations                :ScriptureCitation[];
  featuredEssays           :Essay[];

  constructor(
    id:number,
    saintName: string,
    saintDescription: string,
    saintFeastDay: string,
    featuredScriptureRef: string,
    featuredScriptureSummary: string,
    discussionTitle:string,
    discussionDescription:string,
    discussionImage:string,
    discussionCloses:string,
    citations: ScriptureCitation[],
    featuredEssays:Essay[],
  )
  {    
    this.id = id,
    this.saintName = saintName;
    this.saintDescription = saintDescription;
    this.saintFeastDay = saintFeastDay;
    this.featuredScriptureRef = featuredScriptureRef;
    this.featuredScriptureSummary = featuredScriptureSummary;
    this.discussionTitle = discussionTitle;
    this.discussionDescription = discussionDescription;
    this.discussionImage = discussionImage;
    this.discussionCloses = discussionCloses;
    this.citations = citations || null;
    this.featuredEssays = featuredEssays || null;
  }
}

export class Essay{
  id         :number|null;
  title      :string;
  category   :string;
  text       :string;
  createdAt?  :Date;
  authorId   :number;
  userName?  :string;

  constructor(title:string,category:string,text:string, authorId:number, id:number|null=null,createdAt?:Date,userName?:string){
    if(!title || !category || !text){
      throw new Error("Missing required fields")}
    this.id = id;
    this.title = title;
    this.category = category;
    this.text = text;
    this.createdAt = createdAt;
    this.authorId  =authorId;
    this.userName = userName;
    }
}

export class ScriptureCitation{
  id               :number|null;
  reference        :string;
  summary          :string;
  constructor(reference:string, summary:string, id:number|null=null){
    if (!reference || !summary) throw new Error("Missing required fields")
    this.id = id;
    this.reference = reference;
    this.summary = summary;
  }
}