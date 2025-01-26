import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsTiktok,
  BsLinkedin,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border-t-2 border-[#6A38C2] shadow-md">
      <div className="w-full max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="text-2xl font-bold text-white bg-gradient-to-r from-indigo-500 via-gray-500 to-pink-500 px-4 py-2 rounded-lg hover:shadow-lg"
            >
              World Largest Job Portal
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                ></Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/MASUDALAM234970"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>

          <div className="sm:col-span-3 md:col-span-1 text-center sm:text-right">
            <div className="flex justify-center sm:justify-end gap-4">
              <Footer.Icon
                href="#"
                icon={BsFacebook}
                className="text-teal-500 hover:text-teal-400"
              />
              <Footer.Icon
                href="#"
                icon={BsInstagram}
                className="text-pink-500 hover:text-pink-400"
              />
              <Footer.Icon
                href="#"
                icon={BsTwitter}
                className="text-blue-400 hover:text-blue-300"
              />
              <Footer.Icon
                href="https://github.com/MASUDALAM234970"
                icon={BsGithub}
                className="text-gray-700 hover:text-gray-600"
              />
              <Footer.Icon
                href="#"
                icon={BsDribbble}
                className="text-purple-500 hover:text-purple-400"
              />
              <Footer.Icon
                href="https://www.linkedin.com/in/md-masud-alam-5a1a18240/"
                icon={BsLinkedin}
                className="text-blue-600 hover:text-blue-500"
              />
              <Footer.Icon
                href="https://www.tiktok.com/@masudalam234970"
                icon={BsTiktok}
                className="text-black hover:text-gray-800"
              />
            </div>
          </div>
        </div>

        <Footer.Divider className="my-6 border-gray-300" />

        <div className="text-center">
          <Footer.Copyright
            href="#"
            by="Job Portel"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
