// // JavaScript code to update real-time data attributes

// function updateDateTime() {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const now = new Date();
    
    
//     const currentDayOfTheWeek = daysOfWeek[now.getUTCDay()];
//     const currentUTCTime = now.toISOString().substr(11, 8);
    

//     document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDayOfTheWeek}`;
//     document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime}`;
// }

// // Update data every second (1000 milliseconds)
// setInterval(updateDateTime, 1000);

// // Initial update
// updateDateTime();

function updateDateTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    
    // Convert to West Africa Time (WAT), which is UTC+1
    now.setHours(now.getHours() + 1);
    
    const currentDayOfTheWeek = daysOfWeek[now.getUTCDay()];
    const currentWATTime = now.toISOString().substr(11, 8);
    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `My Current Day: ${currentDayOfTheWeek}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `My Current Time: ${currentWATTime}`;
}

// Update data every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();

