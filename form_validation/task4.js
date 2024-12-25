function fun(){
    const a=document.form1.email.value;
    console.log(a);
    const b=document.form1.password.value;
    console.log(b);
    if(!a.includes("@gmail.com")){
        alert("Email is invalid");
    }
    if(b.length<8){
        alert("at least 8 characters");
    }
}