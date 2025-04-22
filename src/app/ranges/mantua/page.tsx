export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-stone-600">
                Mantua Firing Range
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Range Rules
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                The Mantua Range is located at 107 North Dam Road in Mantua.
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800">
                Hours of operation:
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800">
                Daylight hours, 7-days a week. (Night shoot-contact Al first)
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800">
                The covered 110 yard position is the only long range one!
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800 underline">
                Lock gate after entering and upon leaving.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="/mantua.jpg"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="order-last lg:col-span-2">
            <p>
              All shooters at Mantua must either be{" "}
              <strong>BEWF Designated Range Master</strong>, OR be accompanied
              and supervised by a <strong>Certified BEWF Range Master</strong>.{" "}
              <span className="font-semibold text-red-600">NO EXCEPTIONS</span>
            </p>

            <ul className="list-inside list-disc space-y-2">
              <li>
                The lower range is for 110 yard rifle and 50 foot pistol
                shooting. <strong>No shotguns on lower range.</strong>
              </li>
              <li>
                Shoot targets only within the shooting lanes. Remove all
                material (rocks, boxes, target brackets) after use.
              </li>
              <li>
                The 50 foot and 110 yard targets have visible berms behind them
                for safety.
              </li>
              <li>
                Only paper and/or steel swinger targets properly posted are
                allowed. <strong>No exploding targets.</strong>
              </li>
              <li>
                Clay bird shooting is allowed on the upper range only. Not
                recommended due to proximity to highway. Clean up boxes and
                hulls.
              </li>
              <li>
                Upper area pistol range cannot be used while the lower
                rifle/pistol range is in use.
              </li>
              <li>
                One-hour time limit per range if others are waiting. Alternate
                use if both ranges are needed.
              </li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold">General Safety Rules</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Always keep the gun pointed in a safe direction.</li>
              <li>Keep your finger OFF the trigger until ready to shoot.</li>
              <li>Keep the gun unloaded until ready to use.</li>
              <li>Be sure of your target and what is beyond.</li>
              <li>Firearms behind the firing line must be unloaded.</li>
              <li>
                Shooting must occur within marked shooting lanes, at designated
                target areas with proper targets.
              </li>
              <li>
                Cease fire and clear firearms whenever targets are being changed
                or inspected.
              </li>
              <li>Hearing and eye protection recommended.</li>
              <li>Practice safety and common sense at all times.</li>
              <li>
                <strong>No alcoholic beverages</strong> allowed.
              </li>
              <li>
                <strong>No tracer or armor piercing ammunition</strong>.
              </li>
              <li>Do not shoot at support posts for target boards.</li>
              <li>
                No glass, bottles, cans, boxes, or junk targets. Violators may
                forfeit membership.
              </li>
              <li>Clean up brass and targets after shooting.</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold">Membership & Conduct</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                All shooters must be range masters with a valid membership, or
                be supervised by a range master during open hours.
              </li>
              <li>
                Non-members must be cleared before entry and pay a $5.00 usage
                fee. Unaccompanied non-members are trespassing and subject to
                prosecution.
              </li>
              <li>Be respectful of other shooters.</li>
              <li>
                Improper use jeopardizes the range. Violators will lose
                privileges and may face prosecution.
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              <p className="font-semibold">Protect your range!</p>
              <p>
                Report violators (name, license number, date, time) to{" "}
                <strong>Al Smart</strong>:{" "}
                <a href="tel:14357235711" className="text-blue-600 underline">
                  (435) 723-5711
                </a>
              </p>
              <p>
                Report vandalism to the{" "}
                <strong>Box Elder County Sheriff&apos;s Office</strong>:{" "}
                <a href="tel:14357343800" className="text-blue-600 underline">
                  (435) 734-3800
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
