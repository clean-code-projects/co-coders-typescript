export type UserId = string

export type CodingLangauage = 'TypeScript' | 'Go' | 'Rust' | 'Dart'

export type User = {
  id: UserId,
  online: boolean,
  codingLanguages: CodingLangauage[] 
}

export type Store = {
  getUsers(): Promise<User[]>
}