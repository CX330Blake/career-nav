"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import UnfinishedBar from "../unfinished/UnfinishedBar";

const Footer = () => {
    const router = useRouter();
    const unfinishedRef = useRef<HTMLDialogElement>(null);

    const goToAboutUs = () => {
        router.push("/#AboutUs");
    };

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
            <div className="overflow-hidden flex flex-col w-full h-[150px] bg-[#E4E2DD] border-t-[1px] border-[#D9D9D9] items-center justify-end">
                <footer className="w-full h-[80px] text-[16px]/[40px] font-normal text-center">
                    <div className="flex justify-center">
                        <button onClick={goToAboutUs}>關於我們</button>
                        <p className="whitespace-pre">{" | "}</p>
                        <button
                            onClick={() => {
                                openDialog();
                            }}
                        >
                            常見問題
                        </button>
                        <p className="whitespace-pre">{" | "}</p>
                        <button
                            onClick={() => {
                                openDialog();
                            }}
                        >
                            隱私問題
                        </button>
                    </div>
                    <p>台大職屬團隊 © 2025</p>
                </footer>
            </div>
            <UnfinishedBar
                ref={unfinishedRef}
                discription="更多精彩功能即將上線，敬請期待～"
                btnClicked={closeDialog}
            />
        </>
    );
};

export default Footer;
