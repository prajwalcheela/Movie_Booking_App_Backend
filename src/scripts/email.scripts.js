const PaymentSucess=(user,booking,movie)=>{
    return{
        subject:`Hooray ! Your booking is confirmed`,
        html:`
        <div>
        <h3>Hey ${user.name}</h3>
        <br/>
        <p>Your booking is confirmed for ${movie.name}.</p>
        <hr/>
        <h4>Booking Details<h4/>
        <br/>
        <p>booking id : ${booking._id}<p/>
        <p>Show Time : ${booking.timings}<p/>
        <p>No  of Tickets : ${booking.noOfSeats}<p/>
        <div/>
        
        ` 
    }

}
module.exports={
    PaymentSucess
}