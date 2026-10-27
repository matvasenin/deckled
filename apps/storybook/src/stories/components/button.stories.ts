import type { Meta, StoryObj } from "@storybook/html-vite";
import { fn } from "storybook/test";

interface StoryButtonProps {
  disabled: boolean;
  label: string;
  onClick?: () => void;
}

const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  render: (args) => {
    return `
      <button
        ${args.disabled && "disabled"}
      >
        ${args.label}
      </button>
    `;
  },
  argTypes: {
    onClick: { name: "Handler — Click" },
    disabled: {
      name: "Disabled",
    },
    label: {
      name: "Label",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<StoryButtonProps>;

export default meta;
type Story = StoryObj<StoryButtonProps>;

export const Primary: Story = {
  args: {
    disabled: false,
    label: "Proceed",
  },
};
