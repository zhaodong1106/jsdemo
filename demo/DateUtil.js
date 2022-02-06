class DateUtil{
    static format(){
        return new Date().toLocaleString();
    }
    static formatTime(){
        return new Date().toLocaleTimeString();
    }
    static formatDate(){
        return new Date().toLocaleDateString();
    }
}

export default DateUtil