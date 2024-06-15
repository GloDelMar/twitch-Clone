import React from "react"

export default function ChannelShort({ name, category, views }) {
  return (
    <article className="grid grid-cols-5 justify-around gap-1 p-1 hover:bg-gray-800 ">
      <div className="col-span-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{category}</p>
        </div>
        <div className="flex items-center">
          <p className="text-xs">🔴</p>
          <span className="text-white text-xs">{`${views}`}</span>
        </div>
      </div>
    </article>
  );
}
