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

export type featuredScriptureDTO = {
  featuredScriptureRef :string;
  featuredScriptureSummary :string;
}

export type readingsDTO = {
  citations: CitationDTO[]
}

export type CitationDTO = {
  reference:string;
  summary:string;
}