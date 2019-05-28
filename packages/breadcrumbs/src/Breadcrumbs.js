import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

const separator = "/";

class Breadcrumbs extends Component {
  static propTypes = {
    /**
     * Content of the label, including the label text
     */
    children: PropTypes.node
  };

  render() {
    const { children, ...otherProps } = this.props;
    const items = React.Children.toArray(children)
      .filter(child => React.isValidElement(child))
      .map((child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`item-${index}`}>{child}</li>
      ))
      .reduce((acc, current, index) => {
        if (index !== 0) {
          // eslint-disable-next-line react/no-array-index-key
          acc.push(<li key={`separator-${index}`}>{separator}</li>);
        }
        acc.push(current);
        return acc;
      }, []);

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet({}, resolvedRoles);
          // window.console.log(resolvedRoles);
          return (
            // // eslint-disable-next-line jsx-a11y/label-has-for
            // <label style={styles.label} {...otherProps}>
            //   {children}
            // </label>
            <ul style={styles.wrapper} {...otherProps}>
              {items}
            </ul>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Breadcrumbs;
