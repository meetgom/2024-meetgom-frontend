import React from "react"
import { StoryFn, Meta } from "@storybook/react"
import { Button, ButtonProps } from "./Button"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: "primary",
  size: "medium",
  label: "Primary Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: "secondary",
  size: "medium",
  label: "Secondary Button",
}

export const Small = Template.bind({})
Small.args = {
  color: "primary",
  size: "small",
  label: "Small Button",
}

export const Large = Template.bind({})
Large.args = {
  color: "primary",
  size: "large",
  label: "Large Button",
}
