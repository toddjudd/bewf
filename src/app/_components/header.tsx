"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const Links = [
  {
    name: "Events and Meetings",
    links: [
      { name: "Upcoming Events", href: "http://www.bewf.org/events.html" },
      {
        name: "Event and Range Calendar",
        href: "http://www.bewf.org/Calendar.html",
      },
      { name: "Monthly Meetings", href: "http://www.bewf.org/meeting.html" },
      { name: "Hunters Education", href: "http://www.bewf.org/huntered.html" },
    ],
  },
  {
    name: "Gun Ranges",
    links: [
      { name: "Mantua Gun Range", href: "/ranges/mantua" },
      { name: "Tremonton Gun Range", href: "/ranges/tremonton" },
    ],
  },
  { name: "By Laws", href: "/bylaws" },
  {
    name: "Members",
    links: [
      {
        name: "Check Your Email",
        href: "/members/check-email",
      },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Box Elder Wildlife Federation Inc.</span>
            <Image alt="" src="/logo.png" height={150} width={150} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {Links.map((link) => {
            if (link.links) {
              return (
                <Popover key={link.name} className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                    {link.name}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                  >
                    <div className="p-4">
                      {link.links.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {link.name}
              </Link>
            );
          })}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" src="/logo.png" height={100} width={100} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {Links.map((link) => {
                  if (link.links) {
                    return (
                      <Disclosure key={link.name} as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                          {link.name}
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5 flex-none group-data-open:rotate-180"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {link.links.map((subLink) => (
                            <DisclosureButton
                              key={subLink.name}
                              as="a"
                              href={subLink.href}
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                              {subLink.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                    );
                  }

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
