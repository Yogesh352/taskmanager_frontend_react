import { ComponentMeta, ComponentStory } from "@storybook/react";

import NavBar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const Basic = Template.bind({});
Basic.args = {};
