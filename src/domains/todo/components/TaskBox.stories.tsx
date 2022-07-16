import { Box } from "@mantine/core";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TaskBox from "./TaskBox";

export default {
  title: "Domains/Taskbox/Taskbox",
  component: TaskBox,
} as ComponentMeta<typeof TaskBox>;

const Template: ComponentStory<typeof TaskBox> = (args) => (
  <Box className="max-w-md">
    <TaskBox {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  type: "HH",
  title: "Hello",
  description: "adsa",
  date: new Date(),
  attachments: 10,
};
