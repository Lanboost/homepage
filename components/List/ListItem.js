import React from "react";
import Link from "next/link";
// components

export default function ListItem(props) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <Link href={props.url}>
        <div className="cursor-pointer px-6">
          <img alt="..." src={props.image} className="mx-auto max-w-120-px" />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">{props.name}</h5>
            <p
              className="line-clamp-3 mt-1 text-sm text-blueGray-400 font-semibold"
              dangerouslySetInnerHTML={{ __html: props.desc }}
            ></p>
          </div>
        </div>
      </Link>
    </div>
  );
}
