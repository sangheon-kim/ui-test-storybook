import * as React from "react";
import { Input } from "./Input";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, radios, select } from "@storybook/addon-knobs";

export default {
  title: "components|Input",
  component: Input,
  decorators: [withKnobs],
};

export const input = () => {
  const placeholder = text("placeholder", "");
  const view = radios(
    "view",
    { Join: "join", Login: "login", Search: "search" },
    "login"
  );

  const type = radios(
    "type",
    { Text: "text", Password: "password" },
    "password"
  );

  const size = select("size", ["large", "small"], "large");

  return (
    <Input
      view={view}
      placeholder={placeholder}
      name="test"
      onChange={() => action("onChange")}
      type={type}
      size={size}
      onClick={() => action("onClick")}
    />
  );
};

input.story = {
  name: "Default",
};
