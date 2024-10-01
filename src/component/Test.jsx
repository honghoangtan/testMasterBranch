import React, { useContext, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import GlobalContext from '../context/GlobalContext';


const Test = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [startDate, setStartDate] = useState('2024-11-06T12:00:00Z');
    const [endDate, setEndDate] = useState('2024-11-06T15:00:00Z');
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [events, setEvents] = useState([]);  // State để lưu danh sách sự kiện

    const { dispatchCalEventLive, daySelected, setShowEventLiveModal } = useContext(GlobalContext)

    const createEvent = async () => {
        setIsLoading(true);
        const token = 'UMOIETME4TXSIQ5X3AKF'; // Thay token của bạn vào đây
        const organizationId = '2352189398703'; // Thay organization_id của bạn vào đây

        const startDateFormatted = moment(startDate).utc().format("YYYY-MM-DDTHH:mm:ss[Z]");
        const endDateFormatted = moment(endDate).utc().format("YYYY-MM-DDTHH:mm:ss[Z]");

        // const currentDay = daySelected.valueOf()


        // const timestamp= 1727681766273

        // const utcStartDate = moment(timestamp).utc().format("YYYY-MM-DDTHH:mm:ss[Z]")

        // console.log("utc", utcStartDate)
        // console.log('2024-11-06T12:00:00Z')

        const eventData = {
            event: {
                name: { html: eventName },
                description: { html: eventDescription },
                start: {
                    utc: startDateFormatted,
                    timezone: 'UTC',
                },
                end: {
                    utc: endDateFormatted,
                    timezone: 'UTC',
                },
                currency: 'USD',
                online_event: true, // Sự kiện trực tuyến
            }
        };

        try {
            const response = await axios.post(
                `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/`,
                eventData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            setResponseMessage('Event created successfully!');
            console.log('Event Created:', response.data);
            
            // Cập nhật danh sách sự kiện sau khi tạo thành công
            setEvents([...events, response.data]);
            dispatchCalEventLive({ type: "push", payload: response.data})
        } catch (error) {
            console.error('Error creating event:', error.response?.data || error.message);
            setResponseMessage('Failed to create event.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
      <div className='md:w-full h-screen fixed inset-0 left-0 top-0 flex justify-center items-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg shadow-lg w-96 p-6'>
          <header className='flex justify-between items-center border-b pb-4'>
              <h2 className='text-darkblue font-bold text-2xl'>Create Event</h2>
              <button
                onClick={() => {
                  setShowEventLiveModal(false)
                }}
              >
                  <span className='material-icons-outlined text-gray-400'>
                      close
                  </span>
              </button>
          </header>
  
          <div className='mt-4'>
              <div className='mb-4'>
                  <label className='block text-sm font-semibold text-gray-700'>Event Name:</label>
                  <input
                      className='mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-500'
                      type="text"
                      placeholder='Add event'
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                  />
              </div>
  
              <div className='mb-4'>
                  <label className='block text-sm font-semibold text-gray-700'>Description:</label>
                  <input
                      type='text'
                      placeholder='Add a description'
                      className='mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-500'
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                  />
              </div>
  
              <div className='mb-4'>
                  <label className='block text-sm font-semibold text-gray-700'>Start Date (UTC):</label>
                  <input
                      type="datetime-local"
                      className='mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-500'
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                  />
              </div>
  
              <div className='mb-4'>
                  <label className='block text-sm font-semibold text-gray-700'>End Date (UTC):</label>
                  <input
                      type="datetime-local"
                      className='mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-500'
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                  />
              </div>
  
              <button
                  onClick={createEvent}
                  disabled={isLoading}
                  className='mt-4 w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                  {isLoading ? 'Creating...' : 'Create Event'}
              </button>
              <p className='text-red-500 mt-2'>{responseMessage}</p>
  
              {/* Hiển thị danh sách sự kiện */}
              <div className="event-list mt-4">
                  <h3 className='font-semibold'>Upcoming Events</h3>
                  {events.length === 0 ? (
                      <p className='text-gray-500'>No events available</p>
                  ) : (
                      <ul className='list-disc pl-5'>
                          {events.map((event, index) => (
                              <li key={index} className='mt-2'>
                                  <h4 className='font-semibold'>{event.name.html}</h4>
                                  <p className='text-gray-600'>{event.description.html}</p>
                                  <p className='text-sm'><strong>Start:</strong> {event.start.utc}</p>
                                  <p className='text-sm'><strong>End:</strong> {event.end.utc}</p>
                              </li>
                          ))}
                      </ul>
                  )}
              </div>
          </div>
      </div>
      </div>
  
    );
};

export default Test;
