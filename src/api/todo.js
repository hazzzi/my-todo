import { helper } from './base'

export const createTodo = async() => {
  const url = '/api/todos'
  return await helper.postJsonData(url)
}