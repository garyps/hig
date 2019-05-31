import { configure, addDecorator } from "@storybook/react";
import "../shared/config";
import TestDecorator from "./TestDecorator";

addDecorator(TestDecorator);

const req = require.context("../../../", true, /stories-test\.js$/);


function loadStories() {
  req.keys().forEach(req);
  console.log(req.keys());
}

configure(loadStories, module);
