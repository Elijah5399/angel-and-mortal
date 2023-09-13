import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className={
        "absolute top-9 left-12 text-white transition-colors duration-200 hover:text-pink-400"
      }
      type="button"
      onClick={() => router.back()}
    >
      <AiOutlineArrowLeft className=" text-2xl" />
    </button>
  );
}
