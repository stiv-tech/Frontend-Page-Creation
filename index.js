

function updateDateTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    
 
    now.setHours(now.getHours() + 1);
    
    const currentDayOfTheWeek = daysOfWeek[now.getUTCDay()];
    const currentWATTime = now.toISOString().substr(11, 8);
    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `My Current Day: ${currentDayOfTheWeek}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `My Current Time: ${currentWATTime}`;
}


setInterval(updateDateTime, 1000);


updateDateTime();

