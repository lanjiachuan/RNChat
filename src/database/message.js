import { addItemWithParentId, updateItem, removeItem, getAllItems, getItemBy, getItemsByParentId, onChildAdded, offChildAdded } from './base';

const MODEL_NAME = 'message';

export const add = (parentId, data) => new Promise((resolve) => {
  resolve(addItemWithParentId(MODEL_NAME, parentId, data));
});

export const update = (id, data) => new Promise((resolve) => {
  resolve(updateItem(MODEL_NAME, id, data));
});

export const remove = id => new Promise((resolve) => {
  resolve(removeItem(MODEL_NAME, id));
});

export const getAll = () => new Promise((resolve) => {
  resolve(getAllItems(MODEL_NAME));
});

export const getBy = (fieldName, value) => new Promise((resolve) => {
  resolve(getItemBy(MODEL_NAME, fieldName, value));
});

export const getMoreBy = parentId => new Promise((resolve) => {
  resolve(getItemsByParentId(MODEL_NAME, parentId));
});

export const onNew = (modelName, value, cb) => {
  onChildAdded(MODEL_NAME, value, cb);
};

export const offNew = (modelName, value) => {
  offChildAdded(MODEL_NAME, value);
};