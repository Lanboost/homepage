/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { githubProfile, discordProfile, patreonProfile } from "../constants.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-6/12 lg:w-6/12 md:px-4 mr-auto ml-auto">
              <img class="align-middle" src="/img/Lanboost.png" alt="..." />
            </div>

            <div className="w-full md:w-6/12">
              <div className="w-10/12 mr-auto ml-auto ">
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-semibold text-4xl text-blueGray-600">
                    Lanboost.net - Your arrow for guidance!
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    As a gamer and with a master in computer science I create
                    and mod games for fun. Check out my different projects with
                    the links below.
                  </p>
                  <div className="mt-12">
                    <a
                      href="https://www.linkedin.com/in/hugo-lindholm-7390a0159/"
                      target="_blank"
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      About me
                    </a>
                    <a
                      href={githubProfile}
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                      target="_blank"
                    >
                      Github
                    </a>
                    <a
                      href={discordProfile}
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                      target="_blank"
                    >
                      Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-600">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-600 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blueGray-200">
              Highlighted Projects
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-100"></p>
          </div>
        </div>
      </section>
      <section className="block relative z-1 bg-blueGray-600 text-blueGray-200">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-12">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Terraria Mods (with TModLoader)
                  </h5>
                  <Link href="/terraria">
                    <div className="cursor-pointer hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/external/tmodloader.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-6/12 px-12">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Pathfinder (Library)
                  </h5>
                  <Link href="https://github.com/Lanboost/LanboostPathfindingSharp">
                    <div className="cursor-pointer hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/external/pathfinder.png"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-600 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-600 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  💙☕💙
                </span>
              </p>
              <h3 className="font-semibold text-3xl">Do you enjoy my work?</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, support me by spreading the word. And if you
                think it is worth it, support me on Patreon with a coffee!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href={patreonProfile}
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <span>Support on Patreon</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
