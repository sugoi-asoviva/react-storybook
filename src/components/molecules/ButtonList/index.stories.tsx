import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Component from ".";

type Props = {};

export default {
  title: "components/molecules/ButtonList",
  component: Component,
} as Meta;

export const Template: Story<Props> = (_) => <Component />;
