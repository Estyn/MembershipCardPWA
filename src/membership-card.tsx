import React, { FC } from 'react';
import { MembershipProps } from './membership';



const MembershipCard: FC<MembershipProps> = ({ name, grandLodgeNumber, lodgeNumber, lodgeName, duesExpireDate, attestedBy }) => {
    return (
        <>
            <p>This is to certify that {name}, {grandLodgeNumber} is a member in good standing in  {lodgeName} Lodge.</p>
            <p>Lodge No. {lodgeNumber}</p>
            <p> and has paid his dues to {duesExpireDate}.</p>
        </>
    );
};

export default MembershipCard