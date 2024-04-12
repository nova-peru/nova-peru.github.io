'use client';

import { useState } from 'react';
import OfferList from './OfferList';
import PricingBox from './PricingBox';
import plans from './plans';

const PricingPlans = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <>
      <div className="w-full">
        <div
          className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
          data-wow-delay=".1s"
        >
          <span
            onClick={() => setIsMonthly(true)}
            className={`${
              isMonthly
                ? 'pointer-events-none text-primary'
                : 'text-dark dark:text-white'
            } mr-4 cursor-pointer text-base font-semibold`}
          >
            Mensual
          </span>
          <div
            onClick={() => setIsMonthly(!isMonthly)}
            className="flex cursor-pointer items-center"
          >
            <div className="relative">
              <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
              <div
                className={`${
                  isMonthly ? '' : 'translate-x-full'
                } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
              >
                <span className="active h-4 w-4 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
          <span
            onClick={() => setIsMonthly(false)}
            className={`${
              isMonthly
                ? 'text-dark dark:text-white'
                : 'pointer-events-none text-primary'
            } ml-4 cursor-pointer text-base font-semibold`}
          >
            Anual
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingBox
            key={plan.name.toLocaleLowerCase()}
            packageName={plan.name}
            price={isMonthly ? plan.monthlyPrice : plan.anualPrice}
            duration="mes"
            subtitle={plan.subtitle}
            customPrice={plan.customPrice}
          >
            {plan.features.map((feature, index) => (
              <OfferList
                key={index}
                text={feature.label}
                status={feature.active ? 'active' : 'inactive'}
              />
            ))}
          </PricingBox>
        ))}
      </div>

      <div className="mt-8 w-full">
        <div
          className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2144]"
          data-wow-delay=".1s"
        >
          <h3 className="mb-2 font-bold">*Diseño e Implementación</h3>
          <p>
            El diseño e Implementación de un Chatbot tiene un costo
            independiente del plan que se elija y está sujeto a los
            requerimientos que este tenga.
          </p>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
