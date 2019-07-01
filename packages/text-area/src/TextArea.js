import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "@hig/input";
import { css } from "emotion"

import { ThemeContext } from "@hig/theme-context";

import customStylesheet from "./customStylesheet";

const variantTypes = ["line", "box"];

export default class TextArea extends Component {
  static propTypes = {
    onBlur: PropTypes.func,
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user puts focus onto the field
     */
    onFocus: PropTypes.func,
    /**
     * Called as user changes the value of the field
     */
    onInput: PropTypes.func,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
    /**
     * The visual variant of the textarea
     */
    variant: PropTypes.oneOf(variantTypes)
  };

  static defaultProps = {
    variant: "line"
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const { variant, stylesheet, ...otherProps } = this.props;
          const cssStyles = stylesheet && stylesheet(
                                            this.props,
                                            resolvedRoles,
                                            metadata.colorSchemeId
                                          )
                                          
          return (
            <div style={{ position: "relative" }}>
              <Input
                className={cssStyles ? css(cssStyles) : ""}
                stylesheet={customStylesheet}
                tagName="textarea"
                variant={variant}
                {...otherProps}
              />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
