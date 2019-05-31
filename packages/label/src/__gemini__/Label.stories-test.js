import React from "react";
import { storiesOf } from "@storybook/react";
import TextLink from "@hig/text-link";
import Typography from "@hig/typography";
import Breadcrumbs from "@hig/breadcrumbs";
import Label from "../index";

storiesOf("Label", module)
  .add("default2", () => <Label>Email</Label>)
  .add("breadcrumbs", () => (
    <Breadcrumbs>
      <TextLink link="#">Autodesk</TextLink>
      <TextLink link="#">HIG</TextLink>
      <TextLink link="#">Basics</TextLink>
      <Typography>Colors</Typography>
    </Breadcrumbs>
  ));
