import Input from "./Input";
import { withKnobs } from "@storybook/addon-knobs";
import React from "react";

export default {
  title: "components|Input",
  component: Input,
  decorators: [withKnobs],
};

export const input = () => {
  return <Input />;
};

input.story = {
  name: "Default",
};
