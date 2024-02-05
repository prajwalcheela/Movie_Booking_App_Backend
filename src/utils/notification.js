const nodemailer=require("nodemailer");
const { EMAIL_ID } = require("../../configs/email.config");
const { EMAIL_PASS } = require("../../configs/emailpass.config");


const sendEmail=(emails,subject,html,text)=>{
    const emailIds=emails.join(", ");
    let transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:EMAIL_ID,
            pass:EMAIL_PASS

        }
        
    })
    let mailOptions={
        from:"prajwalcheela@gmail.com",
        to:emailIds,
        subject:subject
    }
    if(html){
        mailOptions.html=html
    }
    if(text){
        mailOptions.text=text
    }
    transporter.sendMail(mailOptions, function(err,data){

        if(err){
            console.log(err);
        }else{
            console.log(`Email Sent successfully to ${emailIds} `)
        }
    })
}
module.exports={
    sendEmail
}