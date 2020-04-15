module.exports = {
  stories: ["../src/**/*.stories.(js|jsx|tsx)"],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
  presets: ["@storybook/addon-docs/react/preset"],
};
