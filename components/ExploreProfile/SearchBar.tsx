"use client";

import React, { useRef } from "react";
import TagSelect from "../shared_components/TagSelect";
import UnfinishedBar from "../unfinished/UnfinishedBar";

const SearchBar = () => {
  const unfinishedRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    unfinishedRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    unfinishedRef.current?.close();
    document.body.style.overflow = "";
  };
  return (
    <>
      <form className="flex flex-wrap w-full gap-3 items-center justify-center">
        {/* Keyword Input */}
        <input
          name="keyword"
          id="keyword"
          className="w-full mx-2 sm:flex-grow min-w-[200px] h-[36px] border border-gray-400 rounded-[10px] px-3 py-2 text-sm"
          type="text"
          placeholder="｜搜尋職稱或領域關鍵字"
        />

        {/* Tag selects */}
        <TagSelect id="industry" option={["test"]} opValue={["test"]}>
          產業
        </TagSelect>

        <TagSelect id="career" option={[]} opValue={[]}>
          職業
        </TagSelect>

        {/* Submit button */}
        <button
          type="button"
          className="px-4 py-2 rounded-[10px] text-sm font-medium text-black bg-[#E4E2DD] hover:bg-[#E4E2DD]/70 transition-all duration-300 ease-in"
          onClick={openDialog}
        >
          搜尋
        </button>
      </form>
      <UnfinishedBar
        ref={unfinishedRef}
        discription="更多精彩功能即將上線，敬請期待～"
        btnClicked={closeDialog}
      ></UnfinishedBar>
    </>
  );
};

export default SearchBar;
