import SortButton from "./sortButton";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface Types {
  data: BlogObject;
  setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function DebounceSearchComponent({ data, setProduct }: Types) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      if (event.target.value.length > 2) {
        params.set("query", event.target.value);
      } else {
        params.delete("query");
      }

      replace(`${pathName}?${params.toString()}`);
    },
    500
  );

  return (
    <>
      <div>
        <input
          className="lg:w-[40rem]  justify-self-center w-72 sm:w-[30rem] rounded-[0.7rem] bg-[#e2e2e2]  px-2 py-2 [transition:all_0.3s] focus:bg-[#fff]"
          type="text "
          placeholder="Search Product..."
          onChange={handleSearch}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <SortButton
        setProduct={setProduct}
        product={data.result}
        data={data}
        query={searchParams.get("query")?.toString()}
      />
    </>
  );
}
