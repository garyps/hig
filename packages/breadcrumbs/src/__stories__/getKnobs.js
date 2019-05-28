// import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  disabled: "Disabled"
};

export default function getKnobs(props) {
  const { disabled = false, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic)
  };
}
