/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {classNames, DOMRef, filterDOMProps, useDOMRef, useSlotProps, useStyleProps} from '@react-spectrum/utils';
import {mergeProps} from '@react-aria/utils';
import {ComboBoxProps} from '@react-types/$combobox';
import React from 'react';
import styles from '@adobe/spectrum-css-temp/components/combobox/vars.css';
import {useComboBox} from '@react-aria/combobox';
import {useComboBoxState} from '@react-stately/combobox';
import {useProviderProps} from '@react-spectrum/provider';

function ComboBox(props: ComboBoxProps, ref: DOMRef) {
  props = useProviderProps(props);
  props = useSlotProps(props);
  let {styleProps} = useStyleProps(props);
  let state = useComboBoxState(props);
  let ariaProps = useComboBox(props, state);
  let domRef = useDOMRef(ref);

  return (
    <div
      {...filterDOMProps(props)}
      {...ariaProps}
      {...styleProps}
      ref={domRef}
      className={classNames(styles, '', styleProps.className)}>

    </div>
  );
}

const _ComboBox = React.forwardRef(ComboBox);
export {_ComboBox as ComboBox};
