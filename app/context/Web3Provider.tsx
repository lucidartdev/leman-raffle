"use client"

import React, { ReactNode } from 'react';
import '../config/reown';

interface Props {
  children: ReactNode;
}

export function Web3Provider({ children }: Props) {
  return <>{children}</>;
}