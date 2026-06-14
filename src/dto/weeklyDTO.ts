import { ScriptureCitation } from "@/src/domain/scripture"
export type featuredDiscussionDTO = {
  discussionTitle          :string;             
  discussionDescription    :string;             
  discussionImage          :string;             
  discussionCloses         :string;   
}

export type saintDTO = {
  saintName                :string;
  saintDescription         :string;             
  saintFeastDay            :string;             
}

export type scriptureDTO = {
  featuredScriptureRef :string;
  featuredScriptureSummary :string;
}

export type featuredScripture = {
  citations :ScriptureCitation[];
    
}