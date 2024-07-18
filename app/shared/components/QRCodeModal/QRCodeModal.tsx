import Image from 'next/image'
import QRCodeStyling from 'qr-code-styling'
import { useEffect, useRef } from 'react'

interface QRCodeModalProps {
  isOpen: boolean
  onClose: () => void
  qrCodeData: string
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  qrCodeData,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const qrCode = new QRCodeStyling({
    width: 360,
    height: 360,
    data: qrCodeData,
    dotsOptions: {
      color: 'black',
      type: 'extra-rounded',
    },
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 10,
    },
  })

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current)
    }
  }, [])

  useEffect(() => {
    qrCode.update({
      data: qrCodeData,
    })
  }, [qrCodeData])

  const onDownloadClick = () => {
    qrCode.download({
      extension: 'png',
    })
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="flex flex-col items-center p-9 w-[430px] h-[550px] bg-white rounded-lg">
      <div ref={ref} className="mb-4" />
      <div className="text-subtitle underline font-[14px]">{qrCodeData}</div>
      <div className="flex-1" />
      <div className="flex justify-between">
        <button
          onClick={onDownloadClick}
          className="flex justify-center items-center bg-black text-white w-[180px] py-3 rounded-md mr-2"
        >
          <Image
            src="/download.svg"
            alt="download_icon"
            width={16}
            height={16}
            className="mr-2"
          />
          이미지 저장
        </button>
        <button className="flex justify-center items-center w-[180px] py-3  bg-hover_tag rounded-md">
          <Image
            src="/share.svg"
            alt="share_icon"
            width={16}
            height={16}
            className="mr-2"
          />
          공유
        </button>
      </div>
    </div>
  )
}
