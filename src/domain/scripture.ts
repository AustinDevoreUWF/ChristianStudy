
export class Weekly{
  id: number
  saintName        :string
  saintDescription :string
  saintFeastDay    :string
  citation         :ScriptureCitation[]
  featuredEssays   :Essay[]

  constructor(
    id:number,
    saintName: string,
    saintDescription: string,
    saintFeastDay: string,
    citation: ScriptureCitation[],
    featuredEssays:Essay[],
  )
  {
    if(!id||!saintName||!saintDescription||!saintFeastDay||!citation||!featuredEssays) throw new Error("Missing required field")
    
    this.id = id,
    this.saintName = saintName;
    this.saintDescription = saintDescription;
    this.saintFeastDay = saintFeastDay;
    this.citation = citation || null;
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
  scriptureBook    :string;
  scriptureChapter :string;
  scriptureVerse   :string;
  featuredInWeeks  :Weekly[];
  constructor(scriptureBook:string,scriptureChapter:string,scriptureVerse:string,featuredInWeeks:Weekly[],id:number|null=null){
    if(!scriptureBook||!scriptureChapter||!scriptureVerse||!featuredInWeeks){  
      throw new Error("Missing Required fields")}

      this.id = id;
      this.scriptureBook = scriptureBook;
      this.scriptureChapter = scriptureChapter;
      this.scriptureVerse = scriptureVerse;
      this.featuredInWeeks = featuredInWeeks;

  }
}