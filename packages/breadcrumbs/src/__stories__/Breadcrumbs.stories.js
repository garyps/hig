import React from "react";
import TextLink from "@hig/text-link";
import Typography from "@hig/typography";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

import getKnobs from "./getKnobs";
import Breadcrumbs from "../index";
import infoOptions from "./infoOptions";
import withThemeProvider from "./withThemeProvider";

const storybook = storiesOf("Breadcrumbs", module);

storybook.add(
  "default",
  withInfo(infoOptions)(() => {
    const props = {
      disabled: false
    };
    const { disabled, theme, ...otherProps } = getKnobs(props);

    return withThemeProvider(
      <Breadcrumbs {...otherProps}>
        <TextLink link="#">Home</TextLink>
        <TextLink link="#">Parent</TextLink>
        <Typography>Current</Typography>
      </Breadcrumbs>
    );
  })
);
