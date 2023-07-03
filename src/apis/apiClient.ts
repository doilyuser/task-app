import request from 'superagent'
import { Item, ItemInfo } from '../models/Items'

// Routes

const listRoute = '/api/v1/lists/'
const itemRoute = '/api/v1/items/'

// Lists

export function APIGetAllLists() {
  return request.get(listRoute).then((res) => {
    return res.body
  })
}

export function APIGetListById(id: number) {
  return request.get(listRoute + id).then((res) => {
    return res.body
  })
}

// Items

export function APIGetAllItems() {
  return request.get(itemRoute).then((res) => {
    return res.body
  })
}

export function APIGetItemsByListId(id: number) {
  return request.get(itemRoute + id).then((res) => {
    return res.body
  })
}

export function APIAddItem(item: ItemInfo) {
  return request
    .post(itemRoute)
    .send(item)
    .then((res) => res.body)
}

export function APIUpdateItemsListId(item: Item) {
  return request
    .patch(itemRoute)
    .send(item)
    .then((res) => res.body)
}

export function APIDelItem(id: number) {
  return request.del(itemRoute + id).then((res) => res.body)
}
