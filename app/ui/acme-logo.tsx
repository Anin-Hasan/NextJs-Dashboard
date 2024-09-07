import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { IdentificationIcon } from "@heroicons/react/20/solid";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <IdentificationIcon className="h-12 w-12 mr-4" />
      <p className="text-[44px]">200921</p>
    </div>
  );
}
