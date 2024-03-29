import React from "react";
import Link from "next/link";
import useSWR from 'swr'
import getConfig from 'next/config'; 
const { basePath } = getConfig()

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import ListItem from "components/List/ListItem.js";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function TerrariaPage() {


  const { data, error } = useSWR('/api/test', fetcher)
  

  var dataList = <></>;
  if(data) {
    dataList = data.map(ele => {
      return <ListItem key={ele.name} {...ele}></ListItem>;
    })
  }

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('${basePath}/img/external/terraria-wallpaper.png')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Terraria - TModLoader
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    The mods I have created for TModLoader (a modding package for Terraria). I have focused on adding Quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Terraria Mods</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Here is a list of open-source terraria mods I have created.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              {
                dataList
              }
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
