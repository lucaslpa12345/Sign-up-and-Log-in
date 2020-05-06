import {StyledView, TIinput} from './styles';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/MaterialIcons';

import React, {forwardRef} from 'react';
function Input({style, icon, placeholder, ...rest}, ref) {
  return (
    <StyledView style={style}>
      {icon && <Icons name={icon} size={35} color="rgba(75,0,130,0.8)" />}
      <TIinput {...rest} placeholder={placeholder} ref={ref} />
    </StyledView>
  );
}

Input.PropTypes = {
  icon: PropTypes.string,
  icons: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  style: {},
  icon: null,
  placeholder: null,
};
export default forwardRef(Input);
