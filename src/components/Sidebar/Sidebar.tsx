import { BrowserRouter } from "react-router-dom";
import Link from "next/link";
import { CancelIcon } from "../Icon";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../../data/dummy";
import { useStateContext } from "../../../context/ContextProvider";
import { ClipboardIcon } from "../Icon";
import { useRouter } from "next/router";
import { Group } from "@mantine/core";
import NavbarLink from "./NavbarLink/NavbarLink";
import { useCallback } from "react";

const Sidebar = () => {
  const { state, setState } = useStateContext();
  const router = useRouter();
  const isActive = useCallback(
    (value: string) => router.asPath.includes(value),
    [router.asPath]
  );

  const handleCloseSideBar = () => {
    setState({ ...state, activeMenu: false });
  };

  console.log(state.activeMenu);

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 pr-4 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {state.activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <>
              <Link href="/dashboard">
                <Group className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                  <ClipboardIcon />

                  <span>ManageThyTasks</span>
                </Group>
              </Link>
            </>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <NavbarLink
                    active={isActive(link.name)}
                    key={link.name}
                    href={link.name}
                    label={link.name}
                    icon={link.icon}
                  />
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
