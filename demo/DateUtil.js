class DateUtil{
    static format(){
        return new Date().toLocaleString();
    }
    static formatTime(){
        return new Date().toLocaleTimeString();
    }
}

export default DateUtil