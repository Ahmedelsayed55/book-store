const Categories = ({ categories, onSelect, selected }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      <button
      onClick={() => onSelect(categories.name)}
        className={`border px-6 py-3 rounded-2xl transition
            ${
              selected === categories.name
                ? "bg-[#D9176C80] text-white"
                : "border-gray-500"
            }
          `}
      >
        All Categories
      </button>
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => onSelect(cat.name)}
          className={`border px-6 py-3 rounded-2xl transition
            ${
              selected === cat.name
                ? "bg-[#D9176C80] text-white"
                : "border-gray-500"
            }
          `}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
