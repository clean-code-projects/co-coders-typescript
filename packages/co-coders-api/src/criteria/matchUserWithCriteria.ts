// import { store } from '../store'
import { CodingLangauage, UserId, Store } from './types'

export async function matchUserWithCriteria({ store }: { store: Store }, criteria: { 
  online: boolean,
  codingLangauages: CodingLangauage[]
}): Promise<UserId[]> {
  const users = await store.getUsers()

  const matchedOnlineUsers = users.filter(user => (user.online && user.codingLanguages.some(lang => criteria.codingLangauages.includes(lang))))

  return matchedOnlineUsers.map(u => u.id)
}