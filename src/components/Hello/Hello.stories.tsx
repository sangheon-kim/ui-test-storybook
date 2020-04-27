import * as React from "react"
import {Hello} from "./Hello";

import {
    withKnobs,
    text,
  } from "@storybook/addon-knobs";

export default {
    title: "components|Hello",
    component: Hello,
    decorators: [withKnobs],
  };

export const hello = () => {
    const inputText = text('text', 'default')

    return <Hello text={inputText} />
}