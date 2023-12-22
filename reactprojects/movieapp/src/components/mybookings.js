function Booking(){
    return(<div>Booking</div>);
}
function BookingStatus(){
    return(<div>BookingStatus</div>);
}
export default function BookingHistory(){
    return(<div>BookingHistory
        <Booking></Booking>
        <BookingStatus></BookingStatus>
    </div>);
}