import { ArAtomButton } from 'components/atoms/ArAtomButton'
import React from 'react'
import { getAppVersion } from 'helpers/getAppVersion'

export const ArWelcomeMolecule: React.FC<{}> = () => (
    <div style={{textAlign: 'center'}}>
        <h1>Airnauts Next.js Template {getAppVersion()}</h1>
        <ArAtomButton />
    </div>
)