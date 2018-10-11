import React, { Component } from 'react';
import Sum from './Sum';

export default function SumTest() {
  return (
    <div>
      <h3>Testa a soma</h3>
    2 + 7 é igual a 9? {<Sum x={2} y={7} /> == 9 ? 'true' : 'false'}
    </div>
  )
}
