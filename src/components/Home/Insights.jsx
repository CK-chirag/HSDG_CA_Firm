const posts = [
	{
		tag: 'GST',
		title: 'GST Compliance Checklist for Small Businesses',
		description:
			'A comprehensive guide to ensure your small business stays compliant with GST regulations.',
		author: 'CA Priya Sharma',
		date: 'January 10, 2024',
		image:
			'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
	},
	{
		tag: 'Technology',
		title: 'Digital Transformation in Accounting',
		description:
			'How modern accounting firms are leveraging technology to provide better services to clients.',
		author: 'CA Rajesh Kumar',
		date: 'January 5, 2024',
		image:
			'https://images.unsplash.com/photo-1474898856510-884a2c0be546?auto=format&fit=crop&w=900&q=80',
	},
	{
		tag: 'Compliance',
		title: 'Annual Compliance Calendar 2024',
		description:
			'Important dates and deadlines every business owner should know for the financial year 2024.',
		author: 'CA Harish Choudhary',
		date: 'December 28, 2023',
		image:
			'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
	},
]

const Insights = () => {
	return (
		<section className="bg-white py-12">
			<div className="mx-auto max-w-6xl px-4">
				<div className="text-center">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)] sm:text-3xl">
						Insights & Updates
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
						Stay informed with the latest news, updates, and expert insights on taxation,
						compliance, and financial management from our team of chartered accountants.
					</p>
				</div>

				<div className="mt-10 grid gap-6 lg:grid-cols-3">
					{posts.map((post, index) => (
						<article
							key={post.title}
							className="overflow-hidden rounded-2xl border border-[color:var(--color-divider)] bg-white"
						>
							<img
								src={post.image}
								alt={post.title}
								className="h-56 w-full object-cover"
								loading="lazy"
							/>
							<div className="p-6">
								<span className="inline-flex items-center rounded-md bg-[color:var(--color-header)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
									{post.tag}
								</span>
								<h3 className="mt-4 text-base font-semibold text-[color:var(--color-header)]">
									{post.title}
								</h3>
								<p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
									{post.description}
								</p>
								<div className="mt-4 flex items-center gap-4 text-xs text-[color:var(--color-paragraph)]">
									<span className="flex items-center gap-2">
										<svg
											aria-hidden="true"
											className="h-3.5 w-3.5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<circle cx="12" cy="8" r="4" />
											<path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
										</svg>
										{post.author}
									</span>
									<span className="flex items-center gap-2">
										<svg
											aria-hidden="true"
											className="h-3.5 w-3.5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<circle cx="12" cy="12" r="9" />
											<path d="M12 7v5l3 3" />
										</svg>
										{post.date}
									</span>
								</div>
								<button className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-header)]">
									Read More
									<span aria-hidden="true">→</span>
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Insights
