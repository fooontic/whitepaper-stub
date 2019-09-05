module.exports = {
	block: 'page',
	title: 'Hello page',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mix: {
		block: 'theme',
		mods: { color: 'codepen', space: 'default', size: 'codepen', gap: 'small', menu: 'default', breakpoint: 'default', font: 'codepen' }
	},
	content: [
		{
			block: 'tpl-layout',
			mods: { structure: 'codepen' },
			content: [
				{
					elem: 'section',
					content: [
						{
							block: 'header',
							// mix: { block: 'decorator', mods: { 'space-h': 'l' }},
							content: [
								{
									elem: 'logo',
									mix: { block: 'decorator', mods: { 'space-v': 'xl', 'space-h': 'l' }},
									content: {
										html: `<svg id="logo" viewBox="0 0 138 26"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0l11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>`
									}
								},
								{
									elem: 'navigation',
									content: [
										{
											elem: 'create',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
											content: [
												{
													block: 'text',
													mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'xs' },
													mix: [
														{ block: 'decorator', mods: { 'space-b': 'xs', 'indent-b': '2xs', 'indent-h': 'l' }},
														{ block: 'header', elem: 'create-heading' }
													],
													content: 'Create'
												},
												{
													block: 'pt-list',
													mods: { 'space-v': '3xs', 'space-h': 'l' },
													content: [
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															mix: { block: 'pt-list', elem: 'item' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'xs'},
																	mix: { block: 'icon', mods: { size: 'm', 'view': 'ghost' }},
																	content: {
																		html: `<svg id="icon-new-pen" fill="currentColor" viewBox="0 0 20 20"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003z"></path></svg>`
																	}
																},
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary', weight: 'bold' },
																	content: 'Pen'
																},
															]
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															mix: [
																{ block: 'text', mods: { view: 'secondary', size: 's' } },
																{ block: 'pt-list', elem: 'item' },
																{ block: 'decorator', mods: { 'space-l': 'xl' }},
															],
															attrs: { style: 'padding-left: var(--space-4xl)' },
															content: [
																'from template',
																{
																	elem: 'icon',
																	elemMods: { 'indent-l': '2xs'},
																	mix: { block: 'icon', mods: { size: 's' }},
																	content: { html: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.593l-4.297-4.297-1.414 1.414 5.711 5.711 5.711-5.711-1.414-1.414-4.297 4.297z"/></svg>` }
																},
															]
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															mix: [
																{ block: 'pt-list', elem: 'item' },
																{ block: 'text', mods: { size: 'm', view: 'primary', weight: 'bold' }}
															],
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'xs'},
																	mix: { block: 'icon', mods: { size: 'm', 'view': 'ghost' }},
																	content: {
																		html: `<svg id="icon-new-pen" fill="currentColor" viewBox="0 0 20 20"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003z"></path></svg>`
																	}
																},
																'Project'
															]
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															mix: [
																{ block: 'pt-list', elem: 'item' },
																{ block: 'text', mods: { size: 'm', view: 'primary', weight: 'bold' }}
															],
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'xs'},
																	mix: { block: 'icon', mods: { size: 'm', 'view': 'ghost' }},
																	content: {
																		html: `<svg id="icon-new-pen" fill="currentColor" viewBox="0 0 20 20"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003z"></path></svg>`
																	}
																},
																'Post'
															]
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															mix: [
																{ block: 'pt-list', elem: 'item' },
																{ block: 'text', mods: { size: 'm', view: 'primary', weight: 'bold' }}
															],
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'xs'},
																	mix: { block: 'icon', mods: { size: 'm', 'view': 'ghost' }},
																	content: {
																		html: `<svg id="icon-new-pen" fill="currentColor" viewBox="0 0 20 20"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003z"></path></svg>`
																	}
																},
																'Collection'
															]
														},
													]
												},
											]
										},
										{
											elem: 'your',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
											content: [
												{
													block: 'text',
													mods: { size: 's', view: 'normal', transform: 'uppercase', spacing: 'xs' },
													mix: { block: 'decorator', mods: { 'space-h': 'l' }},
													content: 'Your'
												},
												{
													block: 'pt-list',
													mods: { 'space-v': '3xs', 'space-h': 'l',  },
													content: [
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Dashboard'
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Profile'
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Pinned Items'
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Activity'
															},
														},
													]
												}
											]
										},
										{
											elem: 'explore',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
											content: [
												{
													block: 'text',
													mods: { size: 's', view: 'caution', transform: 'uppercase', spacing: 'xs' },
													mix: { block: 'decorator', mods: { 'space-h': 'l' }},
													content: 'Explore'
												},
												{
													block: 'pt-list',
													mods: { 'space-v': '3xs', 'space-h': 'l',  },
													content: [
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Picks'
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Popular'
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Following'
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Topics'
															},
														},
													]
												}
											]
										},
										{
											elem: 'grow',
											mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
											content: [
												{
													block: 'text',
													mods: { size: 's', view: 'success', transform: 'uppercase', spacing: 'xs' },
													mix: { block: 'decorator', mods: { 'space-h': 'l' }},
													content: 'Grow'
												},
												{
													block: 'pt-list',
													mods: { 'space-v': '3xs', 'space-h': 'l', 'vertical-align': 'center' },
													content: [
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Jobs'
															},
														},
														{
															elem: 'item',
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', weight: 'bold', view: 'primary', display: 'inline-block' },
																	mix: { block: 'decorator', mods: { 'indent-r': '2xs' }},
																	content: 'CodePen'
																},
																{
																	block: 'badge',
																	mods: { view: 'caution' },
																	mix: { block: 'theme', mods: { color: 'codepen-inverse' }, },
																	content: 'PRO'
																},
															]
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'primary' },
																content: 'Challenges'
															},
														}
													]
												}
											]
										},
										{
											elem: 'other',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
											content: [
												{
													block: 'pt-list',
													mods: { 'space-v': '3xs', 'space-h': 'l',  },
													content: [
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'secondary' },
																content: 'Meetups'
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'secondary' },
																content: 'Newsletter'
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'secondary' },
																content: [
																	'Blog',
																]
															},
														},
														{
															elem: 'item',
															content: {
																block: 'text',
																mods: { size: 'm', weight: 'bold', view: 'secondary' },
																content: 'Docs & Support'
															},
														}
													]
												}
											]
										},
									]
								},
							]
						},
					]
				},
				{
					elem: 'section',
					content: [
						{
							block: 'searchbar',
							mix: { block: 'decorator', mods: { 'space-a': 'm', distribute: 'between' }},
							content: [
								{
									block: 'search',
									content: 'Search Codepen...'
								},
								{
									block: 'avatar',
									mix: { block: 'decorator', mods: { 'indent-l': 's' }},
									content: {
										elem: 'photo',
										elemMods: { size: 's' },
									},
								},
							]
						},
						{
							elem: 'content',
							content: [
								{
									elem: 'container',
									mods: { size: 'm' },
									content: [

									]
								},
							]
						},
					]
				},
			]
		},
	]
};
