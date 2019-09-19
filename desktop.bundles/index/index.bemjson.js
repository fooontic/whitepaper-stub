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
	mix: [
		{
			block: 'theme',
			mods: { color: 'youtube', space: 'default', size: 'spotify', gap: 'small', menu: 'default', breakpoint: 'default', font: 'spotify' }
		},
		{ block: 'page' }
	],
	content: [
		{
			block: 'tpl-layout',
			mods: { structure: 'spotify' },
			content: [

				// Menu
				{
					elem: 'section',
					content: [
						{
							block: 'menu',
							mix: { block: 'decorator', mods: { 'space-t': 'm'}},
							content: [
								{
									elem: 'navigation',
									mix: { block: 'decorator', mods: { 'space-h': 'xl' }},
									content: [
										{
											block: 'pt-list',
											mods: { 'space-v': 'xs' },
											mix: [
												{ block: 'text', mods: { view: 'secondary', size: 's', weight: 'bold' }},
												{ block: 'decorator', mods: { 'indent-b': '2xl' }},
											],
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'm'},
																	mix: { block: 'icon', mods: { size: 'm' }},
																	content: {
																		html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15h4v7h8V8L12 2 2 8v14h8v-7zm-1 6v-7h6v7h6V8.566l-9-5.4-9 5.4V21h6z" fill="currentColor"/></svg>`
																	}
																},
																'Home'
															]
														},
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'm'},
																	mix: { block: 'icon', mods: { size: 'm' }},
																	content: {
																		html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H5V4h14v1zM2 7l3 14h14l3-14H2zm1.237 1l2.571 12h12.384l2.571-12H3.237zM15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="currentColor"/></svg>`
																	}
																},
																'Browse'
															]
														},
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'm'},
																	mix: { block: 'icon', mods: { size: 'm' }},
																	content: {
																		html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.736 3.808a10 10 0 0 1 .282 16.178l.602.799a11 11 0 0 0-.31-17.796l-.574.82zm-.438 5.375a6 6 0 0 0-1.856-2.098l.573-.82a7 7 0 0 1 .198 11.325l-.602-.798a6 6 0 0 0 1.687-7.609zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.298-.183a6 6 0 0 0 1.857 2.098l-.574.82A7 7 0 0 1 7.787 6.41l.602.798a6 6 0 0 0-1.687 7.609zm-.438 5.375a10 10 0 0 1-.282-16.178l-.602-.799a11 11 0 0 0 .31 17.796l.574-.82z" fill="currentColor"/></svg>`
																	}
																},
																'Radio'
															]
														},
													]
												},
											]
										},
										{
											elem: 'library',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
											content: [
												{
													block: 'text',
													mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
													mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
													content: 'Your library'
												},
												{
													block: 'pt-list',
													mods: { 'space-v': '2xs' },
													mix: { block: 'text', mods: { size: 's', weight: 'bold', view: 'secondary' }, },
													content: [
														{
															elem: 'item',
															content: 'Made for you'
														},
														{
															elem: 'item',
															content: 'Recently played'
														},
														{
															elem: 'item',
															content: 'Liked songs'
														},
														{
															elem: 'item',
															content: 'Albums'
														},

														{
															elem: 'item',
															content: 'Artists'
														},
														{
															elem: 'item',
															content: 'Podcasts'
														},
													]
												}
											]
										},
										{
											elem: 'library',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
											content: [
												{
													block: 'text',
													mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
													mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
													content: 'Playlists'
												},
												{
													block: 'pt-list',
													mods: { 'space-v': '2xs' },
													mix: { block: 'text', mods: { size: 's', view: 'secondary' }, },
													content: [
														{
															elem: 'item',
															content: 'This is Converge'
														},
														{
															elem: 'item',
															content: 'Liked from Radio'
														},
														{
															elem: 'item',
															content: 'Noise Rock/Sludge...'
														},
														{
															elem: 'item',
															content: "Ol'Skool Shitz"
														},
													]
												}
											]
										},
									]
								},
								{
									elem: 'new-playlist',
									mix: { block: 'decorator', mods: { 'space-h': 'xl', 'space-v': 'm' }},
									content: {
										block: 'pt-icon-plus',
										mods: { 'vertical-align': 'center' },
										mix: { block: 'text', mods: { size: 's', view: 'secondary' }, },
										content: [
											{
												elem: 'icon',
												elemMods: { 'indent-r': 'xs'},
												mix: { block: 'icon', mods: { 'size': 'm' }},
												content: {
													html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm.5-11.5H18v1h-5.5V18h-1v-5.5H6v-1h5.5V6h1v5.5z" fill="currentColor"/></svg>`
												}
											},
											'New Playlist'
										]
									},
								},
							]
						},
					]
				},

				// Main
				{
					elem: 'section',
					mix: { block: 'main' },
					content: [
						{
							block: 'header',
							mix: [
								{ block: 'decorator', mods: { 'space-v': 'm', 'space-h': 'xl', distribute: 'between', 'vertical-align': 'center' }},
								{ block: 'theme', mods: { color: 'spotify' }, }
							],
							content: [
								{
									elem: 'left-side',
									content: [
										{
											block: 'icon',
											mods: { size: 's', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-r': 'xs' }},
											content: {
												html: `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.56 8.021l7.268 7.268-.707.707-7.975-7.975L11.121.046l.707.708L4.561 8.02z" fill="currentColor"/></svg>`
											}
										},
										{
											block: 'icon',
											mods: { size: 's', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-r': 'l' }},
											content: {
												html: `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.414 8.021L4.146.754l.708-.708 7.974 7.975-7.974 7.975-.708-.707 7.268-7.268z" fill="currentColor"/></svg>`
											}
										},
										{
											tag: 'input',
											elem: 'search',
											attrs: { placeholder: 'Search', type: 'text' },
										},

									]
								},

								{
									elem: 'right-side',
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											mix: { block: 'text', mods: { size: 's', view: 'primary' } },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'xs'},
													mix: { block: 'icon', mods: { size: 'm' }, },
													content: {
														html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C9.73 3.5 8 5.58 8 8s1.73 4.5 4 4.5 4-2.08 4-4.5-1.73-4.5-4-4.5zM9 8c0-1.998 1.404-3.5 3-3.5s3 1.502 3 3.5-1.404 3.5-3 3.5S9 9.998 9 8z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-4.589 7.675A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.411-2.325c.202-1.45.753-2.69 1.692-3.585C8.295 15.122 9.817 14.5 12 14.5c2.183 0 3.705.622 4.719 1.59.939.896 1.49 2.134 1.692 3.585zm.87-.82c-.294-1.346-.895-2.556-1.872-3.489C16.17 14.182 14.38 13.5 12 13.5c-2.378 0-4.169.682-5.41 1.866-.976.933-1.577 2.143-1.87 3.49A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.965 9.965 0 0 1-2.72 6.855z" fill="currentColor"/></svg>`
													}
												},
												'Vadik Matveev'
											]
										},

										{
											block: 'icon',
											mods: { size: 's', view: 'primary' },
											mix: [
												{ block: 'decorator', mods: { 'indent-l': 'xl' }},
												{ block: 'header', elem: 'profile', elemMods: { notification: true }, }
											],
											content: {
												html: `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.025 10.948l7.268-7.268.707.707-7.975 7.975L.05 4.387l.707-.707 7.268 7.268z" fill="currentColor"/></svg>`
											}
										},
									]
								},
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'main',
									elem: 'artist-header',
									content: [
										{
											block: 'text',
											mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'm' },
											content: 'Artist'
										},
										{
											block: 'text',
											mods: { size: '5xl', weight: 'bold', view: 'primary', 'line-height': 'xs' },
											content: 'The Dillinger Escape Plan'
										},
										{
											block: 'decorator',
											mods: { distribute: 'between', 'space-v': 'xl', 'vertical-align': 'center' },
											content: [
												{
													content: [
														{
															block: 'button',
															mods: { view: 'primary', size: 'm' },
															mix: { block: 'decorator', mods: { 'indent-r': 's' }},
															content: 'Play'
														},
														{
															block: 'button',
															mods: { view: 'secondary', size: 'm' },
															mix: { block: 'decorator', mods: { 'indent-r': 's' }},
															content: 'Following'
														},
														{
															block: 'button',
															mods: { view: 'ghost', size: 'm', onlyicon: true },
															content:{
																block: 'icon',
																mods: { size: 'm' },
																content: {
																	html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																}
															},
														},
													]
												},
												{
													content: [
														{
															block: 'text',
															mods: { size: 'xs', view: 'primary', transform: 'uppercase', spacing: 'm', align: 'right' },
															content: 'Monthly listener'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'primary', transform: 'uppercase', spacing: 'm', align: 'right' },
															content: '166,532'
														},
													]
												},
											]
										},

										{
											block: 'tabs',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl', 'distribute': 'left' }},
											content: [
												{
													elem: 'item',
													elemMods: { state: 'active' },
													mix: [
														{ block: 'text', mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'm', weight: 'bold' }},
														{ block: 'decorator', mods: { 'indent-r': 'l' }},
													],
													content: 'Overview'
												},
												{
													elem: 'item',
													mix: [
														{ block: 'text', mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'm', weight: 'bold' }},
														{ block: 'decorator', mods: { 'indent-r': 'l' }},
													],
													content: 'Fans also like'
												},
												{
													elem: 'item',
													mix: [
														{ block: 'text', mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'm', weight: 'bold' }},
														{ block: 'decorator', mods: { 'indent-r': 'l' }},
													],
													content: 'About'
												},
												{
													elem: 'item',
													mix: [
														{ block: 'text', mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'm', weight: 'bold' }},
														{ block: 'decorator', mods: { 'indent-r': 'l' }},
													],
													content: 'Concerts'
												},
											]
										},
									]
								},

								{
									block: 'tpl-grid',
									mods: { 'col-gap': 'full', 'row-gap': 'two-thirds', 'm-columns': '12' },
									mix: { block: 'decorator', mods: { 'indent-b': '3xl' }},
									content: [

										// Popular songs
										{
											elem: 'fraction',
											elemMods: { 'm-col': '8' },
											content: [
												{
													block: 'text',
													mods: { size: 'xl', weight: 'bold', view: 'primary' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
													content: 'Popular'
												},
												{
													tag: 'table',
													block: 'pt-table',
													mods: { border: 'between', 'vertical-align': 'center' },
													mix: [
														{ block: 'main', elem: 'top-songs' },
														{ block: 'decorator', mods: { 'indent-b': 'xl' }},
													],
													content: [
														{
															elem: 'row',
															tag: 'tr',
															content: [
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		tag: 'img',
																		block: 'image',
																		attrs: {
																			style: 'display: block',
																			src: 'https://avatars.yandex.net/get-music-content/32236/aa3739c7.a.676762-1/40x40'
																		},
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', display: 'inline-block' },
																		mix: { block: 'decorator', mods: { 'indent-l': 's' }},
																		content: '1'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5', align: 'center' },
																	content: {
																		block: 'icon',
																		mods: { size: 's', view: 'primary' },
																		attrs: { style: 'margin-top: 4px;' },
																		content: {
																			html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 5.92C15 10.42 8 14 8 14s-7-3.58-7-8.08C1 2.054 6 .606 8 3.606c2-3 7-1.552 7 2.314z" /></svg>`
																		}
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '70' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', weight: 'semibold' },
																		content: 'Milk Lizard'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '15' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'secondary', align: 'right' },
																		content: '3,684,644'
																	},
																},
															]
														},
														{
															elem: 'row',
															tag: 'tr',
															content: [
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		tag: 'img',
																		block: 'image',
																		attrs: {
																			style: 'display: block',
																			src: 'https://avatars.yandex.net/get-music-content/38044/3ffda67c.a.694025-1/40x40'
																		},
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', display: 'inline-block' },
																		mix: { block: 'decorator', mods: { 'indent-l': 's' }},
																		content: '2'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5', align: 'center' },
																	content: {
																		block: 'icon',
																		mods: { size: 's', view: 'primary' },
																		attrs: { style: 'margin-top: 4px;' },
																		content: {
																			html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 5.92C15 10.42 8 14 8 14s-7-3.58-7-8.08C1 2.054 6 .606 8 3.606c2-3 7-1.552 7 2.314z" /></svg>`
																		}
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '70' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', weight: 'semibold' },
																		content: 'Setting Fire to Sleeping Giants'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '15' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'secondary', align: 'right' },
																		content: '3,021,048'
																	},
																},
															]
														},
														{
															elem: 'row',
															tag: 'tr',
															content: [
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		tag: 'img',
																		block: 'image',
																		attrs: {
																			style: 'display: block',
																			src: 'https://avatars.yandex.net/get-music-content/192707/bb631ed0.a.6771544-1/40x40'
																		},
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', display: 'inline-block' },
																		mix: { block: 'decorator', mods: { 'indent-l': 's' }},
																		content: '3'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5', align: 'center' },
																	content: {
																		block: 'icon',
																		mods: { size: 's', view: 'primary' },
																		attrs: { style: 'margin-top: 4px;' },
																		content: {
																			html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 5.409l-.832-1.248C5.742 2.02 2 2.998 2 5.92c0 .861.336 1.735.922 2.6.585.864 1.385 1.665 2.218 2.359A20.441 20.441 0 0 0 8 12.859a20.44 20.44 0 0 0 2.86-1.98c.833-.694 1.633-1.495 2.218-2.36.587-.864.922-1.738.922-2.6C14 3 10.258 2.022 8.832 4.162L8 5.409zm-.682-2.571C5.05.92 1 2.44 1 5.92 1 10.42 8 14 8 14s7-3.58 7-8.08c0-3.48-4.05-5-6.318-3.082A3.66 3.66 0 0 0 8 3.606c-.2-.3-.43-.555-.682-.768z"/></svg>`
																		}
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '70' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', weight: 'semibold' },
																		content: 'One of Us is the Killer'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '15' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'secondary', align: 'right' },
																		content: '2,557,480'
																	},
																},
															]
														},
														{
															elem: 'row',
															tag: 'tr',
															content: [
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		tag: 'img',
																		block: 'image',
																		attrs: {
																			style: 'display: block',
																			src: 'https://avatars.yandex.net/get-music-content/32236/aa3739c7.a.676762-1/40x40'
																		},
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', display: 'inline-block' },
																		mix: { block: 'decorator', mods: { 'indent-l': 's' }},
																		content: '4'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5', align: 'center' },
																	content: {
																		block: 'icon',
																		mods: { size: 's', view: 'primary' },
																		attrs: { style: 'margin-top: 4px;' },
																		content: {
																			html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 5.92C15 10.42 8 14 8 14s-7-3.58-7-8.08C1 2.054 6 .606 8 3.606c2-3 7-1.552 7 2.314z" /></svg>`
																		}
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '70' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', weight: 'semibold' },
																		content: 'Black Bubblegum'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '15' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'secondary', align: 'right' },
																		content: '3,204,688'
																	},
																},
															]
														},
														{
															elem: 'row',
															tag: 'tr',
															content: [
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		tag: 'img',
																		block: 'image',
																		attrs: {
																			style: 'display: block',
																			src: 'https://avatars.yandex.net/get-music-content/49707/56e5996c.a.729911-1/40x40'
																		},
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', display: 'inline-block' },
																		mix: { block: 'decorator', mods: { 'indent-l': 's' }},
																		content: '5'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '5', align: 'center' },
																	content: {
																		block: 'icon',
																		mods: { size: 's', view: 'primary' },
																		attrs: { style: 'margin-top: 4px;' },
																		content: {
																			html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 5.92C15 10.42 8 14 8 14s-7-3.58-7-8.08C1 2.054 6 .606 8 3.606c2-3 7-1.552 7 2.314z" /></svg>`
																		}
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '70' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'primary', weight: 'semibold' },
																		content: '43% Burnt'
																	},
																},
																{
																	elem: 'col',
																	tag: 'td',
																	elemMods: { width: '15' },
																	content: {
																		block: 'text',
																		mods: { size: 's', view: 'secondary', align: 'right' },
																		content: '2,890,332'
																	},
																},
															]
														},
													]
												},
												{
													block: 'button',
													mods: { size: 'm', view: 'ghost' },
													content: 'Show 5 more'
												},
											]
										},

										// Fans also like
										{
											elem: 'fraction',
											elemMods: { 'm-col': '4' },
											content: [
												{
													block: 'text',
													mods: { size: 'xl', weight: 'bold', view: 'primary' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
													content: 'Fans Also Like'
												},
												{
													block: 'pt-list',
													mods: { 'space-v': 'xs' },
													content: [
														{
															elem: 'item',
															content: [
																{
																	block: 'pt-icon-plus',
																	mods: { 'vertical-align': 'center' },
																	content: [
																		{
																			block: 'avatar',
																			mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'm'}},
																			content: {
																				tag: 'img',
																				elem: 'photo',
																				elemMods: { size: 's' },
																				attrs: { style: 'display: block', src: 'https://avatars.yandex.net/get-music-content/41288/82da9512.a.1595956-1/50x50' },
																			},
																		},
																		{
																			block: 'text',
																			mods: { size: 's', weight: 'bold', view: 'primary' },
																			content: 'Protest the Hero'
																		},
																	]
																},
															]
														},
														{
															elem: 'item',
															content: [
																{
																	block: 'pt-icon-plus',
																	mods: { 'vertical-align': 'center' },
																	content: [
																		{
																			block: 'avatar',
																			mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'm'}},
																			content: {
																				tag: 'img',
																				elem: 'photo',
																				elemMods: { size: 's' },
																				attrs: { style: 'display: block', src: 'https://avatars.yandex.net/get-music-content/175191/958e2bb5.a.8157613-1/50x50' },
																			},
																		},
																		{
																			block: 'text',
																			mods: { size: 's', weight: 'bold', view: 'primary' },
																			content: 'Converge'
																		},
																	]
																},
															]
														},
														{
															elem: 'item',
															content: [
																{
																	block: 'pt-icon-plus',
																	mods: { 'vertical-align': 'center' },
																	content: [
																		{
																			block: 'avatar',
																			mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'm'}},
																			content: {
																				tag: 'img',
																				elem: 'photo',
																				elemMods: { size: 's' },
																				attrs: { style: 'display: block', src: 'https://avatars.yandex.net/get-music-content/97284/88c51c4e.a.8034068-1/50x50' },
																			},
																		},
																		{
																			block: 'text',
																			mods: { size: 's', weight: 'bold', view: 'primary' },
																			content: 'The Number Twelve Looks Like You'
																		},
																	]
																},
															]
														},
														{
															elem: 'item',
															content: [
																{
																	block: 'pt-icon-plus',
																	mods: { 'vertical-align': 'center' },
																	content: [
																		{
																			block: 'avatar',
																			mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'm'}},
																			content: {
																				tag: 'img',
																				elem: 'photo',
																				elemMods: { size: 's' },
																				attrs: { style: 'display: block', src: 'https://avatars.yandex.net/get-music-content/143117/48880de7.a.5092337-1/50x50' },
																			},
																		},
																		{
																			block: 'text',
																			mods: { size: 's', weight: 'bold', view: 'primary' },
																			content: 'Between the Buried and Me'
																		},
																	]
																},
															]
														},
													]
												},
											]
										},
									]
								},

								{
									block: 'decorator',
									mods: { distribute: 'between', 'space-b': 'xs', 'indent-b': 'l', 'vertical-align': 'center' },
									attrs: { style: 'border-bottom: 1px solid var(--color-bg-border)' },
									content: [
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											content: 'Albums'
										},
										{
											content: [
												{
													block: 'icon',
													mods: { size: 's', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-r': 's' }},
													content: {
														html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3H1V2h1v1zm13 0H4V2h11v1zM2 8.5H1v-1h1v1zm13 0H4v-1h11v1zM2 14H1v-1h1v1zm13 0H4v-1h11v1z"/></svg>`
													}
												},
												{
													block: 'icon',
													mods: { size: 's', view: 'brand' },
													mix: { block: 'decorator', mods: { 'indent-r': 's' }},
													content: {
														html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H2v4h4V2zm8 0h-4v4h4V2zm-8 8H2v4h4v-4zm8 0h-4v4h4v-4zM1 1v6h6V1H1zm8 0v6h6V1H9zM7 9v6H1V9h6zm2 0v6h6V9H9z"/></svg>`
													}
												},
											]
										},
									]
								},
								{
									block: 'tpl-grid',
									mods: { 'col-gap': 'half', 'row-gap': 'two-thirds', 's-ratio': '1-1', 'm-ratio': '1-1-1', 'l-ratio': '1-1-1-1' },
									mix: { block: 'decorator', mods: { 'indent-b': '3xl' }},
									content: [
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://avatars.yandex.net/get-music-content/28589/43d987b0.a.3865308-1/400x400' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'Dissociation'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '2016'
														},
													]
												},
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://avatars.yandex.net/get-music-content/192707/bb631ed0.a.6771544-1/400x400' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'One of Us is the Killer'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '2013'
														},
													]
												},
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://avatars.yandex.net/get-music-content/176019/386eb078.a.7109067-1/400x400' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'Option Paralysis'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '2010'
														},
													]
												},
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://avatars.yandex.net/get-music-content/33216/be933d4f.a.713023-1/400x400' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'Under the Running Board — Reissue & Bonus'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '2008'
														},
													]
												},
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://avatars.yandex.net/get-music-content/32236/aa3739c7.a.676762-1/400x400' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'Ire Works'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '2007'
														},
													]
												},
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://avatars.yandex.net/get-music-content/38044/3ffda67c.a.694025-1/400x400' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'Miss Machine'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '2004'
														},
													]
												},
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://avatars.yandex.net/get-music-content/49707/56e5996c.a.729911-1/400x400' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'Calculating Infinity'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '1999'
														},
													]
												},
											]
										},
									]
								},

								{
									block: 'decorator',
									mods: { distribute: 'between', 'space-b': 'xs', 'indent-b': 'l', 'vertical-align': 'center' },
									attrs: { style: 'border-bottom: 1px solid var(--color-bg-border)' },
									content: [
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											content: 'Artists Playlists'
										},
									]
								},
								{
									block: 'tpl-grid',
									mods: { 'col-gap': 'half', 'row-gap': 'two-thirds', 's-ratio': '1-1', 'm-ratio': '1-1-1', 'l-ratio': '1-1-1-1' },
									content: [
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://pl.scdn.co/images/pl/default/a9ab3204073f998b86c84662c6d83b89ceed3613' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'This is: Dillinger Escape Plan'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '3,406 followers'
														},
													]
												},
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'album',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'https://pl.scdn.co/images/pl/default/e8e5257a74630319cb29a6490601c7c14f627457' },
																},
																{
																	elem: 'controls',
																	content: [
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.068l-.83-1.235C8.878 3.423 3 5.04 3 9.553c0 1.328.521 2.645 1.388 3.914.866 1.268 2.04 2.431 3.249 3.43A29.63 29.63 0 0 0 12 19.863a29.635 29.635 0 0 0 4.363-2.968c1.208-.998 2.383-2.161 3.249-3.43C20.479 12.199 21 10.882 21 9.554c0-4.514-5.878-6.13-8.17-2.72L12 8.068zm-.659-2.593C8.178 2.329 2 4.459 2 9.553 2 15.928 12 21 12 21s10-5.072 10-11.447c0-5.094-6.178-7.224-9.341-4.078a5.28 5.28 0 0 0-.659.8 5.28 5.28 0 0 0-.659-.8z"/></svg>`
																			}
																		},
																		{
																			block: 'button',
																			mods: { size: 'xl', view: 'ghost', onlyicon: true },
																			content: {
																				block: 'icon',
																				mods: { size: 'm' },
																				content: {
																					html: `<svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L4 23V1L23 12Z"/></svg>`
																				}
																			},
																		},
																		{
																			block: 'icon',
																			mods: { size: 'm', view: 'primary' },
																			content: {
																				html: `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`
																			}
																		},
																	]
																},
															]
														},
														{
															block: 'text',
															mods: { size: 's', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
															content: 'Party Smasher Inc.'
														},
														{
															block: 'text',
															mods: { size: 'xs', view: 'secondary', transform: 'uppercase', spacing: 'm' },
															content: '546 followers'
														},
													]
												},
											]
										},
									]
								},
							]
						},
					]
				},

				// Friends
				{
					elem: 'section',
					content: [
						{
							elem: 'friends',
							mix: { block: 'decorator', mods: { 'space-h': 'l' }},
							content: [
								{
									block: 'text',
									mods: { size: 'l', weight: 'bold', view: 'primary' },
									mix: { block: 'decorator', mods: { 'space-v': 's' }},
									attrs: { style: 'border-bottom: 1px solid var(--color-bg-border);' },
									content: 'Friend Activity'
								},

								{
									block: 'pt-list',
									mods: { 'space-v': 'm' },
									content: [
										{
											elem: 'item',
											content: {
												block: 'pt-icon-plus',
												mods: { 'vertical-align': 'center' },
												content: [
													{
														elem: 'icon',
														elemMods: { 'indent-r': 'l'},
														content: {
															block: 'avatar',
															content: {
																tag: 'img',
																elem: 'photo',
																elemMods: { size: 's' },
																attrs: { src: 'https://gravatar.com/avatar/d1d8598e3ef7c8fa41bb7c4e34b51408?s=80&d=https://static.codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png' },
															},
														},
													},
													{
														elem: 'block',
														attrs: { style: 'width: 100%' },
														content: [
															{
																block: 'text',
																mods: { size: 's', weight: 'bold', view: 'primary' },
																mix: { block: 'decorator', mods: { 'indent-b': '2xs', distribute: 'between', 'vertical-align': 'baseline' }},
																content: [
																	'Dima Tsepelev',
																	{
																		block: 'text',
																		mods: { size: 'xs', view: 'secondary', weight: 'regular' },
																		content: '3 h'
																	},
																]
															},
															{
																block: 'text',
																mods: { size: 'xs', view: 'secondary' },
																mix: { block: 'decorator', mods: { 'indent-b': '3xs' }},
																content: 'Prequel to the Sequel'
															},

															{
																block: 'text',
																mods: { size: 'xs', view: 'secondary' },
																mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																content: 'Between the Buried and Me'
															},
															{
																block: 'pt-icon-plus',
																mods: { 'vertical-align': 'top' },
																mix: { block: 'text', mods: { size: 'xs', view: 'secondary' }},
																content: [
																	{
																		elem: 'icon',
																		elemMods: { 'indent-r': '2xs'},
																		content: {
																			html: `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 .09V11a3 3 0 1 1-1-2.236V1.31l-8 1.6V13a3 3 0 1 1-1-2.236V2.09l.402-.08 9-1.8L15 .09zM14 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM3 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/></svg>`
																		}
																	},
																	'This is BTBAM'
																]
															},
														]
													}
												]
											},
										},
										{
											elem: 'item',
											content: {
												block: 'pt-icon-plus',
												mods: { 'vertical-align': 'center' },
												content: [
													{
														elem: 'icon',
														elemMods: { 'indent-r': 'l'},
														content: {
															block: 'avatar',
															content: {
																tag: 'img',
																elem: 'photo',
																elemMods: { size: 's' },
																attrs: { src: 'https://s.cdpn.io/profiles/user/402979/80.jpg?4' },
															},
														},
													},
													{
														elem: 'block',
														attrs: { style: 'width: 100%' },
														content: [
															{
																block: 'text',
																mods: { size: 's', weight: 'bold', view: 'primary' },
																mix: { block: 'decorator', mods: { 'indent-b': '2xs', distribute: 'between', 'vertical-align': 'baseline' }},
																content: [
																	'Jane Doe',
																	{
																		block: 'text',
																		mods: { size: 'xs', view: 'secondary', weight: 'regular' },
																		content: '5 h'
																	},
																]
															},
															{
																block: 'text',
																mods: { size: 'xs', view: 'secondary' },
																mix: { block: 'decorator', mods: { 'indent-b': '3xs' }},
																content: 'Мент'
															},

															{
																block: 'text',
																mods: { size: 'xs', view: 'secondary' },
																mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																content: 'Jars'
															},
															{
																block: 'pt-icon-plus',
																mods: { 'vertical-align': 'top' },
																mix: { block: 'text', mods: { size: 'xs', view: 'secondary' }},
																content: [
																	{
																		elem: 'icon',
																		elemMods: { 'indent-r': '2xs'},
																		content: {
																			html: `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0zm1 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="currentColor"/></svg>`
																		}
																	},
																	'Подлог'
																]
															},
														]
													}
												]
											},
										},
										{
											elem: 'item',
											content: {
												block: 'pt-icon-plus',
												mods: { 'vertical-align': 'center' },
												content: [
													{
														elem: 'icon',
														elemMods: { 'indent-r': 'l'},
														content: {
															block: 'avatar',
															content: {
																tag: 'img',
																elem: 'photo',
																elemMods: { size: 's' },
																attrs: { src: 'https://s.cdpn.io/profiles/user/1329536/512.jpg?1554277129' },
															},
														},
													},
													{
														elem: 'block',
														attrs: { style: 'width: 100%' },
														content: [
															{
																block: 'text',
																mods: { size: 's', weight: 'bold', view: 'primary' },
																mix: { block: 'decorator', mods: { 'indent-b': '2xs', distribute: 'between', 'vertical-align': 'baseline' }},
																content: [
																	'Julia Muzafarova',
																	{
																		block: 'text',
																		mods: { size: 'xs', view: 'secondary', weight: 'regular' },
																		content: '1 d'
																	},
																]
															},
															{
																block: 'text',
																mods: { size: 'xs', view: 'secondary' },
																mix: { block: 'decorator', mods: { 'indent-b': '3xs' }},
																content: 'Colloquial Drug Terminology'
															},

															{
																block: 'text',
																mods: { size: 'xs', view: 'secondary' },
																mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																content: 'Miocene'
															},
															{
																block: 'pt-icon-plus',
																mods: { 'vertical-align': 'top' },
																mix: { block: 'text', mods: { size: 'xs', view: 'secondary' }},
																content: [
																	{
																		elem: 'icon',
																		elemMods: { 'indent-r': '2xs'},
																		content: {
																			html: `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 .09V11a3 3 0 1 1-1-2.236V1.31l-8 1.6V13a3 3 0 1 1-1-2.236V2.09l.402-.08 9-1.8L15 .09zM14 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM3 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/></svg>`
																		}
																	},
																	'^_____^'
																]
															},
														]
													}
												]
											},
										},
									]
								},
							]
						},
					]
				},

				{
					block: 'player',
					mix: { block: 'decorator', mods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 's', 'space-h': 'm' }},
					content: [
						{
							block: 'player',
							elem: 'info',
							mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }, },
							content: [
								{
									block: 'pt-icon-plus',
									elem: 'icon',
									elemMods: { 'indent-r': 's' },
									content: {
										tag: 'img',
										block: 'image',
										attrs: { src: 'https://avatars.yandex.net/get-music-content/38044/3ffda67c.a.694025-1/50x50' },
									},
								},
								{
									block: 'pt-icon-plus',
									elem: 'block',
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											mix: { block: 'text', mods: { size: 's', view: 'primary' }},
											content: [
												'Panasonic Youth',
												{
													elem: 'icon',
													elemMods: { 'indent-l': 'm'},
													mix: { block: 'icon', mods: { size: 's' }, },
													content: {
														html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 5.409l-.832-1.248C5.742 2.02 2 2.998 2 5.92c0 .861.336 1.735.922 2.6.585.864 1.385 1.665 2.218 2.359A20.441 20.441 0 0 0 8 12.859a20.44 20.44 0 0 0 2.86-1.98c.833-.694 1.633-1.495 2.218-2.36.587-.864.922-1.738.922-2.6C14 3 10.258 2.022 8.832 4.162L8 5.409zm-.682-2.571C5.05.92 1 2.44 1 5.92 1 10.42 8 14 8 14s7-3.58 7-8.08c0-3.48-4.05-5-6.318-3.082A3.66 3.66 0 0 0 8 3.606c-.2-.3-.43-.555-.682-.768z"/></svg>`
													}
												},
											]
										},
										{
											block: 'text',
											mods: { size: 'xs', view: 'secondary' },
											mix: { block: 'decorator', mods: { 'indent-t': '3xs' }},
											content: 'The Dillinger Escape Plan'
										},
									]
								}
							]
						},
						{
							block: 'player',
							elem: 'controls',
							content: [
								{
									block: 'decorator', mods: { 'indent-b': 'xs', distribute: 'center', 'vertical-align': 'center' },
									content: [
										{
											block: 'icon', mods: { size: 's', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-r': '2xl' }},
											content: {
												html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 4.5l-3-1.7v1.368c-1.051.195-1.878.548-2.562 1.012-1.043.707-1.712 1.644-2.326 2.503l-.019.026c-.631.884-1.209 1.685-2.092 2.283C4.13 10.582 2.922 11 1 11v1c2.078 0 3.493-.456 4.562-1.18 1.043-.707 1.712-1.644 2.326-2.503l.019-.026c.631-.884 1.208-1.685 2.092-2.283.52-.352 1.16-.643 2.001-.82V6.2l3-1.7zM12 13.2v-1.368c-1.051-.195-1.878-.549-2.562-1.012a6.426 6.426 0 0 1-.947-.789c.216-.279.407-.547.58-.79l.02-.027c.27.285.567.547.908.778.52.352 1.16.643 2.001.82V9.8l3 1.7-3 1.7zM5.562 5.18c.354.24.666.507.947.789-.216.279-.407.547-.58.79l-.02.027a5.517 5.517 0 0 0-.908-.778C4.13 5.418 2.922 5 1 5V4c2.078 0 3.493.456 4.562 1.18z"/></svg>`
											}
										},
										{
											block: 'icon', mods: { size: 's', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-r': '2xl' }},
											content: {
												html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 8.6V13H3V3H5V7.4L14 2V14L5 8.6Z"/></svg>`
											}
										},
										{
											block: 'button',
											mods: { size: 'm', view: 'ghost', onlyicon: true },
											mix: { block: 'decorator', mods: { 'indent-r': '2xl' }},
											content: {
												block: 'icon',
												mods: { size: 's' },
												content: {
													html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 8L3 15V1L15 8Z"/></svg>`
												}
											},
										},
										{
											block: 'icon', mods: { size: 's', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-r': '2xl' }},
											content: {
												html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 7.4V3H13V13H11V8.6L2 14V2L11 7.4Z"/></svg>`
											}
										},
										{
											block: 'icon', mods: { size: 's', view: 'primary' },
											content: {
												html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 6.2l3-1.7-3-1.7V4H6.42a4.5 4.5 0 0 0-4.478 4.948l.06.602.996-.1-.06-.602A3.5 3.5 0 0 1 6.42 5H11v1.2zM5 9.8l-3 1.7 3 1.7V12h4.58a4.5 4.5 0 0 0 4.478-4.948l-.06-.602-.995.1.06.602A3.5 3.5 0 0 1 9.58 11H5V9.8z"/></svg>`
											}
										},
									]
								},
								{
									block: 'player',
									elem: 'progress',
									mix: { block: 'decorator', mods: { distribute: 'between', 'vertical-align': 'center' }},
									content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'secondary' },
											content: '0:47'
										},
										{
											elem: 'track',
											content: { elem: 'current', attrs: { style: 'width: 37%' }},
										},
										{
											block: 'text',
											mods: { size: 'xs', view: 'secondary' },
											content: '2:27'
										},
									]
								},
							]
						},
						{
							block: 'player',
							elem: 'additional',
							mix: { block: 'decorator', mods: { distribute: 'right', 'vertical-align': 'center' }},
							content: [
								{
									block: 'icon', mods: { size: 's', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-r': 'xl' }},
									content: {
										html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 7l4.5-2.5L1 2v5zM8 5h7V4H8v1zM1 14v-1h14v1H1zM1 8.5v1h14v-1H1z"/></svg>`
									}
								},
								{
									block: 'icon', mods: { size: 's', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-r': 'xl' }},
									content: {
										html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" d="M3 13.5h3"/><path d="M2.5 2H6v1H2.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5H6v1H2.5A1.5 1.5 0 0 1 1 9.5v-6A1.5 1.5 0 0 1 2.5 2z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/><path d="M11 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2A1.5 1.5 0 0 0 7 3.5v9A1.5 1.5 0 0 0 8.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 13.5 2h-5zM8 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-9z"/></svg>`
									}
								},
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 'xs' },
											mix: { block: 'icon', mods: { size: 's', view: 'primary' },},
											content: {
												html: `<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5h4l5-3v12l-5-3H2V5zm4.277 1L10 3.766v8.468L6.277 10H3V6h3.277z"/><path d="M12.61 3.812c1.854 2.318 1.854 6.058 0 8.376l.78.624c2.146-2.682 2.146-6.942 0-9.624l-.78.624z"/></svg>`
											}
										},
										{
											block: 'player',
											elem: 'progress',
											mix: { block: 'decorator', mods: { distribute: 'between', 'vertical-align': 'center' }},
											content: {
												elem: 'track',
												content: { elem: 'current', attrs: { style: 'width: 65%' }},
											},
										}
									]
								},
							]
						}
					]
				},
			]
		},
	]
};
