import axios from "axios"

function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  
  function Checkout() {

  async function displayRazorpay () {
  
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  
        if (!res){
          alert('Razropay failed to load!!')
          return 
        }



        const dummy  ={
            uid:"649c9c04ce79395ae49451a9",
           movieid:'649c9c04ce79395ae49451aa', hallId:"649c9c04ce79395ae49451af", date:new Date().toISOString(),
            slot:1, screenName:"H2", seat:["H12"] ,price:5000
          
          }
  
        // const data = await fetch('http://localhost:1769/razorpay', {method: 'POST'}).then((t) => 
        //   t.json()
        // ) 

  
        // console.log(data)


            const order = await axios.post("http://localhost:3000/book/order",dummy)


            console.log(order.data);



  
      const options = {
        "key": "rzp_test_q10qM4bTk64pGH", // Enter the Key ID generated from the Dashboard
        "amount": `${dummy.price*100}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Movie",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order.data.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url":"http://localhost:1769/verify",
        "notes": {
            "address": "Razorpay CHECKOUT"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const paymentObject = new window.Razorpay(options); 
    paymentObject.open();
    }
  
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />    */}
          <button
          onClick={displayRazorpay}
          >
            Pay now 
          </button>
        </header>
      </div>
    );
  }
  

  export default Checkout