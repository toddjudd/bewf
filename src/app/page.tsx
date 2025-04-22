import Link from "next/link";

const ButtonLink = ({
  href,
  blank,
  children,
}: {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
}) => {
  return (
    <Link
      className="rounded-md bg-stone-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-stone-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
      href={href}
      target={blank ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
};

function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="/mountain.jpg"
          className="absolute inset-0 -z-10 size-full object-cover opacity-40"
        />
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 lg:py-24">
            <div className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Box Elder Wildlife Federation Inc.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Assisting in the conservation of wildlife and habitat in Box
                Elder County, Utah.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <ButtonLink href="#membership-info">Become a Member</ButtonLink>
                <a
                  href="#objectives"
                  className="text-sm/6 font-semibold text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}

function Objectives() {
  const features = [
    {
      name: "Protect and Increase",
      description:
        "We Protect and Increase the wildlife populations in Box Elder County, Utah.",
    },
    {
      name: "Cooperate",
      description: "We Cooperate in the enforecement of fish and game laws.",
    },
    {
      name: "Maximize Efforts",
      description:
        "We Maximize Box Elder County's share of federal ans state expenditures in wildlife conservation efforts.",
    },
    {
      name: "Improve Connections",
      description:
        "We Improve Cooperation between sportsmen, landowners, and public lands.",
    },
    {
      name: "Promote Sportsmanship",
      description:
        "We promote sportsmanship among all who participate in the harvest of our surplus of Fish and Wildlife.",
    },
    {
      name: "Promote Youth Participation",
      description:
        "We promote yourth participation and education in outdoor activities.",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2
            className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
            id="objectives"
          >
            Our Objectives
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base/7 font-semibold text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function MembershipInfo() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2
            className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
            id="membership-info"
          >
            Become a Member
          </h2>
          <div className="col-span-3">
            <p>
              We run two Firing-Ranges, sponsor ongoing Wildlife Conservation
              projects throughout the year, replant depleted or needful bird and
              waterfowl ground cover and feed, enhance and provide wildlife
              feed, maintain fishing access crossover stiles with the Union
              Pacific Railroad, assist Utah DWR officers in their assignments as
              requested, coordinate ongoing hunter-education classes and provide
              shooting range facilities for student&apos;s qualification and
              safety instruction.
            </p>
            <br />
            <p>
              If you might be interested in helping with these same goals please
              join us, we have projects open and ongoing that you can enjoy
              participating in while providing valuable wildlife, environmental
              and wildlife sports services. You can become a member of the Box
              Elder Wildlife Federation, Inc. by reading the range rules and
              filling out the membership application or renewal form.
            </p>
            <div className="my-8 flex justify-center gap-4">
              <ButtonLink href="/membership-application.pdf">
                Read Range Rules
              </ButtonLink>
              <ButtonLink href="/membership-application.pdf">
                Download Membership Application
              </ButtonLink>
            </div>
            <p>
              Once done, Mail the applicaiton form along with the appropriate
              dues for the time of year to:
            </p>
            <div className="mt-4 flex justify-center">
              <div className="rounded-lg border border-gray-300 p-4 text-center">
                <p className="font-semibold">
                  Box Elder Wildlife Federation, Inc.
                </p>
                <p>P.O. Box 192</p>
                <p>Brigham City, UT 84302</p>
              </div>
            </div>
            <p className="mt-4">
              If you have any questions, or if you would like us to send you a
              paper copy of the membership application, please contact us by
              mail at the address above, or by email at{" "}
              <a
                className="text-blue-600 hover:underline"
                href="mailto:rangemaster@bewf.org"
                target="_blank"
              >
                rangemaster@bewf.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <Hero />
      <Objectives />
      <MembershipInfo />
    </main>
  );
}
