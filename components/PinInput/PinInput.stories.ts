import type { Meta, StoryObj } from '@storybook/react'
import PinInput from './PinInput' // Corrected import to match component name

const meta = {
  title: 'Shared/PinInput',
  component: PinInput, // Correct component name
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pinLength: {
      control: {
        type: 'number',
        min: 4,
        max: 8,
        step: 1,
      },
      defaultValue: 6,
    },
  },
} satisfies Meta<typeof PinInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pinLength: 6,
  },
}

export const FourDigitPin: Story = {
  args: {
    pinLength: 4,
  },
}

export const EightDigitPin: Story = {
  args: {
    pinLength: 8,
  },
}
