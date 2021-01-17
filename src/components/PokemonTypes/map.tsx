import React from 'react';

import Bug from './Bug';
import Dark from './Dark';
import Dragon from './Dragon';
import Electric from './Electric';
import Fairy from './Fairy';
import Fighting from './Fighting';
import Fire from './Fire';
import Flying from './Flying';
import Ghost from './Ghost';
import Grass from './Grass';
import Ground from './Ground';
import Ice from './Ice';
import Normal from './Normal';
import Poison from './Poison';
import Psychic from './Psychic';
import Rock from './Rock';
import Steel from './Steel';
import { Props } from './types';
import Water from './Water';

export interface TypesBgMap {
  normal: React.FC<Props>;
  fire: React.FC<Props>;
  water: React.FC<Props>;
  electric: React.FC<Props>;
  grass: React.FC<Props>;
  ice: React.FC<Props>;
  fighting: React.FC<Props>;
  poison: React.FC<Props>;
  ground: React.FC<Props>;
  flying: React.FC<Props>;
  psychic: React.FC<Props>;
  bug: React.FC<Props>;
  rock: React.FC<Props>;
  ghost: React.FC<Props>;
  dragon: React.FC<Props>;
  dark: React.FC<Props>;
  steel: React.FC<Props>;
  fairy: React.FC<Props>;
}

const typesBgMap: TypesBgMap = {
  normal: Normal,
  fire: Fire,
  water: Water,
  electric: Electric,
  grass: Grass,
  ice: Ice,
  fighting: Fighting,
  poison: Poison,
  ground: Ground,
  flying: Flying,
  psychic: Psychic,
  bug: Bug,
  rock: Rock,
  ghost: Ghost,
  dragon: Dragon,
  dark: Dark,
  steel: Steel,
  fairy: Fairy,
};

export default typesBgMap;
