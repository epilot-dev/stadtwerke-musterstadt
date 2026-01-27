import { LucideIcon } from 'lucide-react';

interface ContactItem {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
}

interface ContactSectionProps {
  title: string;
  items: ContactItem[];
  variant?: 'tarif' | 'netz';
}

export function ContactSection({ title, items, variant = 'tarif' }: ContactSectionProps) {
  const accentColor = variant === 'netz' ? 'bg-[#63BEF8]' : 'bg-[#deff03]';

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#222222] mb-6 text-center">{title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full ${accentColor} flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon className="w-6 h-6 text-[#222222]" />
                  </div>
                  <h3 className="font-bold text-[#222222] mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.value}</p>
                  {item.subtitle && <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
