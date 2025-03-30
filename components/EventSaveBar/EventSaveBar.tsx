interface EventSaveBarProps {
  onCancel: () => void
  onSave: () => void
}

const EventSaveBar = ({ onCancel, onSave }: EventSaveBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 bg-neutral-800 font-medium text-white rounded-t-2xl px-4 py-3 w-100 flex justify-between items-center">
      <div>이벤트 시트 관리</div>
      <div className="flex gap-2">
        <button
          className="cursor-pointer rounded-md p-2 text-sm hover:bg-neutral-700"
          onClick={onCancel}
        >
          취소하기
        </button>
        <button
          className="cursor-pointer bg-white rounded-md text-black p-2 text-sm hover:bg-neutral-200"
          onClick={onSave}
        >
          저장하기
        </button>
      </div>
    </div>
  )
}

export default EventSaveBar
