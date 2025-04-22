import type { info } from "console";
import Image from "next/image";

const navigation = {
  security: [
    {
      name: "Homeland Security Advisory",
      href: "https://www.dhs.gov/national-terrorism-advisory-system",
    },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
    { name: "Charity", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 md:px-8 md:pt-32">
        <div className="md:grid md:grid-cols-[1fr_auto] md:gap-8">
          <Image
            alt="Box Elder Wildlife Federation Inc."
            src="/logo.png"
            height={150}
            width={150}
          />
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">
                Security
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.security.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-600 hover:text-gray-900"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-0">
              <h3 className="text-sm/6 font-semibold text-gray-900">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-600 hover:text-gray-900"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
            &copy; 2024 Box Elder Wildlife Federation, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
