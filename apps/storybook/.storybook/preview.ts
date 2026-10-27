import type { Preview } from "@storybook/html-vite";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "oklch(0.1 0 0)" },
        light: { name: "Light", value: "oklch(1 0 0)" },
      },
    },
  },
  globalTypes: {
    direction: {
      description: "Current writing system",
      toolbar: {
        title: "Direction",
        icon: "paragraph",
        items: [
          { value: "ltr", title: "LTR" },
          { value: "rtl", title: "RTL" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    direction: "ltr",
  },
  decorators: [
    (story, context) => {
      const direction = context.globals.direction || "ltr";
      return `
        <div dir="${direction}">
          ${story()}
        </div>
      `;
    },
  ],
};

export default preview;
