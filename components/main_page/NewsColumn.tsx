import Link from "next/link";
import React from "react";

const NewsColumn = () => {
  const newsSet = {
    title: ["歐洲留學特輯", "打造個人品牌\n要點整理", "創業經驗分享錄", "", ""],
    thumbnail: [],
  };

  return (
    <div className="flex w-full h-[237px] gap-[12px] overflow-x-scroll overflow-y-hidden items-center">
      {newsSet.title.map((title, index) => (
        <Link
          key={index}
          className="flex min-w-[391px] min-h-[237px] bg-[#E4E2DD] items-center justify-center text-[24px]/[60px] text-center font-bold whitespace-pre"
          href="/"
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NewsColumn;
