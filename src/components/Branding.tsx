import Brand from "./svgs/Brand";

export default function Branding() {
  return (
    <div className="absolute -right-[24px] bottom-[20%] py-2 px-1 rounded-r-lg bg-gray-6">
      <div>
        <span className="[writing-mode:vertical-lr] text-white text-[10px]">
          Powered by
        </span>
      </div>
      <Brand />
    </div>
  );
}
