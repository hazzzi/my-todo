import { helper } from './base'

export const createTodo = async (initData) => {
  const url = '/api/todos'
  const response = await helper.postJsonData(url, initData)
  return response
}

export const todoList = async() => {
  const url = '/api/todos'
  const response = await helper.get(url)
  return response
}

export const todoInfo = async(todoId) => {
  const url = `/api/todos/${todoId}`
  const response = await helper.get(url)
  return response
}

export const todoUpdate = async(todoId, data) => {
  const url = `/api/todos/${todoId}`
  const response = await helper.putJsonData(url, data)
  return response
}

export const todoDelete = async(todoId) => {
  const url = `/api/todos/${todoId}`
  const response = await helper.delete(url, data)
  return response
}