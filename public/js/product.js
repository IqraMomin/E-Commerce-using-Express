const submitHandler= (e)=>{
    e.preventDefault();
    console.log("submit function called");

    const product = e.target.productName.value;
    const obj = {
        "productName":product
    }
    axios.post("http://localhost:3000"+"/products",obj).then(res=>{
        console.log(`Value returned ${res.data}`)
    })
}