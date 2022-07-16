import "../styles/globals.css";
import * as NextImage from "next/image";
import { makeServer } from "../src/lib/mirage/index";
import { queryClient } from "../src/lib/react-query";
import { QueryClientProvider } from "react-query";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (story) => {
    makeServer({ environment: process.env.NODE_ENV });
    return (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
};
