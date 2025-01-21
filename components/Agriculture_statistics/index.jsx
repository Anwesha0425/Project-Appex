import React from "react";

const AgricultureStats = () => {
  const data = [
    {
      gp: "Sidheswar",
      villages: [
        { name: "Jakarapalli", farmers: 104, area: 65.83, seed: "Puja, Swarna Masuri" },
        { name: "Kotinada", farmers: 285, area: 136.07, seed: "Puja, Swarna Masuri" },
        { name: "Dankari", farmers: 123, area: 74.49, seed: "Puja, Swarna Masuri" },
        { name: "Ganianala", farmers: 90, area: 40.8, seed: "Puja, Swarna Masuri" },
        { name: "Sidheswar", farmers: 254, area: 148.08, seed: "Puja, Swarna Masuri" },
        { name: "Gopalpur", farmers: 111, area: 64.13, seed: "Puja, Swarna Masuri" },
        { name: "Adikandapur", farmers: 73, area: 41.78, seed: "Puja, Swarna Masuri" },
      ],
      subtotalFarmers: 1040,
      subtotalArea: 571.18,
    },
    {
      gp: "Gokarnapur",
      villages: [
        { name: "Gokarnapur", farmers: 255, area: 113.8, seed: "Puja, Swarna Masuri" },
        { name: "Narasinghpur", farmers: 125, area: 53.8, seed: "Puja, Swarna Masuri" },
        { name: "Anangapur", farmers: 202, area: 132.5, seed: "Puja, Swarna Masuri" },
        { name: "Ladigaon", farmers: 93, area: 74.09, seed: "Puja, Swarna Masuri" },
      ],
      subtotalFarmers: 675,
      subtotalArea: 374.19,
    },
    {
      gp: "Digapahandi",
      villages: [
        { name: "Digapahandi", farmers: 89, area: 54.63, seed: "Puja, Swarna Masuri" },
      ],
      subtotalFarmers: 89,
      subtotalArea: 54.63,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white shadow-lg rounded-lg w-4/5 max-w-screen-lg bg-[#eee9ff]">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700 font-serif text-[#1d3075]">
          Demonstration on Rice under 2nd Green Revolution RKVY
        </h1>

        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg border-collapse border border-gray-300">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Sl. No</th>
                <th className="px-4 py-2 border border-gray-300">G.P.</th>
                <th className="px-4 py-2 border border-gray-300">Village</th>
                <th className="px-4 py-2 border border-gray-300">No. of Farmers</th>
                <th className="px-4 py-2 border border-gray-300">Area in Ha.</th>
                <th className="px-4 py-2 border border-gray-300">Seed Variety</th>
              </tr>
            </thead>
            <tbody>
              {data.map((block, index) => (
                <React.Fragment key={index}>
                  {block.villages.map((village, vIndex) => (
                    <tr
                      key={vIndex}
                      className={`${
                        vIndex % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                      } hover:bg-gray-300`}
                    >
                      <td className="border px-4 py-2 text-center">
                        {vIndex === 0 ? index + 1 : ""}
                      </td>
                      <td className="border px-4 py-2">
                        {vIndex === 0 ? block.gp : ""}
                      </td>
                      <td className="border px-4 py-2">{village.name}</td>
                      <td className="border px-4 py-2 text-center">
                        {village.farmers}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {village.area}
                      </td>
                      <td className="border px-4 py-2">{village.seed}</td>
                    </tr>
                  ))}
                  <tr className="bg-green-100 font-bold">
                    <td className="border px-4 py-2" colSpan={3}>
                      Sub-Total ({block.gp})
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {block.subtotalFarmers}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {block.subtotalArea}
                    </td>
                    <td className="border px-4 py-2"></td>
                  </tr>
                </React.Fragment>
              ))}
              <tr className="bg-green-300 font-bold">
                <td className="border px-4 py-2" colSpan={3}>
                  Grand Total
                </td>
                <td className="border px-4 py-2 text-center">
                  {data.reduce((sum, block) => sum + block.subtotalFarmers, 0)}
                </td>
                <td className="border px-4 py-2 text-center">
                  {data.reduce((sum, block) => sum + block.subtotalArea, 0).toFixed(2)}
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgricultureStats;
