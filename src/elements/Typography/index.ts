import {TextProps} from 'react-native';

import {
  ModifierConfigValue,
  applyStyleModifiers,
  ModifiersConfig,
} from 'styled-components-modifiers';
import styled from 'styled-components/native';

import normalizeSize from '../../helpers/normalizeSize';

interface TypographyModifiersConfig extends ModifiersConfig {
  h1: ModifierConfigValue;
  h2: ModifierConfigValue;
  tag: ModifierConfigValue;
  bold: ModifierConfigValue;
  capitalize: ModifierConfigValue;
  uppercase: ModifierConfigValue;
  center: ModifierConfigValue;
}

const MODIFIERS_CONFIG: TypographyModifiersConfig = {
  h1: () => `
    font-size: ${normalizeSize(36)}px;
    line-height:  ${normalizeSize(36 + 10)}px;
  `,
  h2: () => `
    font-size: ${normalizeSize(26)}px;
    line-height: ${normalizeSize(28)}px;
  `,
  tag: () => `
    font-size: ${normalizeSize(18)}px;
    line-height: ${normalizeSize(20)}px;
  `,
  bold: () => `
    font-family: Exo2-Bold;
  `,
  capitalize: () => `
    text-transform: capitalize;
  `,
  uppercase: () => `
    text-transform: uppercase;
  `,
  center: () => `
    text-align: center;
  `,
};

export type TypographyModifier = keyof TypographyModifiersConfig;

export interface TypographyProps extends TextProps {
  modifiers?: TypographyModifier | TypographyModifier[];
}

const Typography = styled.Text<TypographyProps>`
  font-family: Exo2-Regular;
  font-size: ${normalizeSize(30)}px;
  ${applyStyleModifiers(MODIFIERS_CONFIG)}
`;

export default Typography;
