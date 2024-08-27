import React from 'react'

import monitor from '../assets/monitor.png'

import { FaCheckCircle } from "react-icons/fa";


const Monitor = ({ item }) => {
    return (
        <div>
          <div>
            {item === 0 ? (
              <>
                <StockDetails />
                <StockWatchlist />
              </>
            ) : (
              <>
                <StockWatchlist />
                <StockDetails />
              </>
            )}
          </div>
        </div>
    );
}
    
    function StockWatchlist() {
      return (
        <div className='bg-white'>
            <div className='container mx-auto text-black'>
                    hell
            </div>
        </div>
      );
    }
    
    function StockDetails() {
      return (
        <div>
          {/* Nội dung của phần Stock Details */}
        </div>
      );
    }


export default Monitor
