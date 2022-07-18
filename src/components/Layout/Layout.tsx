import { ReactNode, useState } from "react";
import { MenuIcon } from "../Icon/index";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Container, Stack } from "@mantine/core";
import { useStateContext } from "context/ContextProvider";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { state, setState } = useStateContext();
  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {state.activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg z-100 bg-white">
            <Sidebar />
          </div>
        ) : null}
        <Container
          className={
            state.activeMenu
              ? "dark:bg-main-dark-bg min-h-screen bg-main-bg overflow-hidden md:ml-72 w-full flex flex-col relative h-screen p-0 max-w-full ml-0 "
              : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 overflow-hidden h-screen p-0 max-w-full ml-0"
          }
        >
          <div className="sticky md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <Box className="bg-gray-50 min-h-screen px-10 py-4 flex-1 overflow-y-auto p-5 relative">
            {children}
          </Box>
        </Container>
      </div>
    </>
  );
}
