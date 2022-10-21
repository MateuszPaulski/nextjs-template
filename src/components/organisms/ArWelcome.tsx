import { ArWelcomeMolecule } from "components/molecules/ArWelcomeMolecule";
import React from "react";

export const ArWelcome: React.FC<{ data: any }> = ({ data }) => (
  <ArWelcomeMolecule data={data} />
);
