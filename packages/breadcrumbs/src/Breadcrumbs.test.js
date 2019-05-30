import React from "react";
import renderer from "react-test-renderer";
import Typography from "@hig/typography";
import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  [
    {
      description: "renders with two Typography children",
      props: {
        children: [
          <Typography key="1">A</Typography>,
          <Typography key="2">B</Typography>
        ]
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = <Breadcrumbs {...otherProps}>{children}</Breadcrumbs>;
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
