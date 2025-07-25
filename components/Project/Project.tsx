import { useState } from "react";

export default function Project({ id }: { id: string }) {
  const tabs = [
    {
      id: "bmw",
      label: "BMW",
      videoUrl: "https://drive.google.com/file/d/1K7TEJ5d9x4BhnNzkt86cZI5zrLDKJ0Wk/preview",
    },
    {
      id: "royal",
      label: "ROYAL ENFIELD",
      videoUrl: "https://www.youtube.com/embed/ZUJl6EHxLmU",
    },
    {
      id: "threeD",
      label: "3D",
      videoUrl: "https://drive.google.com/file/d/1g4Yid1FypRCnjLiCChaQAKQ7z9pflp4S/preview",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // Aman karena default dari array

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex space-x-4 justify-evenly border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium border-b-2 focus:outline-none transition duration-200 ${
              activeTab === tab.id
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-600 hover:text-indigo-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Iframe Preview */}
      {activeTabData ? (
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={activeTabData.videoUrl}
            title={activeTabData.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      ) : (
        <p className="text-center text-red-500">Video not found.</p>
      )}
    </section>
  );
}
