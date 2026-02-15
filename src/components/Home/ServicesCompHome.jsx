import { Link } from "react-router-dom";

const services = [
	{
		title: 'Audit & Assurance Services',
		description:
			'The firm undertakes audit and assurance engagements with a structured, standards-driven approach, including:',
		points: ['Statutory Audits under applicable statutes', 'Tax Audits under the Income-tax Act, 1961', 'Internal Audits', 'Concurrent Audits', 'Bank Audits', 'Stock and Revenue Audits', 'Due Diligence and Special Purpose Audits'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<rect x="6" y="2" width="12" height="20" rx="2" />
				<path d="M9 7h6M9 11h6M9 15h3" />
			</svg>
		),
	},
	{
		title: ' Direct Taxation Services',
		description:
			'The firm provides end-to-end direct tax compliance, advisory, and representation services, including:',
		points: ['Preparation and filing of income-tax returns', 'Tax audit support and compliance', 'Computation and review of taxable income', 'Advisory on tax matters and positions', 'Handling of assessments, re-assessments, and appeals', 'Representation before income-tax authorities'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
				<path d="M14 3v5h5" />
			</svg>
		),
	},
	{
		title: 'Indirect Taxation (GST) Services',
		description:
			'The firm’s indirect tax practice covers compliance, advisory, and review under the Goods and Services Tax laws, including:',
		points: ['GST registration and amendments', 'Preparation and filing of GST returns', 'GST reconciliations and audits', 'Advisory on classification, valuation, and input tax credit', ' Handling of notices and departmental communications'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M3 17l6-6 4 4 7-7" />
				<path d="M14 5h6v6" />
			</svg>
		),
	},
	{
		title: 'Corporate & Secretarial Services',
		description:
			'Complete GST compliance and advisory services for seamless operations.',
		points: ['Incorporation of companies and LLPs', ' Ongoing corporate and secretarial compliances', 'Maintenance of statutory registers and records', ' Conduct of board and general meetings', 'Filing of statutory returns with ROC and other authorities', 'Secretarial compliance reviews and advisory'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
			</svg>
		),
	}
]

const ServicesCompHome = () => {
	return (
		<section className="bg-white py-12">
			<div className="mx-auto max-w-7xl px-4">
				<div className="text-center">
					<h2 className="mt-2 text-2xl font-semibold text-[color:var(--color-header)] sm:text-3xl">
						Our Professional Services
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
						We offer a comprehensive range of chartered accountancy services tailored to meet the
						unique needs of businesses and individuals across various industries.
					</p>
				</div>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{services.map((service) => (
						<article
							key={service.title}
							className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
						>
							<div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-divider)] text-[color:var(--color-header)]">
								{service.icon}
							</div>
							<h3 className="mt-4 text-base font-semibold text-[color:var(--color-header)]">
								{service.title}
							</h3>
							<p className="mt-2 text-sm text-[color:var(--color-paragraph)]">
								{service.description}
							</p>
							<ul className="mt-3 space-y-1 text-xs text-[color:var(--color-paragraph)]">
								{service.points.map((point) => (
									<li key={point} className="flex items-start gap-2">
										<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--color-header)]" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
				<div className="mt-10 flex justify-center">
					<Link
						to="/services"
						className="rounded-full border border-[color:var(--color-divider)] px-6 py-3 text-sm font-semibold text-[color:var(--color-header)] transition-colors hover:bg-[color:var(--color-divider)]/30"
					>
						View All Services
					</Link>

				</div>
			</div>
		</section>
	)
}

export default ServicesCompHome
