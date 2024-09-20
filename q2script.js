// validation Of PhoneNUmber
function validPhoneNumber ( phoneNumber )
{
    const indianPhoneNumber = /^ [6-9] [0-9]{9}$/;
    const aboradPhoneNumber = /^\+91[6-9] [0-9] {9}$/;

    if ( aboradPhoneNumber.test(phoneNumber) || indianPhoneNumber.test(phoneNumber))
    {
        console.log( "Its an Indian Number" );
    }
    else
    {
        console.log( "Its not an Indian Number" );
    }
}
validPhoneNumber("+918521813655");
validPhoneNumber("+788521813655");