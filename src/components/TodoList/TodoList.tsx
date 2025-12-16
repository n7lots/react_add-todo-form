import React from 'react';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  todos: Todo[];
  users: User[];
};

export const TodoList: React.FC<Props> = ({ todos, users }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = users.find(us => us.id === todo.userId);

        if (!user) {
          return null;
        }

        return (
          <article
            key={todo.id}
            data-id={todo.id}
            className={`TodoInfo ${todo.completed === true ? 'TodoInfo--completed' : ''}`}
          >
            <h2 className="TodoInfo__title">{todo.title}</h2>

            <UserInfo {...user} />
          </article>
        );
      })}
    </section>
  );
};
