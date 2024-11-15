import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
    },
    },
  },
};

// Use this to add scripts in the head (like font)
// Use this as the "global dependency" place

export default preview;
