import { RecipientSelector } from '@/app/components/recipient-selector'
import { MessageComposer } from '@/app/components/message-composer'

export default function CommunicationPreview() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-100 mx-auto">
        <div className="mb-6 flex items-center">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold text-[#6B7E7D] ml-2">Communication</h1>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecipientSelector />
          <MessageComposer />
        </div>
      </div>
    </div>
  )
}

