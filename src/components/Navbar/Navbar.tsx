import { useStateContext } from "context/ContextProvider";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { ChatIcon, MenuIcon, NotificationIcon } from "../Icon";
interface NavButtonProps {
  customFunc: () => void;
  icon: ReactNode;
  color: string;
}
const NavButton = ({ customFunc, icon, color }: NavButtonProps) => {
  return (
    <button
      onClick={() => customFunc()}
      style={{ color, border: "none", background: "none", cursor: "pointer" }}
      className="relative text-2xl p-1 hover:bg-light-gray"
    >
      {icon}
    </button>
  );
};

export default function Navbar() {
  const { state, setState } = useStateContext();
  useEffect(() => {
    const handleResize = () =>
      setState({ ...state, screenSize: window.innerWidth });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (state.screenSize && state.screenSize <= 900) {
      setState({ ...state, activeMenu: false });
    } else {
      setState({ ...state, activeMenu: true });
    }
  }, [state.screenSize]);

  const handleActiveMenu = () =>
    setState({ ...state, activeMenu: !state.activeMenu });

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 ">
      {!state.activeMenu ? (
        <NavButton
          customFunc={handleActiveMenu}
          color={"#03C9D7"}
          icon={<AiOutlineMenuUnfold />}
        />
      ) : (
        <NavButton
          customFunc={handleActiveMenu}
          color={"#03C9D7"}
          icon={<AiOutlineMenuFold />}
        />
      )}
      <div className="flex">
        <NavButton
          customFunc={() => <Link href="chats" />}
          color={"#03C9D7"}
          icon={<ChatIcon />}
        />
        <NavButton
          customFunc={() => <Link href="notifications" />}
          color={"#03C9D7"}
          icon={<NotificationIcon />}
        />
        {/* <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          > */}
        {/* <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            /> */}
        {/* <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent> */}
      </div>
    </div>
  );
}
