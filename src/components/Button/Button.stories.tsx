import Button from "./Button";
import { withKnobs } from "@storybook/addon-knobs";
import React from "react";

export default {
  title: "components|Button",
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  return <Button />;
};

button.story = {
  name: "Default",
};
