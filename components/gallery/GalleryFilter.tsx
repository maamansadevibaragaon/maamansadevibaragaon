"use client";

interface GalleryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

const categories = [
  "All",
  "Temple",
  "Festival",
  "Aarti",
  "Devotees",
];

export default function GalleryFilter({
  active,
  onChange,
}: GalleryFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-6 py-3 font-semibold transition ${
            active === category
              ? "bg-orange-600 text-white shadow-lg"
              : "bg-orange-100 text-orange-700 hover:bg-orange-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}