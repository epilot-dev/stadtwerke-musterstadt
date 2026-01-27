import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  variant?: 'tarif' | 'netz';
}

export function HeroSection({
  title,
  description,
  imageSrc,
  imageAlt,
  variant = 'tarif',
}: HeroSectionProps) {
  const gradientFrom = variant === 'netz' ? 'from-blue-50' : 'from-yellow-50';

  return (
    <section className={`relative pt-12 pb-20 bg-gradient-to-br ${gradientFrom} to-white`}>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">{description}</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
