/**
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */
import * as HIG from 'hig-vanilla';

import HIGElement from '../../elements/HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from '../createComponent';

class TextAreaAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.TextArea, initialProps);
  }

  componentDidMount() {
    var commitProps = [];
    if (this.initialProps.disabled) {
      commitProps.push('disabled',this.initialProps.disabled);
    }
    if (this.initialProps.required) {
      commitProps.push('required',this.initialProps.required);
    }
    if (this.initialProps.onBlur) {
      commitProps.push('onBlur',this.initialProps.onBlur);
    }
    if (this.initialProps.onChange) {
      commitProps.push('onChange',this.initialProps.onChange);
    }
    if (this.initialProps.onFocus) {
      commitProps.push('onFocus',this.initialProps.onFocus);
    }
    if (this.initialProps.onInput) {
      commitProps.push('onInput',this.initialProps.onInput);
    }
    this.commitUpdate(commitProps);
  }

  forceReset(props) {
    console.log('forcing reset', props.value)
    this.commitUpdate(['value', props.value]);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'disabled': {
          propValue ? this.hig.disable() : this.hig.enable();
          break;
        }
        case 'instructions': {
          this.hig.setInstructions(propValue);
          break;
        }
        case 'label': {
          this.hig.setLabel(propValue);
          break;
        }
        case 'name': {
          this.hig.setName(propValue);
          break;
        }
        case 'onBlur': {
          const dispose = this._disposeFunctions.get('onBlurDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onBlurDispose',
            this.hig.onBlur(propValue)
          );
          break;
        }
        case 'onChange': {
          const dispose = this._disposeFunctions.get('onChangeDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onChangeDispose',
            this.hig.onChange(propValue)
          );
          break;
        }
        case 'onFocus': {
          const dispose = this._disposeFunctions.get('onFocusDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onFocusDispose',
            this.hig.onFocus(propValue)
          );
          break;
        }
        case 'onInput': {
          const dispose = this._disposeFunctions.get('onInputDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onInputDispose',
            this.hig.onInput(propValue)
          );
          break;
        }
        case 'placeholder': {
          this.hig.setPlaceholder(propValue);
          break;
        }
        case 'required': {
          propValue
            ? this.hig.required(propValue)
            : this.hig.noLongerRequired();
          break;
        }
        case 'value': {
          console.log('setting value', propValue)
          this.hig.setValue(propValue);
          break;
        }
        default: {
          return;
        }
      }
    }
  }
}

const TextAreaComponent = createComponent(TextAreaAdapter);

TextAreaComponent.propTypes = {
  disabled: PropTypes.bool,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  value: PropTypes.string
};

export default TextAreaComponent;
