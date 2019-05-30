import React from "react";
import TextLink from "@hig/text-link";
import Typography from "@hig/typography";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import Breadcrumbs from "../index";
import infoOptions from "./infoOptions";
import withThemeProvider from "./withThemeProvider";

const storybook = storiesOf("Breadcrumbs", module);

storybook.add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [TextLink, Typography, KnobbedThemeProvider]
  })(() =>
    withThemeProvider(
      <Breadcrumbs>
        <TextLink link="#">Autodesk</TextLink>
        <TextLink link="#">HIG</TextLink>
        <TextLink link="#">Basics</TextLink>
        <Typography>Colors</Typography>
      </Breadcrumbs>
    )
  )
);
