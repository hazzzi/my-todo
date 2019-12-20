import React from 'react'
import MainLayout from '../layouts'
import TodoList from '../views/TodoList'

export default function Index() {
  return (
    <MainLayout title="Todo List">
      <TodoList />
    </MainLayout>
  )
}
