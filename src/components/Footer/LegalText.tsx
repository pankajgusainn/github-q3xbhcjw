import React from 'react';

export function LegalText() {
  return (
    <div className="text-xs leading-relaxed text-gray-600">
      <p>Copyright © 2024 InComm Payments ™. All rights reserved.</p>
      
      <p className="mt-3">
        Vanilla Visa® Gift Cards are issued by TBBK Card Services, Inc., Pathward, N.A. or Sutton Bank, pursuant to a license from Visa U.S.A. Inc. Pathward, N.A. and Sutton Bank, Members FDIC. Cards may be used in the U.S. and District of Columbia everywhere Visa debit cards are accepted. Visa is a registered trademark of Visa, U.S.A. Inc. All other trademarks and service marks belong to their respective owners. Vanilla Discover® Gift Cards are issued by TBBK Card Services, Inc. Vanilla Mastercard® Gift Cards are issued by TBBK Card Services, Inc., Pathward, N.A. or Sutton Bank pursuant to license by Mastercard International Incorporated. Mastercard and the circles design are registered trademarks of Mastercard International Incorporated. Cards may be used in the U.S. and District of Columbia everywhere Debit Mastercard is accepted. Vanilla Bill Payment Prepaid Visa Cards are issued by TBBK Card Services, Inc. pursuant to a license from Visa U.S.A. Inc. See the back of your card for issuing bank. No cash or ATM access. Terms and conditions apply. See Cardholder Agreement for details. Cards are distributed and serviced by InComm Financial Services, Inc., which is licensed as a Money Transmitter by the New York State Department of Financial Services. NMLS ID# 912772.
      </p>

      <p className="mt-3">
        Colorado, Maryland, and Texas customers: <a href="#" className="underline hover:text-vanilla-red">View information</a> about addressing complaints regarding our money services business.
      </p>

      <div className="mt-3 flex flex-wrap gap-4">
        <a href="#" className="underline hover:text-vanilla-red">TBBK Card Services, Inc. Privacy Policy</a>
        <a href="#" className="underline hover:text-vanilla-red">The Bancorp Bank Privacy Policy</a>
        <a href="#" className="underline hover:text-vanilla-red">Pathward, N.A. Privacy Policy</a>
        <a href="#" className="underline hover:text-vanilla-red">Sutton Bank Privacy Policy</a>
        <a href="#" className="underline hover:text-vanilla-red">Terms of Use</a>
        <a href="#" className="underline hover:text-vanilla-red">Cardholder Agreement</a>
        <a href="#" className="underline hover:text-vanilla-red">Accessibility Statement</a>
      </div>
    </div>
  );
}