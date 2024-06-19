import React from 'react';
import { useParams } from 'react-router-dom';

export default function Subtask1() {
    const { param } = useParams();
    return <div>Subtask1, parameter: {param}</div>;
  }