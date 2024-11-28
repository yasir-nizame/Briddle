export default function Filters() {
  return (
    <div className="flex items-center gap-4 my-4 border-b border-gray-200 pb-2 mb--8">
      {/* Active Button */}
      <button className="text-purple-500 font-bold pb-2 border-b-2 border-purple-500 transition duration-300 ">
        All Events
      </button>
      {/* Inactive Button */}
      <button className="text-gray-500 500 pb-2 transition duration-300">
        Saved Events (2)
      </button>
    </div>
  );
}
