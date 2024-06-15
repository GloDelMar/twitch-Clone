import React from "react";
export default function UserIcon({ img }) {
  return (
    <article className="rounded-l p-1 mb-1 lg:ml-5 ml-1 content-center">
        <img className="rounded-full w-8 h-8 " src={img} alt="" />
    </article>
  );
}