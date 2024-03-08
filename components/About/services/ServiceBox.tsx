import Image from 'next/image'
import { SERVICES } from './services';
const ServiceBox = () => {
  return (
    <>
    {SERVICES.map((service,i) => {
      return <>
      <div className="w-full px-4 lg:w-1/2">
      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      {service.title}
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
      {service.description}
      </p>
      </div>
      <div className="w-full px-4 lg:w-1/2">
      <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] lg:mr-0"
                data-wow-delay=".2s"
              >
        <Image 
                  src={service.imageUrl}
                  alt={service.title}
                  className="mx-auto max-w-full lg:mr-0"
                  fill
                  about='author FreePik'
                />
                </div>
      </div>
      </>
    })}
    </>
  )
}

export default ServiceBox