'use client'

interface TimeSlotsProps {
  slots: string[]
  selectedSlot: string | null
  onSelectSlot: (slot: string) => void
  isLoading?: boolean
}

const allTimeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00']

export default function TimeSlots({ 
  slots, 
  selectedSlot, 
  onSelectSlot, 
  isLoading = false 
}: TimeSlotsProps) {
  // Use provided slots (available) or show all slots as fallback
  const displaySlots = slots.length > 0 ? slots : allTimeSlots

  return (
    <div style={{ marginTop: '24px' }}>
      <h3 style={{ color: '#00f0ff', marginBottom: '16px', fontSize: '18px' }}>
        ⏰ Select Time
      </h3>
      {isLoading ? (
        <div style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
          Loading available slots...
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {displaySlots.map((time) => {
            const isAvailable = slots.length === 0 || slots.includes(time)
            return (
              <button
                key={time}
                onClick={() => isAvailable && onSelectSlot(time)}
                disabled={!isAvailable}
                style={{
                  padding: '12px 24px',
                  background: selectedSlot === time ? '#00f0ff' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${selectedSlot === time ? '#00f0ff' : 'rgba(0,240,255,0.2)'}`,
                  borderRadius: '100px',
                  color: selectedSlot === time ? '#000' : isAvailable ? '#ccc' : '#444',
                  cursor: isAvailable ? 'pointer' : 'not-allowed',
                  fontWeight: selectedSlot === time ? 'bold' : 'normal',
                  transition: 'all 0.2s',
                  opacity: isAvailable ? 1 : 0.4
                }}
              >
                {time} WIB
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}