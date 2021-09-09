export function CurrentDate() {
    var dateObj = new Date()
    dateObj.setHours(dateObj.getHours() - process.env.REACT_APP_TIMEDIFF)
    return dateObj.toISOString().substr(0,10)
}