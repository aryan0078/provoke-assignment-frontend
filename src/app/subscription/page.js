"use client";
import { useEffect, useState } from "react";

export default function subscription() {
  const [subscription, setSubscription] = useState({
    subscriptionType: "monthly",
    subscriptionPlan: "basic",
    plans: [
      {
        name: "Mobile",
        price: 100,
        type: "monthly",
        features: ["Good Video Quality", "Resolution 480p", "1 Device"],
      },
      {
        name: "Basic",
        price: 200,
        type: "monthly",
        features: ["Good Video Quality", "Resolution 480p", "2 Device"],
      },
      {
        name: "Standard",
        price: 500,
        type: "monthly",
        features: ["Good Video Quality", "Resolution 1080p", "2 Device"],
      },
      {
        name: "Premium",
        price: 700,
        type: "monthly",

        features: ["Good Video Quality", "Resolution 4k", "4 Device"],
      },
    ],
  });
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <section class="bg-white dark:bg-gray-900 h-[100vh]">
      <div class="container px-6 py-8 mx-auto">
        <div class="max-w-2xl p-1.5 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800">
          <div class="grid gap-2 md:grid-cols-2">
            <button
              onClick={() =>
                setSubscription({
                  ...subscription,
                  subscriptionType: "monthly",
                })
              }
              class={`${
                subscription?.subscriptionType == "monthly" ? "bg-gray-500" : ""
              } px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200`}
            >
              Monthly
            </button>

            <button
              onClick={() =>
                setSubscription({
                  ...subscription,
                  subscriptionType: "annually",
                })
              }
              class={`${
                subscription?.subscriptionType == "annually"
                  ? "bg-gray-500"
                  : ""
              } flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200`}
            >
              <span class="mx-1">Annually</span>
              <span class="text-xs mx-1 font-normal text-white bg-blue-500 rounded-full py-0.5 px-1.5">
                save 20%
              </span>
            </button>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
          {subscription?.plans
            ?.filter((item) => item.type == subscription.subscriptionType)
            .map((plan) => (
              <div class="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800">
                <div class="text-center">
                  <p class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {plan.name}
                  </p>
                </div>

                <div class="mt-8 space-y-8">
                  {plan.features.map((feature) => (
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span class="mx-4 text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose {plan.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
