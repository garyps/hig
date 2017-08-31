import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { H1, H2, H3, Sub1, Sub2, Body, Bold, Caption, Disabled } from '../../react-hig'
import createSlotComponent from '../../adapters/createSlotComponent';

const Slot = createSlotComponent();

function TypographySection() {
  return ( <PlaygroundSection title="TYPOGRAPHY">
    <Slot>
      <H1>H1 example text</H1>
      <H2>H2 example text</H2>
      <H3>H3 example text</H3>
      <Sub1>Sub1 example text</Sub1>
      <Sub2>Sub2 example text</Sub2>
      <Body>Body example text</Body>
      <div><Bold>Bold example text</Bold></div>
      <div><Disabled>Disabled example text</Disabled></div>
      <div><Caption>Caption example text</Caption></div>
    </Slot>
  </PlaygroundSection>)
};

export default TypographySection;