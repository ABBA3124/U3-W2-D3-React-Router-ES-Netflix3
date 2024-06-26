import React from "react"
import "./SettingsPage.css"
import Avatar from "../Navbar/img/avatar.png"

function SettingsPage() {
  return (
    <div className="bg-white mt-3 mb-3">
      <section className="container p-5">
        <h1>Account</h1>
        <hr className="text-secondary" />
        <div className="d-block d-lg-flex">
          <div className="w-50 abba">
            <p className="text-secondary mb-4 fs-4">MEMBERSHIP & BILLING</p>
            <button className="grigiotestobottone3 border p-2">Cancel Membership</button>
          </div>
          <div>
            <div className="row">
              <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
                <p className="fw-bold">student@strive.school</p>
              </div>
              <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6 text-end">
                <p>
                  <a href="#1" className="text-decoration-none">
                    Change account email
                  </a>
                </p>
              </div>
              <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
                <p className="text-secondary">Password: *********</p>
              </div>
              <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6 text-end">
                <p>
                  <a href="#1" className="text-decoration-none">
                    Change password
                  </a>
                </p>
              </div>
              <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
                <p className="text-secondary">Phone: 321 044 1279</p>
              </div>
              <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6 text-end">
                <p>
                  <a href="#1" className="text-decoration-none">
                    Change phone number
                  </a>
                </p>
              </div>
              <hr className="text-secondary" />
              <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
                <p className="fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-paypal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z" />
                  </svg>
                  PayPal - admin@strive.school
                </p>
              </div>
              <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6 text-end">
                <p>
                  <a href="#1" className="text-decoration-none">
                    Update payment info
                  </a>
                </p>
              </div>
              <div className="col-12 text-end">
                <p>
                  <a href="#1" className="text-decoration-none">
                    Billing details
                  </a>
                </p>
              </div>
              <hr className="text-secondary" />
              <div className="col-12 text-end">
                <p>
                  <a href="#1" className="text-decoration-none">
                    Redeem gift card or promo code
                  </a>
                </p>
              </div>
              <div className="col-12 text-end">
                <p>
                  <a href="#1" className="text-decoration-none">
                    Where to buy gift cards
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-secondary" />
        <div className="row row-cols-12">
          <div className="col-3">
            <p className="text-secondary">PLAN DETAILS</p>
          </div>
          <div className="col-3">
            <p className="fw-bold text-start">
              Premium
              <svg viewBox="0 0 4770 960" className="quality-icon w-25">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path
                    d="M724,595 C724,642 714,672 694,684 C673,696 622,702 538,702 C460,702 412,696 393,684 C373,672 363,642 363,595 L363,247 L291,247 L291,612 C291,665 309,701 344,721 C379,739 445,749 543,749 C647,749 715,739 748,720 C780,700 796,659 796,595 L796,247 L724,247 L724,595 Z M1013,691 L1013,247 L941,247 L941,744 L1341,744 L1341,691 L1013,691 Z M1858,299 L1858,247 L1372,247 L1372,299 L1580,299 L1580,744 L1652,744 L1652,299 L1858,299 Z M2428,617 C2428,556 2394,525 2327,520 L2327,519 C2369,515 2398,503 2414,484 C2429,467 2437,434 2437,388 C2437,336 2422,300 2394,278 C2366,257 2318,247 2249,247 L1946,247 L1946,744 L2018,744 L2018,542 L2259,542 C2323,542 2356,571 2356,629 L2356,744 L2428,744 L2428,617 Z M2337,475 C2318,489 2281,495 2225,495 L2018,495 L2018,295 L2250,295 C2299,295 2331,301 2345,314 C2360,328 2368,358 2368,402 C2368,438 2358,462 2337,475 Z M3008,744 L3083,744 L2844,247 L2743,247 L2510,744 L2586,744 L2635,639 L2958,639 L3008,744 Z M2937,596 L2656,596 L2795,292 L2937,596 Z M3730,549 L3428,549 L3428,746 L3330,746 L3330,247 L3428,247 L3428,443 L3730,443 L3730,247 L3829,247 L3829,746 L3730,746 L3730,549 Z M4226,247 C4301,247 4356,260 4389,286 C4417,306 4438,335 4454,372 C4470,408 4478,449 4478,493 C4478,591 4449,661 4389,706 C4356,732 4301,746 4226,746 L3980,746 L3980,247 L4226,247 Z M4216,639 C4346,639 4373,562 4373,493 C4373,427 4359,351 4216,351 L4078,351 L4078,639 L4216,639 Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M4638.00019,0 C4711.00009,0 4770,59 4770,132 L4770,827 C4770,868.423884 4751.51202,905.147426 4722.42954,929.452533 C4699.55882,948.56629 4670.13605,960 4638.00019,960 L133.999803,960 C58.9999134,960 0,901 0,827 L0,132 C0,59 58.9999134,0 133.999803,0 L4638.00019,0 Z M133.999803,80 C103.999847,80 79.9998826,103 79.9998826,132 L79.9998826,827 C79.9998826,857 103.999847,880 133.999803,880 L4638.00019,880 C4667.00015,880 4690.00012,856 4690.00012,827 L4690.00012,132 C4690.00012,103 4667.00015,80 4638.00019,80 L133.999803,80 Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </p>
          </div>
          <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
            <p className="text-end">
              <a href="#1" className="text-decoration-none">
                Change plan
              </a>
            </p>
          </div>
          <hr className="text-secondary" />
          <div className="col-3">
            <p className="text-secondary">SETTINGS</p>
          </div>
          <div className="col-9">
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Parental controls
              </a>
            </p>
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Test participation
              </a>
            </p>
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Manage download devices
              </a>
            </p>
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Activate a device
              </a>
            </p>
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Recent device streaming activity
              </a>
            </p>
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Sign out of all devices
              </a>
            </p>
          </div>
          <hr className="text-secondary" />
          <div className="col-3">
            <p className="text-secondary">MY PROFILE</p>
          </div>
          <div className="col-3">
            <p className="fw-bold">
              <img src={Avatar} alt="" height="35" /> Strive Student
            </p>
          </div>
          <div className="col-12 col-6 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
            <p className="mb-1 text-end">
              <a href="#1" className="text-decoration-none">
                Manage profiles
              </a>
            </p>
            <p className="mb-1 text-end">
              <a href="#1" className="text-decoration-none">
                Add profile email
              </a>
            </p>
          </div>
          <div className="col-5 offset-3">
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Language
              </a>
            </p>
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Playback settings
              </a>
            </p>
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Subtitle appearance
              </a>
            </p>
          </div>
          <div className="col-4">
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Viewing activity
              </a>
            </p>
            <p className="mb-1">
              <a href="#1" className="text-decoration-none">
                Ratings
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SettingsPage
