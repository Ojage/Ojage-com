import { ArrowRight, Heart, Users, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Welcome to the Ojage Family
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              A place where love, tradition, and modern life come together. Explore our family's journey, share memories, and stay connected.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/gallery"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Family Gallery
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 flex items-center gap-1">
                Our Story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Our Family
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Keeping Our Family Connected
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Stay updated with family news, upcoming events, and cherished memories through our digital family space.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Latest Photos Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Latest Family Moments</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Capturing the joy and love in our everyday lives
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Family gathering"
            className="rounded-lg object-cover w-full h-48 hover:opacity-90 transition-opacity"
          />
          <img
            src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Family celebration"
            className="rounded-lg object-cover w-full h-48 hover:opacity-90 transition-opacity"
          />
          <img
            src="https://images.unsplash.com/photo-1484981184820-2e84ea0af397?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Family vacation"
            className="rounded-lg object-cover w-full h-48 hover:opacity-90 transition-opacity"
          />
          <img
            src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Family dinner"
            className="rounded-lg object-cover w-full h-48 hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Family Updates',
    description: 'Stay connected with the latest news, achievements, and milestones from every family member.',
    icon: Heart,
    href: '/updates',
  },
  {
    name: 'Family Directory',
    description: 'Access our family tree, contact information, and personal profiles of all family members.',
    icon: Users,
    href: '/directory',
  },
  {
    name: 'Events Calendar',
    description: 'Never miss a birthday, anniversary, or family gathering with our shared calendar.',
    icon: Calendar,
    href: '/events',
  },
];