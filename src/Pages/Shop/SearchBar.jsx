import Search from "../../Components/Header/Search";

export default function SearchBar() {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm flex">
        <div className="flex-1">
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Search here..."
            className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
          />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button className="h-full rounded-md border-0 bg-transparent py-0 px-2 text-gray-500  focus:ring-inset focus:outline-none sm:text-sm">
            <div>
              <Search color="#333" size="24px" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
