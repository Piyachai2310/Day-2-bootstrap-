import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
    การทำให้ URL ไม่เปลี่ยนจาก http://localhost:3000 เป็น http://localhost:3000/? ได้ใช้วิธีการที่เรียกว่า 
    "Prevent Default Behavior" โดยใช้ JavaScript ในการจัดการการส่งฟอร์ม ซึ่งเราสามารถใช้ preventDefault() 
    เพื่อป้องกันการส่งคำขอใหม่ (request) ไปยัง URL ที่มี query string
*/

/*
    เพื่อไม่ให้เมื่อโหลดเข้าหน้าเว็บก็ขึ้น invalid ทั้น(จะทำให้ขึ้นแจ้งเตือนแดง) จะแก้เพื่อให้ขึ้นแดงตอนที่ไม่กรอกอะไรแล้วกดปุ่ม
    submit โดยการ แก้ปัญหานี้จะต้องลบ was-validated ออกจากคลาสของ <form> และเพิ่มเงื่อนไขเพื่อตรวจสอบว่าฟอร์มถูก 
    submit ไปแล้วหรือไม่ และเพิ่มคลาส was-validated หลังจากการกดปุ่ม
*/

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // สามารถดำเนินการอื่น ๆ ที่ต้องการทำต่อไปได้
  };
  return (
    <>
      <div className='container h-50 ' style={{ height: "100px" }}>
        {/* ================================== Header =================================== */}

        <div className="mx-auto mt-3 row-col-1  " style={{ height: "100%" }}>
          <div className='col d-flex justify-content-center align-items-center' style={{ flexDirection: "column" }}>
            <div className='row my-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-browser-chrome" viewBox="0 0 16 16" style={{ color: "rgb(129,13,212)" }}>
                <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              </svg>
            </div>
            <div className='row '>
              <h1>Web to day 2</h1>
            </div>
          </div>

          {/* ================================== Intro =================================== */}

          <div className='fs-5 text-center'>
            <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
        </div>



        {/* ================================== section =================================== */}


        <section className='row mb-5'>
          <div className='col-md-5 col-lg-4 order-md-last'>

            {/* ==========Your card ================ */}
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='text-primary'> Your cart</span>
              <span className='badge rounded-pill bg-primary'>3</span>
            </h4>

            {/* ========== list-group ================ */}
            <ul className='list-group mb-3'>
              <li className='list-group-item d-flex  justify-content-between lh-sm'>
                <div>
                  <h6>Product name</h6>
                  <small className='text-muted'>Brief description</small>
                </div>
                <span className='text-muted'>$12</span>
              </li>

              <li className='list-group-item d-flex justify-content-between'>
                <div>
                  <h6>Second Product</h6>
                  <small className='text-muted'>Brief description</small>
                </div>
                <span className='text-muted'>$8</span>
              </li>

              <li className='list-group-item d-flex justify-content-between'>
                <div>
                  <h6>Third item</h6>
                  <small className='text-muted'>Brief description</small>
                </div>
                <span className='text-muted'>$5</span>
              </li>

              <li className='list-group-item d-flex justify-content-between'>
                <div className='text-success'>
                  <h6>Promo code</h6>
                  <small>Brief description</small>
                </div>
                <span className='text-success'>-$5</span>
              </li>


              <li className='list-group-item d-flex justify-content-between'>
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            {/* ========== list-group ================ */}
            <form className='card p-2'>
              <div className='input-group'>
                <input type='text' className='form-control' placeholder='Promo code' fdprocessedid="i9fk0g" />
                <button type='submit' className='btn btn-secondary' fdprocessedid="8c8j0wd">Redeem</button>
              </div>
            </form>

          </div>

          {/* ================ Form =============== */}

          <div className='col-md-7 col-lg-8'>
            <h4 className='mb-3'>Billing address</h4>
            <form className={`needs-validation ${submitted ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
              <div className='row g-3'>

                {/* First Name */}
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">First name</label>
                  <input type="text" class="form-control" id="firstName" placeholder required />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                {/* Last Name */}
                <div className='col-sm-6'>
                  <label for="lastName" className='form-label'>Last name</label>
                  <input type='text' className='form-control' id='lastName' placeholder required ></input>
                  <div className='invalid-feedback'>
                    Valid last name is required.
                  </div>
                </div>

                {/* Username */}
                <div className='col-12'>
                  <label className='form-label'>Username</label>
                  <div className='input-group'>
                    <span className='input-group-text'>@</span>
                    <input type='text' placeholder='Username' required className='form-control' />
                    <div className='invalid-feedback'>Your username is required</div>
                  </div>
                </div>

                {/* Email */}
                <div className='col-12'>
                  <label className='form-label'>Email <span className='text-muted'>(Optional)</span></label>
                  <input className='form-control' placeholder="you@example.com" required id="email" />
                  <div className='invalid-feedback'>Please enter a valid email address for shipping updates.</div>
                </div>

                {/* Address */}
                <div className='col-12'>
                  <label className='form-label'>Address</label>
                  <input className='form-control' placeholder='1234 Main St' required id="address" />
                  <div className='invalid-feedback'>Please enter your shipping address.</div>
                </div>

                {/*Country */}
                <div className='col-md-5'>
                  <label className='form-label'>Country</label>
                  <select className='form-select' required  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">Please select a valid country.</div>
                </div>

                {/*State */}
                <div class="col-md-4">
                  <label for="state" class="form-label">State</label>
                  <select class="form-select" id="state" required >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                {/*Zip */}
                <div class="col-md-3">
                  <label for="zip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required />
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div>

                <hr className='my-4' />

                <div className="form-check">
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label' for="same-address" >Shipping address is the same as my billing address</label>
                </div>

                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label'>Save this information for next time</label>
                </div>

                <hr />

                {/*Payment*/}
                <h4>Payment</h4>
                <div class="my-3">
                  <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" required />
                    <label class="form-check-label" for="credit">Credit card</label>
                  </div>
                  <div class="form-check">
                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                    <label class="form-check-label" for="debit">Debit card</label>
                  </div>
                  <div class="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                    <label class="form-check-label" for="paypal">PayPal</label>
                  </div>
                </div>

                <div className='row gy-2'>
                  <div class="col-md-6">
                    <label className='form-label'>Name on card</label>
                    <input type='text' className='form-control' required />
                    <small className='text-muted'>Full name as displayed on card</small>
                    <div className='invalid-feedback'>Name on card is required</div>
                  </div>
                  <div class="col-md-6">
                    <label className='form-label'>Credit card number</label>
                    <input type='text' className='form-control' required />
                    <div className='invalid-feedback'>Credit card number is required</div>
                  </div>
                  <div class="col-md-3">
                    <label className='form-label'>Credit card number</label>
                    <input type='text' className='form-control' required />
                    <div className='invalid-feedback'>Expiration date required</div>
                  </div>
                  <div class="col-md-3">
                    <label className='form-label'>Credit card number</label>
                    <input type='text' className='form-control' required />
                    <div className='invalid-feedback'>Security code required</div>
                  </div>
                </div>


              </div>
              <hr className='my-4' />

              <button className='w-100 btn btn-primary btn-lg' type='submit' > Continue to checkout</button>
            </form>

          </div>
        </section>

        <footer className='my-5 pt-5 text-muted text-center text-small'>
          <p className='mb-1'>© 2017–2021 Company Name</p>
          <ul class="list-inline ">
            <li class="list-inline-item"><a href="#">Privacy</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Support</a></li>
          </ul>
        </footer>




      </div>
    </>
  );
}

export default App;
