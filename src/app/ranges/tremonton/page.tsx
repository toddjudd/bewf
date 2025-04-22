export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-stone-600">
                Tremonton Firing Range
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Range Rules
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                The Tremonton Range is located at the top of the old county
                landfill/gravel pit in Tremonton. Exit freeway at Road Sheds. Go
                to the county road, northbound, on the west side of the freeway.
                Follow the access road west of the freeway to the next overpass
                north of the Road Sheds. Go across this overpass to the east
                side of the freeway where you will find a locked gate. Enter the
                gate, bear to the right around the hillside and go to the top of
                the mountain where you will find another locked gate. The firing
                range is just beyond the second locked gate.
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800">
                Hours of operation:
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800">
                Monday thru Friday after 3:30 during the winter daylight savings
                time.
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800">
                Monday thru Thursday after 5:30 summer daylight savings time,
                Friday all day.
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800">
                Saturday and Sunday all daylight hours.
              </p>
              <p className="text-md mt-2 font-semibold text-gray-800 underline">
                Lock gate after entering and upon leaving.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="/tremonton.jpg"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="order-last lg:col-span-2">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Targets only on the established shooting areas.{" "}
                <strong>Do NOT go off the range</strong> to place targets.
              </li>
              <li>
                Only paper and cardboard targets properly posted are allowed.
              </li>
              <li>
                All shooting must be accomplished in a safe and responsible
                manner.
              </li>
              <li>Always keep the gun pointed in a safe direction.</li>
              <li>
                Always keep your finger <strong>OFF</strong> the trigger until
                ready to fire.
              </li>
              <li>Always keep the gun unloaded until ready to use.</li>
              <li>Always be sure of your target and what is beyond.</li>
              <li>All firearms behind the firing line must be unloaded.</li>
              <li>
                Shooting must be done within the marked shooting lanes and at
                the established target areas with proper targets.
              </li>
              <li>
                All firing will cease and firearms will be cleared whenever
                targets are being changed or inspected.
              </li>
              <li>Hearing and eye protection are recommended.</li>
              <li>Safety and common sense must be practiced at all times.</li>
              <li>
                <strong>No alcoholic beverages</strong> are allowed on the
                range.
              </li>
              <li>
                <strong>No tracer or armor piercing ammunition</strong> is
                allowed on the range.
              </li>
              <li>Do not shoot at the support posts for the target boards.</li>
              <li>
                No bottles, cans, boxes, or junk may be used for targets.
                Violators may forfeit membership.
              </li>
              <li>
                Each shooter is responsible for cleaning up brass, targets,
                etc., in their area after shooting.
              </li>
              <li>
                All persons shooting must possess a valid membership card.
              </li>
              <li>
                Non-members must be cleared before entering and pay the $5.00
                daily usage fee. Unaccompanied non-members are trespassers and
                subject to prosecution.
              </li>
              <li>Be respectful of other shooters.</li>
              <li>
                The continued use of this facility is dependent on the actions
                of BEWF members. Improper use could jeopardize future use. Rule
                violators will have their privileges terminated and may face
                prosecution.
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
