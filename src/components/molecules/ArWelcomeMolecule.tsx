import { ArAtomButton } from "components/atoms/ArAtomButton";
import React from "react";
import { getAppVersion } from "helpers/getAppVersion";

export const ArWelcomeMolecule: React.FC<{ data: any }> = ({ data }) => (
  <div style={{ textAlign: "center" }}>
    <h1>Airnauts Next.js Template {getAppVersion()}</h1>
    {data.map((d) => (
      <div>{d.name}</div>
    ))}
    <ArAtomButton />
  </div>
);
