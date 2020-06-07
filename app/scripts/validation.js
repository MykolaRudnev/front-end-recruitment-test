function validate() {
  document.querySelectorAll('.validate-input').forEach(node => {
    if (node.value == "" || node.value === undefined) {
      node.classList.add("error")
    } else {
      node.classList.remove("error")
      node.classList.add("success")
    }
  })
  
 const validateField = document.querySelectorAll('.success');
    if (validateField.length=== 9){
      alert("Purchase completed wait for an email")
    }else{
      alert("Fulfill all fields ")
    }
 
}
