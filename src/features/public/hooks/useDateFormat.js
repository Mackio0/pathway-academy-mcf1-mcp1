import React from 'react'

const useDateFormat = (isoDate) => {


    function formatChanger(isoDate) {
        // Parse the ISO date string
        const date = new Date(isoDate);


        // Define options for formatting
        const options = {
            year: 'numeric',
            month: 'short', // You can use 'short' for abbreviated month names or 'numeric' for month numbers
            day: '2-digit',
        };

        // Use Intl.DateTimeFormat for locale-aware formatting
        const outputDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return outputDate
    }


    return formatChanger(isoDate)

}


export default useDateFormat