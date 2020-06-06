function CloneBacone() {
  const bacone = document.getElementById("bacon");
  const cloneBacone = bacone.cloneNode(true);
  const layout = document.getElementById("overview")
  layout.appendChild(cloneBacone);
}
