function alertfor() {
    alert("Hello, Good morining!")
}
function confirmfor() {
    confirm("are you sure?")
}
function promptfor(params) {
    var a = prompt("what is your name?")
    alert(a)
}
function bkchnage(params) {
    document.body.style.backgroundColor="yellow"
}
function bkchnage1(params) {
    document.getElementsById("btn1").style.backgroundColor="Orange"            
}
function alertbtn(params) {
    // var b = prompt("Enter the color Name:")
    
    // Document.body.style.backgroundColor = b
    document.body.style.backgroundColor = prompt("Enter the color Name:")
}
function divcolorchnage(){
    document.getElementById("dv1").style.backgroundColor="grey"
}
function clrpc(params) {
    document.getElementById("dv1").style.backgroundColor = document.getElementById("pc1").value
}