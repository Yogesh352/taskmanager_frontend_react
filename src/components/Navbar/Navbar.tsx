import React, { useState, ReactNode, useCallback } from "react";
import {
  AppShell,
  Navbar,
  Text,
  useMantineTheme,
  Stack,
  Group,
} from "@mantine/core";
import {
  ClipboardIcon,
  DashboardIcon,
  TodoIcon,
  ChatIcon,
  CalendarIcon,
} from "../Icon";
import NavbarLink from "./NavbarLink/NavbarLink";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {
  children?: ReactNode;
}
export default function NavBar({ children }: NavBarProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const isActive = useCallback(
    (value: string) => router.asPath.includes(value),
    [router.asPath]
  );
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 100, lg: 250 }}
        >
          <Stack spacing={30}>
            <Group spacing={4}>
              <ClipboardIcon className="text-green-500" size={20} />
              <Text className="text-xl font-bold text-green-500 ">
                ManageThyTasks
              </Text>
            </Group>

            <Stack spacing={10}>
              <NavbarLink
                active={isActive("dashboard")}
                href="/dashboard"
                label="Dashboard"
                icon={<DashboardIcon />}
              />
              <NavbarLink
                active={isActive("todo")}
                href="/todo"
                label="Todo"
                icon={<TodoIcon />}
              />
              <NavbarLink
                active={isActive("chats")}
                href="/chats"
                label="Chats"
                icon={<ChatIcon />}
              />
              <NavbarLink
                active={isActive("calendar")}
                href="/calendar"
                label="Calendar"
                icon={<CalendarIcon />}
              />
            </Stack>
          </Stack>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
}
