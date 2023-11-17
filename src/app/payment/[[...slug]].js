import { useRouter } from "next/navigation";
import React from "react";

export default function payment() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-full align-middle max-w-sm rounded-xl bg-layer-2 px-8 py-6">
        <h3 className="text-lg font-semibold text-heading">Payment</h3>

        <dl className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm font-semibold text-text">You Sent</dt>
            <dd className="text-lg font-semibold text-heading">$3,200 USD</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm font-semibold text-text">
              Total fees (included)
            </dt>
            <dd className="text-sm font-semibold text-heading">23.34 USD</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm font-semibold text-text">
              Total amount to convert
            </dt>
            <dd className="text-sm font-semibold text-heading">3,176.66 USD</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm font-semibold text-text">
              Guaranteed Rate (24 hours)
            </dt>
            <dd className="text-sm font-semibold text-heading">124.75 USD</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm font-semibold text-text">Recipient gets</dt>
            <dd className="text-lg font-semibold text-heading">¥377,244 JPY</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm font-semibold text-text">Arrives in</dt>
            <dd className="text-sm font-semibold text-heading">5 min</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col space-y-2">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Continue to payment
          </button>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-critical bg-critical px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-critical-accent hover:bg-critical-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-critical disabled:hover:bg-critical disabled:hover:text-white dark:focus:ring-white/80"
          >
            Cancel this transfer
          </button>
        </div>
      </div>
    </div>
  );
}
