/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// TODO map sizes to heights etc and generally tidy up

const ProgressBar = ({ value, size }) => {
  return <Container size={size}><Progress value={value} /></Container>
};

const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  // not working...
  border-radius: ${props => props.size === 'large' ? '8px' : '4px'};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: 24px;
  width: 370px;
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px;
  border-bottom-right-radius: ${props => props.value !== 100 && '0px'};
  border-top-right-radius: ${props => props.value !== 100 && '0px'};
  height: 16px;
  margin-left: 4px;
  top: 4px;
  position: relative;
  width: ${props => `calc(${props.value}% - 8px)`};
`

export default ProgressBar;
