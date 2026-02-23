import { Link, useParams } from 'react-router-dom'
import { industries } from './industriesData'

const handleScrollTop = () => window.scrollTo(0, 0)

const IndustryDetail = () => {
  const { slug } = useParams()
  const industry = industries.find((item) => item.slug === slug)

  if (!industry) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-2xl font-semibold text-[color:var(--color-header)]">
            Industry not found
          </h1>
          <p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
            The industry page you are looking for does not exist or may have been moved.
          </p>
          <Link
            to="/industries"
            onClick={handleScrollTop}
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-header)]"
          >
            Back to Industries
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-5xl px-4">
        <Link
          to="/industries"
          onClick={handleScrollTop}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-header)]"
        >
          ← Back to Industries
        </Link>

        <div className="mt-4">
          <h1 className="text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
            {industry.title}
          </h1>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <img
            src={industry.images[0]}
            alt={industry.title}
            className="h-64 w-full rounded-2xl object-cover md:col-span-2"
            loading="lazy"
          />
          <img
            src={industry.images[1]}
            alt={`${industry.title} context`}
            className="h-56 w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <img
            src={industry.images[2]}
            alt={`${industry.title} operations`}
            className="h-56 w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-10 space-y-4 text-sm text-[color:var(--color-paragraph)]">
          {industry.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-[color:var(--color-header)]">
              Key Financial & Compliance Challenges
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-paragraph)]">
              {industry.challenges.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[color:var(--color-header)]">
              Our Scope of Services for This Sector
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-paragraph)]">
              {industry.services.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[color:var(--color-divider)] bg-white p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-header)]">
            Representative Engagement Experience
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-paragraph)]">
            {industry.engagements.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default IndustryDetail
