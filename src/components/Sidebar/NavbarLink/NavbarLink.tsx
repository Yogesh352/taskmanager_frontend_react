import Link from "next/link";
import { ReactNode } from "react";

import { Box, Text, UnstyledButton } from "@mantine/core";

interface NavbarLinkProps {
  href?: string;

  label: string;

  icon?: ReactNode;

  active?: boolean;
}

export default function NavbarLink({
  href,
  icon,
  label,
  active,

}: NavbarLinkProps) {
  return (
    <Link href={href || "/"}>
      <UnstyledButton
        className="flex flex-row items-center w-full rounded-lg px-4 py-3 hover:bg-gray-100"
        sx={(theme) => ({
          backgroundColor: active ? "#03C9D7" : "white",
        })}
      >
        <Box className="text-xl mr-2.5 flex items-center">{icon}</Box>
        <Text
          className="text-lg"
          sx={{
            fontWeight: "normal",

          }}
        >
          {label}
        </Text>
      </UnstyledButton>
    </Link>
  );
}
