"use client";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const deboundcedValue = useDebounce<string>(value, 500);
  useEffect(() => {
    const query = { title: deboundcedValue };
    const url = queryString.stringifyUrl({
        url: "/search",
        query: query,
    })
    router.push(url);
  },[deboundcedValue, router])

  return (
    <Input 
    placeholder="Search for a song..."
    value={value}
    onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;