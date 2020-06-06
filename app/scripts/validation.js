function validate() {
  document.querySelectorAll('.validate-input').forEach(node => {
    if (node.value == "" || node.value === undefined) {
      node.classList.add("error")

      return false;
    } else {
      node.classList.remove("error")
    }
    return true
  })
}
