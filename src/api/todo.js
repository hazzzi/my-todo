import { helper } from './base'

export default async function createTodo() {
  const url = '/api/todos'
  const response = await helper.postJsonData(url)
  return response
}
