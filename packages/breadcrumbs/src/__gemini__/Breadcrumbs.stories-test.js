import React from "react";
import { storiesOf } from "@storybook/react";
import TextLink from "@hig/text-link";
import Typography from "@hig/typography";
import Label from "@hig/label";
import Breadcrumbs from "../index";

storiesOf("Breadcrumbs", module)
  .add("default2", () => <Label>Email</Label>)
  .add("breadcrumbs", () => (
    <Breadcrumbs>
      <TextLink link="#">Autodesk</TextLink>
      <TextLink link="#">HIG</TextLink>
      <TextLink link="#">Basics</TextLink>
      <Typography>Colors2</Typography>
    </Breadcrumbs>
  ));
