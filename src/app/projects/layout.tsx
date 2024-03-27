"use client";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col ">
      <div className="w-fit">
        <Link href={"/"} className="flex items-center p-3 ">
          <ArrowBackIosIcon />
          Back to home
        </Link>
      </div>
      <div className="bg-[#DDE6ED]"> {children}</div>
    </div>
  );
}
