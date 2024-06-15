import React from "react"
import ChannelShort from "./ChannelsShortInfo"

export default function RecomendadosChannels() {
  const channelsInfo = [
    {
        name: "vickypalami",
        category: "Rust",
        views: "1.6 k",
      },
      {
        name: "VEGETTA777",
        category: "Rust",
        views: "15.7 k",
      },
      {
        name: "alexelcapo",
        category: "Ghost of Tsushima",
        views: "557",
      },
      {
        name: "Nuvia_OuO",
        category: "Rust",
        views: "616",
      },
      {
        name: "TeePee",
        category: "Call of Duty",
        views: "2.8 k",
      },
      {
        name: "Conterstine",
        category: "Rust",
        views: "6.3 k",
      },
      {
        name: "StarWraith",
        category: "Rust",
        views: "8.4 k"
      },
      {
        name: "Horcus",
        category: "VALORANT",
        views: "1.5 k",
      },
      {
        name: "IJenz",
        category: "Solo chateando",
        views: "1.6 k"
      },
      {
        name: "ZilvyVT",
        category: "Rust",
        views: "663"
      }
 ]

  return (
    <div>
      {channelsInfo.map((channel, index) => (
        <ChannelShort
          key={`channel-${index}`}
          name={channel.name}
          category={channel.category}
          views={channel.views}
        />
      ))}
    </div>
  )
}
