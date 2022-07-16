import { Group, Text } from "@mantine/core";
import React, { useMemo } from "react";
import { ListTodoRequest, useTodo } from "../api/listTask";

interface TaskBoxProps {
  params?: ListTodoRequest;
  id: string;
  type: string;
  title: string;
  description: string;
  date: Date;
  attachments: Number;
}
const TaskBox = ({
  params,
  id,
  type,
  title,
  description,
  date,
  attachments,
}: TaskBoxProps) => {
  const { data: response } = useTodo({ params });
  const toDos = useMemo(() => response?.data || [], [response]);
  console.log(toDos);
  return (
    <Group className="bg-white w-full border border-solid borger-gray-500 rounded-sm uppercase">
      <Text className="text-bold">{title}</Text>
    </Group>
  );
};

export default TaskBox;
