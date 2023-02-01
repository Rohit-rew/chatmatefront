import Image from "next/image";

export default function UserInfo() {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src="/userimage.png"
        alt=""
        width={50}
        height={50}
        className="rounded-full bg-gray-400 shadow"
      />
      <h2 className="text-xl text-white">Rohit Kumar</h2>
    </div>
  );
}
