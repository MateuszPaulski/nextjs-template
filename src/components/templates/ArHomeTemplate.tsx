import { ArWelcomeMolecule } from "components/molecules/ArWelcomeMolecule";
import { ArWelcome } from "components/organisms/ArWelcome";
import React from "react";

export const ArHomeTemplate: React.FC<{ data: any }> = ({ data }) => {
  return <ArWelcome data={data} />;
};
