import React from "react";
import { Link } from "react-router-dom";

const FooterCheckout = () => {
  return (
    <div className="w-full max-w-[1200px] pl-5 md:pl-0  mx-auto  text-xs pr-10 py-10">
      <div className="w-full md:w-3/4">
        <span>Need help? Check our Help pages or contact us</span>
        <p>
          For an item sold by Amazon.com: When you click the "Place your order"
          button, we'll send you an email message acknowledging receipt of your
          order. Your contract to purchase an item will not be complete until we
          send you an email notifying you that the item has been shipped.
        </p>
        <p>
          All items in this order are sold by Amazon Export Sales LLC (AES),
          unless otherwise noted. By placing your order, you authorize AES to
          designate a carrier to clear the package and pay the import fees on
          your (or the recipient's) behalf. Customs declarations will be made in
          the name and on the behalf of your (or the recipient's) behalf by the
          designated carrier. You can find the complete terms and conditions of
          your order{" "}
          <Link
            to="/cart"
            className="text-blue-500 hover:text-red-500 hover:underline"
          >
            here
          </Link>
        </p>
        <a
          className="text-blue-500 hover:text-red-500 hover:underline"
          href="https://www.amazon.com/gp/help/customer/display.html/ref=chk_help_statetaxfooter_pri?ie=UTF8&nodeId=202029100"
        >
          Important information about sales tax you may owe in your state You
          may
        </a>
        <p>
          return new, unopened merchandise in original condition within 30 days
          of delivery. Exceptions and restrictions apply. See Amazon.com's
          Returns
          <a
            className="text-blue-500 hover:text-red-500 hover:underline"
            href="https://www.amazon.com/gp/help/customer/display.html/ref=chk_help_returnsfooter_pri?ie=UTF8&nodeId=201819090"
          >
            <span> Policy</span>
          </a>
          .
        </p>
        <p>
          Need to add more items to your order? Continue shopping on the
          Amazon.com
          <Link
            className="text-blue-500 hover:text-red-500 hover:underline"
            to="/"
          >
            <span> homepage.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterCheckout;
