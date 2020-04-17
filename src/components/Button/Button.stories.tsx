import * as React from "react";
import { Button } from "./Button";

import {
  withKnobs,
  text,
  select,
  boolean,
  radios,
} from "@storybook/addon-knobs";

export default {
  title: "components|Button",
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const children = text("children", "default");
  const size = select(
    "size",
    ["large", "medium", "small", "community-edit", "join"],
    "large"
  );

  const outline = boolean("outline", false);
  const direction = radios(
    "direction",
    { Left: "left", Right: "right" },
    "right"
  );

  const color = select(
    "color",
    ["light-gray", "blue", "gray", "full-gray", "white"],
    "blue"
  );

  return (
    <Button size={size} outline={outline} direction={direction} color={color}>
      {children}
    </Button>
  );
};

button.story = {
  name: "Default",
};
