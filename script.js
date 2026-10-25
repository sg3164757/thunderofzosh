// Thunder of Zosh Landing Page Logic

// 1. Gallery Image Switcher
function switchImage(thumbElem, imgUrl) {
  const mainImg = document.getElementById('mainProductImg');
  if (mainImg) {
    mainImg.src = imgUrl;
  }
  document.querySelectorAll('.gallery-thumbs .thumb').forEach(t => t.classList.remove('active'));
  thumbElem.classList.add('active');
}

// 2. Package & Price Updation
function updatePrice(amount) {
  document.getElementById('summaryTotal').innerText = '₹' + amount.toLocaleString('en-IN');
  document.getElementById('payableTotal').innerText = '₹' + amount.toLocaleString('en-IN');
  
  // Highlight active package card
  const radios = document.querySelectorAll('input[name="package"]');
  radios.forEach(radio => {
    const parentCard = radio.closest('.package-card');
    if (radio.checked) {
      parentCard.classList.add('active');
    } else {
      parentCard.classList.remove('active');
    }
  });
}

// 3. FAQ Accordion Toggle
function toggleFaq(item) {
  item.classList.toggle('active');
}

// 4. Order Form Submission with LocalStorage & Webhook Support
function handleOrderSubmit(e) {
  e.preventDefault();
  
  const form = document.getElementById('orderForm');
  const submitBtn = document.getElementById('submitBtn');
  
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const city = document.getElementById('custCity').value.trim();
  const pincode = document.getElementById('custPincode').value.trim();
  const selectedPkg = document.querySelector('input[name="package"]:checked').value;
  const payableAmount = document.getElementById('payableTotal').innerText;
  
  const orderData = {
    brand: "Thunder of Zosh",
    name: name,
    phone: phone,
    address: address,
    city: city,
    pincode: pincode,
    package: selectedPkg,
    amount: payableAmount,
    timestamp: new Date().toISOString()
  };

  submitBtn.disabled = true;
  submitBtn.innerText = "Confirming Order...";

  // Save to browser localStorage (accessible anytime in inspect/storage)
  try {
    let orders = JSON.parse(localStorage.getItem('toz_orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('toz_orders', JSON.stringify(orders));
  } catch (err) {
    console.error("Storage error:", err);
  }

  // OPTIONAL: Send to Google Sheet Webhook or WhatsApp Notification
  // If you configure a Google Apps Script Webhook or Zapier/Pabbly, put the URL below:
  /*
  fetch('YOUR_WEBHOOK_URL_HERE', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  */

  setTimeout(() => {
    document.getElementById('modalCustName').innerText = name;
    document.getElementById('orderModal').classList.add('show');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerText = "Confirm Cash on Delivery Order ➔";
  }, 700);
}

function closeModal() {
  document.getElementById('orderModal').classList.remove('show');
}
