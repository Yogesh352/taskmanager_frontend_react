import { TodoType, TodoResponse } from "./../../domains/todo/types/todo";
import { faker } from "@faker-js/faker";

const generateTodo: () => TodoResponse = () => ({
  id: faker.datatype.uuid(),
  type: faker.helpers.arrayElement(Object.values(TodoType)),
  title: faker.name.jobTitle(),
  description: faker.random.words(10),
  date: faker.datatype.datetime(),
  attachments: faker.datatype.number({ min: 0, max: 20 }),
});

export { generateTodo };
