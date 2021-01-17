import React from 'react';
import { Props } from './types';
import Fire from './Fire';
import Water from './Water';
import Normal from './Normal';
import Electric from './Electric';
import Grass from './Grass';
import Ice from './Ice';
import Fighting from './Fighting';
import Poison from './Poison';
import Ground from './Ground';
import Flying from './Flying';
import Psychic from './Psychic';
import Bug from './Bug';
import Rock from './Rock';
import Ghost from './Ghost';
import Dragon from './Dragon';
import Dark from './Dark';
import Steel from './Steel';
import Fairy from './Fairy';

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
