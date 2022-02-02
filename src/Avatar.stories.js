import React from "react";

import { Avatar } from "./Avatar";

export default {
  title: "Design System/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["tiny", "small", "medium", "large"],
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
};

export const Standard = (args) => <Avatar {...args} />;
Standard.args = {
  size: "large",
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

export const Sizes = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
};
Sizes.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "4 sizes are supported",
  },
};

export const Initials = (args) => (
  <div>
    <Avatar {...args} username="Tom Coleman" />
    <Avatar {...args} username="Dominic Nguyen" />
    <Avatar {...args} username="Kyle Suss" />
    <Avatar {...args} username="Michael Shilman" />
  </div>
);

Initials.args = {
  loading: false,
  size: "large",
};

export const Loading = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Loading.args = {
  loading: true,
};

export const Large = (args) => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);
