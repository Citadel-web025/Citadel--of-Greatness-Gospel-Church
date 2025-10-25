import React from 'react'

// Replace 'pk_test_DEMO_KEY' with your real Paystack public key when ready.
const PAYSTACK_PUBLIC_KEY = 'pk_test_DEMO_KEY';

export default function Give(){
  const openPaystack = (amount=1000) => {
    if(!window.PaystackPop){
      // load the Paystack inline script dynamically
      const s = document.createElement('script');
      s.src = 'https://js.paystack.co/v1/inline.js';
      s.onload = () => openPaystack(amount);
      document.body.appendChild(s);
      return;
    }
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: 'donor@example.com',
      amount: amount * 100, // in kobo
      currency: 'NGN',
      ref: 'donation-' + Math.floor((Math.random() * 1000000000) + 1),
      onClose: function(){
        alert('Payment window closed.');
      },
      callback: function(response){
        alert('Thank you! Payment complete. Reference: ' + response.reference);
      }
    });
    handler.openIframe();
  }

  return (
    <section>
      <h2>Give / Support the Ministry</h2>
      <p>Your giving empowers the work of the gospel. Use the form below to enter an amount and give.</p>
      <div style={{marginTop: '1rem'}}>
        <label>Amount (NGN): <input id="donation-amount" defaultValue="1000" type="number" /></label>
        <button className="btn" onClick={() => {
          const val = document.getElementById('donation-amount').value || 1000;
          openPaystack(Number(val));
        }}>Donate Now</button>
      </div>
      <p style={{marginTop: '0.5rem', color: '#666'}}><em>Note: This uses a demo key. Replace the public key in <strong>src/components/Give.jsx</strong> with your live Paystack public key when ready.</em></p>
    </section>
  )
}
