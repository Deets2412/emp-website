import { SOCIAL_LINKS } from '@/lib/constants'

const platforms = [
  {
    name: 'YouTube',
    href: SOCIAL_LINKS.youtube,
    description: 'Watch full video episodes',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    href: SOCIAL_LINKS.spotify,
    description: 'Listen anywhere',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: 'Apple Podcasts',
    href: SOCIAL_LINKS.applePodcasts,
    description: 'Subscribe on Apple',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.76 2.064 4.44.024.3-.168.48-.456.48h-.024c-.264-.024-.456-.192-.48-.456-.12-1.416-.72-2.7-1.776-3.792-1.44-1.512-3.36-2.328-5.384-2.328-2.04 0-3.96.816-5.4 2.328-1.056 1.08-1.656 2.376-1.776 3.792-.024.264-.216.432-.48.456h-.024c-.288 0-.48-.18-.456-.48.152-1.68.84-3.168 2.064-4.44 1.608-1.685 3.72-2.587 6.072-2.587zM11.88 6.24c1.584 0 3.024.624 4.128 1.776.888.936 1.416 2.088 1.536 3.408.024.264-.168.48-.432.504-.288.024-.504-.168-.528-.432-.096-1.104-.552-2.088-1.296-2.88-.936-.984-2.184-1.512-3.408-1.512-1.224 0-2.472.528-3.408 1.512-.744.792-1.2 1.776-1.296 2.88-.024.264-.24.456-.528.432-.264-.024-.456-.24-.432-.504.12-1.32.648-2.472 1.536-3.408 1.104-1.152 2.544-1.776 4.128-1.776zm.024 3.6c.936 0 1.728.768 1.728 1.704 0 .552-.264 1.056-.696 1.368-.072.048-.12.12-.12.216v.024l.384 4.632c.048.504-.336.936-.84.96h-.936c-.504-.024-.888-.456-.84-.96l.384-4.632v-.024c0-.096-.048-.168-.12-.216a1.686 1.686 0 01-.696-1.368c0-.936.816-1.704 1.752-1.704z" />
      </svg>
    ),
  },
]

export function PlatformLinks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">
            Listen Wherever You Are
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-600">
            Watch the full video experience on YouTube, or take us with you on your favourite
            podcast app.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              className="group flex flex-col items-center rounded-2xl border border-navy-100 bg-slate-bg p-6 text-center transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="text-navy-600 transition-colors group-hover:text-gold-600">
                {platform.icon}
              </div>
              <h3 className="mt-3 text-base font-semibold text-navy-800">{platform.name}</h3>
              <p className="mt-1 text-sm text-navy-500">{platform.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
