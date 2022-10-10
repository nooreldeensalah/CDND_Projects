import { TodosAccess } from './todosAcess'
import { AttachmentUtils } from './attachmentUtils'
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
import * as createError from 'http-errors'

// TODO: Implement businessLogic
const logger = createLogger('todos-BusinessLogic')
const todosAccess = new TodosAccess()

export async function createTodo(params: type) {}

export async function deleteTodo(params: type) {}

export async function updateTodo(params: type) {}

export async function getTodosForUser(params: type) {}

export async function createAttachmentPresignedUrl(params: type) {}
