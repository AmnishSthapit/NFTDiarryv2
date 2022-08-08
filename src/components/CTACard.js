import { withRouter } from "next/router";
import React from "react";
import { AppButton } from "./AppButton";

export const CTACard = () => {
  return (
    <section className="">
      <div className="container mx-auto ">
        <div className="flex justify-center ">
          <div className="mb-8 bg-gray-900 rounded-lg  w-3/4 px-10 py-20 text-center">
            <div className="text-white font-bold text-xl mb-2 ">
              GOT AN IDEA?
            </div>
            <p className="text-gray-700 text-base">
              We deliver promise of &quot;Customers First&quot; by building a
              culture of &quot;Employee first&quot;.
            </p>
            <AppButton
              label="Get in touch"
              onClick={() => {
                console.log("hello");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
