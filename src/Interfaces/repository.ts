import { ILanguage, ILanguages } from "./language";
import { ITotalCount } from "./totalCount";
export interface IOwnerRepository {
  id: string
  login: string
}

export interface INode<T> {
  node: T
}
export interface IRepositoryPreview {
  id: string
  description: string
  primaryLanguage: ILanguage
  nameWithOwner: string
  owner: IOwnerRepository
  stargazers: ITotalCount
}
export interface IRepositoryCard extends IRepositoryPreview {
  languages: ILanguages
  issues: ITotalCount
  pullRequests: ITotalCount
};
