export interface ILanguage {
  id: string
  name: string
  color: string
}

export interface ILanguagesEdges{
  size: number
  node: ILanguage
}

export interface ILanguages {
  edges: ILanguagesEdges[]
  totalSize: number
}
