import { Meta, StoryObj } from '@storybook/react'
import { QRCodeModal } from './QRCodeModal'

const meta = {
  title: 'Shared/QRCodeModal',
  component: QRCodeModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    qrCodeData: { control: 'text' },
  },
} satisfies Meta<typeof QRCodeModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {
      console.log('closed')
    },
    qrCodeData: 'https://www.google.com',
  },
}
