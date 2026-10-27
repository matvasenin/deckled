import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/html-vite";

function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.ts"],
  addons: [getAbsolutePath("@storybook/addon-a11y")],
  framework: getAbsolutePath("@storybook/html-vite"),
};
export default config;
