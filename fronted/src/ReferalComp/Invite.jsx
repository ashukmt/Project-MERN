import React from "react";

function Invite() {
  return (
    <div>
      <h3>
        Refer Friends and earn rewards while they start their journey at Masai!
      </h3>
      <div>
        <div className="flex">
          <div>
            <img
              src="https://dashboard.masaischool.com/img/referral/coin_banner_1.svg"
              alt="boy"
            />
          </div>

          <div>
            <h5>Your friend successfully clears the MSAT.</h5>
            <span>You both get 100 coins</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://dashboard.masaischool.com/img/referral/coin_banner_2.svg"
              alt="boy"
            />
          </div>

          <div>
            <h5>Your friend successfully completes the Onboarding Process.</h5>
            <span>You both get 100 coins</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://dashboard.masaischool.com/img/referral/coin_banner_3.svg"
              alt="boy"
            />
          </div>

          <div>
            <h5>
              Your friend starts their classes and completes their 1st week.
            </h5>
            <span>You both get 500 coins</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
