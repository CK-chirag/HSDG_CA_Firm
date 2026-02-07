import { Assets } from '../../assets/assets'

const HeroSection = () => {
	return (
		<section className="bg-[color:var(--color-background)] py-14">
			<div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-paragraph)]">
						HSDG & Associates
					</p>
					<h1 className="mt-3 text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
						Your Trusted Partner in Financial Excellence
					</h1>
					<p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--color-paragraph)]">
						With 25+ years of experience, we provide comprehensive chartered accountancy
						services to businesses across India. We ensure compliance, optimize taxes, and
						drive sustainable financial growth.
					</p>

					<div className="mt-6 grid gap-3 text-sm text-[color:var(--color-paragraph)] sm:grid-cols-2">
						{[
							'Expert Tax Planning',
							'Business Advisory',
							'Financial Auditing',
							'Compliance Management',
						].map((item) => (
							<div key={item} className="flex items-center gap-2">
								<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-header)]/10 text-[color:var(--color-header)]">
									<svg
										aria-hidden="true"
										className="h-3 w-3"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								</span>
								<span>{item}</span>
							</div>
						))}
					</div>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a
							href="https://wa.me/919999988888"
							className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-header)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
						>
							Get Consultation
							<svg
								aria-hidden="true"
								className="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7" />
							</svg>
						</a>
						<button className="rounded-full border border-[color:var(--color-divider)] px-6 py-3 text-sm font-semibold text-[color:var(--color-header)] transition-colors hover:bg-[color:var(--color-divider)]/30">
							View Our Services
						</button>
					</div>
				</div>

				<div className="relative">
					<div className="rounded-3xl border border-[color:var(--color-divider)] bg-gradient-to-br from-[color:var(--color-divider)]/40 via-white to-white p-4 shadow-lg">
						<div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[color:var(--color-header)]/10">
							<div className="flex h-full items-center justify-center">
								<img
									src={Assets.logo}
									alt="HSDG & Associates"
									className="h-full w-auto rounded-3xl"
								/>
							</div>
						</div>
					</div>
					<div className="absolute -bottom-6 left-6 rounded-2xl border border-[color:var(--color-divider)] bg-white px-4 py-3 shadow-lg">
						<p className="text-lg font-semibold text-[color:var(--color-header)]">25+</p>
						<p className="text-xs text-[color:var(--color-paragraph)]">Professionals</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
