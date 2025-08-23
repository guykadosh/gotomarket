'use client';

import Image from 'next/image';

export default function ExpertsSection() {
	const experts = [
		{
			name: 'Nir Goldstein',
			title: 'Operating Partner',
			company: 'Greenfield Partners, Ex-VP Sales at monday.com',
			logo: '/images/logos/greenfieldlp_logo.jpg'
		},
		{
			name: 'Ofri Cohen',
			title: 'Global VP Sales',
			company: 'Lusha',
			logo: '/images/logos/lushadata_logo.jpg'
		},
		{
			name: 'Einat Kadosh',
			title: 'AI-Driven GTM & Revenue Enablement',
			company: 'ex-monday.com, ex-Linkedin',
		},
		{
			name: 'Idan Arealy',
			title: 'RVP Sales',
			company: 'Cynet',
			logo: '/images/logos/cynet_security_logo.jpg'
		},
		{
			name: 'Amitai Weiser',
			title: 'Director of Sales',
			company: 'monday.com',
			logo: '/images/logos/mondaydotcom_logo.jpg'
		},
		{
			name: 'Noa Zeldin',
			title: 'Co-founder and CSO',
			company: 'With, Ex-VP Sales at Zencity',
			logo: '/images/logos/bwith_logo.jpg'
		},
		{
			name: 'Elad Sebban',
			title: 'Israel Country Manager',
			company: 'Workato',
			logo: '/images/logos/workato_logo.jpg'
		},
		{
			name: 'Eli Barenboim',
			title: 'Regional Sales Manager',
			company: 'Deel',
			logo: '/images/logos/deel_logo.jpg'
		},
		{
			name: 'Gilad Komorov',
			title: 'Ex-CRO',
			company: 'Granulate, Lightico & Feedvisor',
			logo: '/images/logos/intel_corporation_logo.jpg'
		},
		{
			name: 'Ruby Katz',
			title: 'Regional Sales Manager',
			company: 'monday.com',
			logo: '/images/logos/mondaydotcom_logo.jpg'
		},
		{
			name: 'Joseph Fuerst',
			title: 'Ex-VP Sales Development',
			company: 'Sisense, WalkMe & Similarweb',
			logo: '/images/logos/greenfieldlp_logo.jpg'
		},
		{
			name: 'Gad Amar',
			title: 'VP Sales',
			company: 'Atera',
			logo: '/images/logos/atera_networks_logo.jpg'
		},
		// {
		// 	name: 'Einat Etzioni',
		// 	title: 'CMO',
		// 	company: 'TSG, Ex-CMO at Panorays',
		// },
		{
			name: 'Ran Friedman',
			title: 'Head of Business Development',
			company: 'AI21 Labs',
			logo: '/images/logos/ai21_logo.jpg'
		},
		{
			name: 'Yaniv Levy',
			title: 'Global Director of Business Development',
			company: 'Buildots',
			logo: '/images/logos/buildots_logo.jpg'
		},
		{
			name: 'Leore Spira',
			title: 'Director of Revenue Operations',
			company: 'BlinkOps',
			logo: '/images/logos/blink_ops_logo.jpg'
		},
		{
			name: 'Veronika Bukhman',
			title: 'AVP Sales & Account Management',
			company: 'Similarweb',
			logo: '/images/logos/similarweb_logo.jpg'
		},
		// {
		// 	name: 'Koby Freudenberger',
		// 	title: 'Ex-VP Customer Success',
		// 	company: 'monday.com & Checkmarx',
		// },
		{
			name: 'Dana Averbouch',
			title: 'VP Revenue Marketing',
			company: 'Similarweb, Ex-CMO at Panaya',
			logo: '/images/logos/similarweb_logo.jpg'
		},
		{
			name: 'Liron Kaplan',
			title: 'Revenue Growth Consultant',
			company: 'BSELLER',
			logo: '/images/logos/bseller_logo.jpg'
		},
		{
			name: 'Elad Stauberg',
			title: 'Head of Deal Desk - Revenue Operations',
			company: 'HiBob',
			logo: '/images/logos/hibob_logo.jpg'
		},
		{
			name: 'Maayan Rahav',
			title: 'Global Head of Customer Success, Sales Intelligence',
			company: 'Similarweb',
			logo: '/images/logos/similarweb_logo.jpg'
		},
	];

	return (
		<section
			id='experts'
			className='py-10 md:py-16'
			style={{ background: 'linear-gradient(135deg, rgba(138, 127, 255, 0.08) 0%, rgba(108, 99, 255, 0.05) 100%)' }}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-8 md:mb-12'>
					<h2 className='text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4' style={{ color: '#1F1B3A' }}>
						Learn from the top GTM experts
					</h2>
					<p className='text-xl md:text-lg max-w-3xl mx-auto font-semibold' style={{ color: '#5A4FCF' }}>
						Learn from seasoned professionals who have built and scaled GTM functions at leading companies across various industries.
					</p>
				</div>

				{/* Expert Grid */}
				{/* Mobile: Vertical Scroll */}
				<div className='md:hidden'>
					<div className='overflow-y-auto' style={{ height: '400px' }}>
						<div className='grid grid-cols-2 gap-4'>
							{experts.map((expert) => (
								<div key={expert.name} className='bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow duration-300'>
									{/* Avatar Image */}
									<div className='w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden'>
										<Image
											src={`/images/team/${expert.name.replace(' ', '_')}.jpeg`}
											alt={expert.name}
											width={64}
											height={64}
											className='w-full h-full object-cover'
										/>
									</div>

									{/* Name */}
									<h3 className='font-semibold text-sm mb-1 leading-tight' style={{ color: '#1F1B3A' }}>
										{expert.name}
									</h3>

									{/* Title */}
									<p className='text-xs mb-1 leading-tight' style={{ color: '#5A4FCF' }}>
										{expert.title}
									</p>

									{/* Company */}
									<p className='text-xs font-medium leading-tight mb-2' style={{ color: '#4C6FFF' }}>
										{expert.company}
									</p>

									{/* Company Logo */}
									{expert.logo && (
										<div className='w-6 h-4 mx-auto flex items-center justify-center'>
											<Image
												src={expert.logo}
												alt={`${expert.company} logo`}
												width={24}
												height={16}
												className='max-w-full max-h-full object-contain'
											/>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Desktop: Grid Layout */}
				<div className='hidden md:grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6'>
					{experts.map((expert) => (
						<div key={expert.name} className='bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow duration-300'>
							{/* Avatar Image */}
							<div className='w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden'>
								<Image
									src={`/images/team/${expert.name.replace(' ', '_')}.jpeg`}
									alt={expert.name}
									width={80}
									height={80}
									className='w-full h-full object-cover'
								/>
							</div>

							{/* Name */}
							<h3 className='font-semibold text-sm mb-1' style={{ color: '#1F1B3A' }}>
								{expert.name}
							</h3>

							{/* Title */}
							<p className='text-sm mb-2' style={{ color: '#5A4FCF' }}>
								{expert.title}
							</p>

							{/* Company */}
							<p className='text-sm font-medium mb-2' style={{ color: '#4C6FFF' }}>
								{expert.company}
							</p>

							{/* Company Logo */}
							{expert.logo && (
								<div className='w-8 h-6 mx-auto flex items-center justify-center'>
									<Image
										src={expert.logo}
										alt={`${expert.company} logo`}
										width={32}
										height={24}
										className='max-w-full max-h-full object-contain'
									/>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
