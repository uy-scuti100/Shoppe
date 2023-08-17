import Image from "next/image";
import search from "../../public/assets/search.svg";

const Search = () => {
   return (
      <section className="flex items-center h-8 gap-2 px-4 rounded w-[390px] md:w-full bg-LightGray">
         <Image src={search} alt="search-icon" width={12} height={12} />
         <input
            type="text"
            className="text-white bg-transparent outline-none placeholder:text-DarkGray placeholder:body-small"
            placeholder="Search"
         />
      </section>
   );
};

export default Search;
