import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const labelsClasses = [
    'bg-lightblue',
    'bg-darkblue',
    'bg-lightorange',
    'bg-darkOrange',
]

const EventModal = () => {
    const { daySelected, setDaySelected, setShowEventModal, dispatchCalEvent, selectedEvent, setShowEventLiveModal } = useContext(GlobalContext)

    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '')
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '')
    const [selectedColor, setSelectedColor] = useState(
        selectedEvent ? labelsClasses.find((item) => item === selectedEvent.label) : labelsClasses[0]
    )

    const [selectedTime, setSelectedTime] = useState(null);

    // console.log('day', daySelected.format('HH:mm, dddd, MMMM DD'))
    const handleSubmit = (e) => {
        e.preventDefault()
        let time = selectedTime && selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        const payloadCalender = {
            title,
            time,
            description,
            label: selectedColor,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now()
        }

        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: payloadCalender });
          } else {
            dispatchCalEvent({ type: "push", payload: payloadCalender });
          }

        setShowEventModal(false)
    }

    const handleClose = () => {
        setTitle(''); // Đặt lại title trước
        console.log('selected Event', selectedEvent)
        setShowEventModal(false); // Sau đó đóng modal
    }
    

  return (
    <div className='md:w-full h-screen fixed inset-0 left-0 top-0 flex justify-center items-center'>
        <form className=' bg-white rounded-lg shadow-2xl w-4/4'>
            <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                <span className='material-icons-outlined text-gray-400'>
                    drag_handle
                </span>

                <div>

                    { 
                        selectedEvent && (
                            <button
                                onClick={() => {
                                    dispatchCalEvent({ type: 'delete', payload: selectedEvent})
                                    setShowEventModal(false)}
                                }
                            >
                                <span className='material-icons-outlined text-gray-400 mr-2 cursor-pointer'>
                                    delete
                                </span>
                            </button>
                        )
                    }
                    <button onClick={() => {handleClose()}}>
                        <span className='material-icons-outlined text-gray-400'>
                            close
                        </span>
                    </button>
                </div>

            </header>

            <div className='p-3'>
                <div className='grid grid-cols-1/5 items-end gap-y-7'>
                    <div></div>

                    <input 
                        className='border-0 outline-none pt-3 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:ring-0 focus:border-blue-500'
                        type='text' 
                        name='title' 
                        placeholder='Add title' 
                        value= {title}
                        onChange={(e) => setTitle(e.target.value)}
                    />


                    <span className='material-icons-outlined text-gray-400'>
                        schedule
                    </span>

                    {
                        !selectedEvent ? (
                            <div>
                                <DatePicker
                                    className='border-0 outline-none pt-3 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:ring-0 focus:border-blue-500'
                                    selected={selectedTime}
                                    onChange={(time) => setSelectedTime(time)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15} // khoảng cách giữa các lựa chọn giờ, mặc định là 30 phút
                                    timeCaption="Time"
                                    dateFormat="h:mm aa" // Định dạng giờ (12 giờ với AM/PM)
                                    placeholderText="Select a time"
                                />
                            </div>
                        ) :(
                            <div className='text-gray-600'>
                                <p>{daySelected.format("dddd, MMMM DD")}</p>
                                <p>{selectedEvent.time}</p>
                            </div>
                        )
                    }

                    {
                        selectedTime && (
                            <div></div>

                        )
                    }

                    {
                        selectedTime && !selectedEvent && (
                            
                            <div>
                                <div className='text-gray-600'>
                                    <p>{daySelected.format("dddd, MMMM DD")}</p>
                                    <p>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                </div>
                            </div>
                        )
                    }


                    <span className="material-icons-outlined text-gray-400">
                        segment
                    </span>
                    <input
                        type="text"
                        name="description"
                        placeholder="Add a description"
                        value={description}
                        required
                        className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <span className='material-icons-outlined text-gray-400'>
                        bookmark_border
                    </span>
                    <div className="flex gap-x-2">
                        {labelsClasses.map((lblClass, i) => (
                            <span
                            key={i}
                            onClick={() => setSelectedColor(lblClass)}
                            className={`${lblClass} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                            >
                                {
                                    selectedColor === lblClass && (
                                        <span className="material-icons-outlined text-white text-sm">
                                            check
                                        </span>
                                    )
                                }
                            </span>
                        ))}
                    </div>
                </div>

                
            </div>

            <footer className='flex justify-end border-t p-3 mt-5'>
                <button 
                    onClick={handleSubmit}
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white'
                > 
                    Save
                </button>
            </footer>
        </form>
    </div>
  )
}

export default EventModal
