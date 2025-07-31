import React from "react";

const Faq = () => {
  return (
    <>
      <div class="relative w-full mb-4 bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div class="mx-auto px-5">
          <div class="flex flex-col items-center">
            <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p class="mt-3 text-lg text-neutral-500 md:text-xl">
              Frequenty asked questions
            </p>
          </div>
          <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>What are your opening hours?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Our restaurant is open from 9AM to 9PM every day of the week.
                  Please note that our kitchen may close earlier than the
                  restaurant, so we recommend checking with us for specific
                  dining hours.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>
                    {" "}
                    Do you offer vegetarian/vegan/gluten-free options?{" "}
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Yes, we have a variety of options available for vegetarians,
                  vegans, and those with gluten-free dietary preferences. Our
                  menu includes designated items specifically crafted to
                  accommodate these dietary needs.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Can I track the status of my online order?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Yes, you can! Once you've placed your online order, you'll
                  receive an order confirmation email with details about your
                  order. You can also track the status of your order in
                  real-time through our website or mobile app. We'll keep you
                  informed every step of the way, from preparation to delivery.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>
                    Do you offer contactless delivery and curbside pickup
                    options?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Absolutely! We understand the importance of safety and
                  convenience, which is why we offer contactless delivery and
                  curbside pickup options for all online orders. Simply select
                  your preferred delivery method during checkout, and our team
                  will ensure a seamless and hassle-free experience.
                </p>
              </details>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
