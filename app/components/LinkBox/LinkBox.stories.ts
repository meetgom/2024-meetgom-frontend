import type { Meta, StoryObj } from '@storybook/react'
import { LinkBox } from './LinkBox'

const meta = {
  title: 'Components/LinkBox',
  component: LinkBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    linkUrl: { control: 'text' },
  },
} satisfies Meta<typeof LinkBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    linkUrl: 'standardmeet.me/sda23s4dasd412tfd',
  },
}
