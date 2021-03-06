import update from 'immutability-helper';

import {
  CREATE_NEW_LIST,
  EDIT_LIST_NAME,
  CHANGE_LIST_COLOR,
  MODIFY_LIST,
  DELETE_LIST,
  ADD_TASK,
  TOGGLE_COMPLETED,
  REMOVE_TASK,
  EDIT_TASK,
} from 'lib/actions';

const initialState = {
  'example-list': {
    listId: 'example-list',
    name: 'Groceries',
    color: '#ec0c9e',
    created: 123,
    last_modified: 123,
    tasks: {
      'example-first-task': {
        taskId: 'example-first-task',
        listId: 'example-list',
        text: 'Apples',
        completed: true,
      },
      'example-second-task': {
        taskId: 'example-second-task',
        listId: 'example-list',
        text: 'Bananas',
        completed: false,
      },
      'example-third-task': {
        taskId: 'example-third-task',
        listId: 'example-list',
        text: 'Clementines',
        completed: false,
      },
    },
  },
};

function lists(state = initialState, {type, payload}) {
  switch (type) {
    case REMOVE_TASK:
      return update(state, {
        [payload.listId]: {
          tasks: {
            $apply: function (obj) {
              var copy = Object.assign({}, obj);
              delete copy[payload.taskId];
              return copy;
            },
          },
        },
      });
    case TOGGLE_COMPLETED:
      return update(state, {
        [payload.listId]: {
          tasks: {
            [payload.taskId]: {
              completed: {
                $set: !state[payload.listId].tasks[payload.taskId].completed,
              },
            },
          },
        },
      });
    case ADD_TASK:
      return update(state, {
        [payload.listId]: {
          tasks: {
            [payload.taskId]: {
              $set: {...payload},
            },
          },
        },
      });
    case EDIT_TASK:
      return update(state, {
        [payload.listId]: {
          tasks: {
            [payload.taskId]: {
              text: {
                $set: payload.text,
              },
            },
          },
        },
      });
    case CREATE_NEW_LIST:
      return update(state, {
        [payload.listId]: {
          $set: {...payload},
        },
      });
    case EDIT_LIST_NAME:
      return update(state, {
        [payload.listId]: {
          name: {$set: payload.name},
        },
      });
    case CHANGE_LIST_COLOR:
      return update(state, {
        [payload.listId]: {
          color: {$set: payload.color},
        },
      });
    case MODIFY_LIST:
      return update(state, {
        [payload.listId]: {
          last_modified: {$set: payload.timestamp},
        },
      });
    case DELETE_LIST:
      return update(state, {
        $apply: function (obj) {
          var copy = Object.assign({}, obj);
          delete copy[payload.listId];
          return copy;
        },
      });
    default:
      return state;
  }
}

export {lists};
