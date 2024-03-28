import React from 'react';
import Image from 'next/image';
import RegisterComponent from '@/components/RegisterComponent/registerComponent';
import PartnerBanner from '@/components/PartnerBanner/partnerBanner';

function Register() {
  return (
    <>
      <RegisterComponent />
      <Image
        src="https://viktoramattsson.github.io/images/Hermanövarvet-3-FotografSabinaSelin_134.jpg"
        alt="logo"
        width={1900}
        height={1000}
        className="h-[90vh] object-cover"
      />
      <PartnerBanner />
    </>
  );
}

export default Register;
