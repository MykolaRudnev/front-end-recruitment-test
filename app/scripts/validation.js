function validate() {
    const firstName = document.getElementById('input-first-name');
    const lastName = document.getElementById('input-last-name');
    const email = document.getElementById('input-email');
    const country = document.getElementById('input-country');
    const postalCode = document.getElementById('input-postal-code');
    const phoneNumber = document.getElementById(' input-phone-number');
   
    if( firstName.value === "" || firstName.value=== undefined) {
        firstName.classList.add("error") ;
 
    } else {
        firstName.classList.remove("error") ;
    }

    if( lastName.value === "" || lastName.value=== undefined) {
        lastName.classList.add("error") ;
    
    } else {
        lastName.classList.remove("error") ;
    }

    if( email.value === "" || email.value=== undefined) {
        email.classList.add("error") ;
     
    } else {
        email.classList.remove("error") ;
    }

    if( country.value === "" || country.value=== undefined) {
        country.classList.add("error") ;
   
    } else {
        country.classList.remove("error") ;
    }

    if( postalCode.value === "" || postalCode.value=== undefined) {
        postalCode.classList.add("error") ;
    
    } else {
        postalCode.classList.remove("error") ;
    }
    if( phoneNumber.value === "" || phoneNumber.value=== undefined) {
        phoneNumber.classList.add("error") ;
     
    } else {
        phoneNumber.classList.remove("error") ;
    }


    return true

 }