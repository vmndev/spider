// upload your SVG to https://icomoon.io/app/#/select and get all data from there
let IconsList = {
	phone: {
		viewbox: '0 0 32 32',
		size: {width: 19, height: 19},
		path: {
			d: 'M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z',
			fill: '#000'
		}
	},
	phoneV2: {
		viewbox: '0 0 32 32',
		size: {width: 24, height: 24},
		path: {
			d: 'M8 11.48a12.974 12.974 0 0 0 2.34 3.18A12.974 12.974 0 0 0 13.52 17l1.84-1.84c.107-.12.24-.2.4-.24a.682.682 0 0 1 .46.04c.88.307 1.867.46 2.96.46.227 0 .42.08.58.24.16.16.24.353.24.58v2.94a.79.79 0 0 1-.24.58.79.79 0 0 1-.58.24c-1.92 0-3.76-.373-5.52-1.12a14.124 14.124 0 0 1-4.5-3.04 14.124 14.124 0 0 1-3.04-4.5C5.373 9.58 5 7.74 5 5.82c0-.227.08-.42.24-.58A.79.79 0 0 1 5.82 5h2.94c.227 0 .42.08.58.24.16.16.24.353.24.58 0 1.093.153 2.08.46 2.96.04.147.047.3.02.46a.666.666 0 0 1-.22.4L8 11.48z',
			fill: '#212121'
		}
	},
	envelop: {
		viewbox: '0 0 32 32',
		size: {width: 24, height: 24},
		path: {
			d: 'M4 18V8.179l7.47 5.669a1.002 1.002 0 0 0 1.06 0L20 8.179 20.001 18H4zM19.113 6L12 11.821 4.887 6h14.226zM4 4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2H4z',
			fill: '#212121'
		}
	},

	phoneHollow: {
		viewbox: '0 0 32 32',
		size: {width: 19, height: 19},
		path: {
			d: 'M20 25.333c-7.352 0-13.333-5.98-13.333-13.333v-6.667h5.333v5.333h-1.333c-0 0-0 0-0 0-0.736 0-1.333 0.597-1.333 1.333 0 0.008 0 0.016 0 0.024l-0-0.001c0.096 6.067 4.683 10.644 10.667 10.644 0.736 0 1.333-0.597 1.333-1.333v0-1.333h5.333l0.001 5.333h-6.668zM26.667 17.333h-5.333c-1.436 0.001-2.607 1.136-2.665 2.557l-0 0.005c-3.389-0.539-5.963-3.12-6.545-6.565 1.418-0.069 2.541-1.233 2.544-2.661v-5.336c0-1.472-1.196-2.667-2.667-2.667h-5.333c-1.471 0-2.667 1.196-2.667 2.667v6.667c0 8.823 7.177 16 16 16h6.667c1.471 0 2.667-1.197 2.667-2.667v-5.333c0-1.471-1.196-2.667-2.667-2.667z',
			fill: '#616161'
		}
	},

	chatBubble: {
		viewbox: '0 0 32 32',
		size: {width: 19, height: 19},
		path: {
			d: 'M5.333 5.333v16h5.333v2.667l3.556-2.667h12.444v-16h-21.333zM8 29.333v-5.333h-2.667c-1.471 0-2.667-1.195-2.667-2.667v-16c0-1.471 1.196-2.667 2.667-2.667h21.333c1.471 0 2.667 1.196 2.667 2.667v16c0 1.472-1.196 2.667-2.667 2.667h-11.556l-7.111 5.333z',
			fill: '#616161'
		}
	},

	pencil: {
		viewbox: '0 0 32 32',
		size: {width: 13, height: 13},
		path: {
			d: 'M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z',
			fill: '#9e9e9e'
		}
	},

	checkmark: {
		viewbox: '0 0 32 32',
		size: {width: 13, height: 13},
		path: {
			d: 'M27 4l-15 15-7-7-5 5 12 12 20-20z',
			fill: '#00a500'
		}
	},
	arrow: {
		viewbox: '0 0 32 32',
		size: {width: 16, height: 16},
		path: {
			d: 'M18 23l3 3 10-10-10-10-3 3 7 7z',
			fill: '#9e9e9e'
		}
	},

	cross: {
		viewbox: '0 0 32 32',
		size: {width: 12, height: 12},
		path: {
			d: 'M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z',
			fill: '#c50000'
		}
	},

	search: {
		viewbox: '0 0 32 32',
		size: {width: 18, height: 18},
		path: {
			d: 'M31.531 29.269l-8.629-8.629c1.682-2.132 2.698-4.858 2.698-7.82 0-0.007 0-0.014-0-0.021v0.001c0-0.010 0-0.022 0-0.034 0-3.524-1.434-6.713-3.75-9.015l-0.001-0.001c-2.302-2.317-5.49-3.75-9.013-3.75-0.013 0-0.026 0-0.039 0h0.002c-0.011-0-0.024-0-0.037-0-3.523 0-6.711 1.434-9.012 3.75l-0.001 0.001c-2.317 2.303-3.75 5.492-3.75 9.016 0 0.012 0 0.024 0 0.036v-0.002c0 3.419 1.333 6.634 3.75 9.050 2.302 2.317 5.49 3.75 9.013 3.75 0.013 0 0.026-0 0.039-0h-0.002c0.007 0 0.015 0 0.023 0 2.962 0 5.686-1.016 7.844-2.718l-0.027 0.020 8.629 8.627 2.262-2.261zM12.8 22.4c-0.008 0-0.017 0-0.027 0-2.642 0-5.033-1.075-6.76-2.811l-0-0c-1.737-1.727-2.813-4.119-2.813-6.761 0-0.010 0-0.019 0-0.029v0.002c0-2.563 0.998-4.974 2.813-6.787 1.727-1.737 4.118-2.813 6.76-2.813 0.010 0 0.019 0 0.029 0h-0.001c2.565 0 4.974 0.998 6.787 2.813 1.737 1.727 2.813 4.118 2.813 6.761 0 0.009 0 0.019-0 0.028v-0.001c0 2.565-0.998 4.976-2.813 6.789-1.727 1.737-4.118 2.811-6.76 2.811-0.009 0-0.019 0-0.028-0h0.001z',
			fill: '#9e9e9e'
		}
	},

	menu: {
		viewbox: '0 0 32 32',
		size: {width: 50, height: 50},
		path: {
			d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
			fill: '#616161'
		}
	},

	add: {
		viewbox: '0 0 32 32',
		size: {width: 32, height: 32},
		path: {
			d: 'M17,15 L17,10 L15,10 L15,15 L10,15 L10,17 L15,17 L15,22 L17,22 L17,17 L22,17 L22,15 L17,15 Z',
			fill: '#616161'
		}
	},

	minus: {
		viewbox: '0 0 32 32',
		size: {width: 32, height: 32},
		path: {
			d: 'M 11.5 17.5 21.5 17.5 21.5 15.5 11.5 15.5z'
		}
	},
	contact_us: {
		viewbox: '0 0 20 20',
		size: {width: 20, height: 16},
		path: {
			d: 'M4,18 L4,8.179 L11.47,13.848 C11.632,13.949 11.816,14 12,14 C12.184,14 12.368,13.949 12.53,13.848 L20,8.179 L20.001,18 L4,18 Z M19.113,6 L12,11.821 L4.887,6 L19.113,6 Z M4,4 C2.897,4 2,4.898 2,6 L2,18 C2,19.103 2.897,20 4,20 L20,20 C21.103,20 22,19.103 22,18 L22,6 C22,4.898 21.103,4 20,4 L4,4 Z'
		}
	},
	login: {
		viewbox: '0 0 20 20',
		size: {width: 20, height: 16},
		path: {
			d: 'M12,13.68 C12.8266708,13.68 13.7333284,13.7999988 14.72,14.04 C15.8400056,14.3200014 16.7466632,14.693331 17.44,15.16 C18.2666708,15.7066694 18.68,16.3199966 18.68,17 L18.68,18.68 L5.32,18.68 L5.32,17 C5.32,16.3199966 5.7333292,15.7066694 6.56,15.16 C7.2533368,14.693331 8.1599944,14.3200014 9.28,14.04 C10.2666716,13.7999988 11.1733292,13.68 12,13.68 Z M12,12 C11.399997,12 10.8466692,11.8500015 10.34,11.55 C9.8333308,11.2499985 9.4300015,10.8466692 9.13,10.34 C8.8299985,9.8333308 8.68,9.280003 8.68,8.68 C8.68,8.079997 8.8299985,7.5200026 9.13,7 C9.4300015,6.4799974 9.8333308,6.0700015 10.34,5.77 C10.8466692,5.4699985 11.399997,5.32 12,5.32 C12.600003,5.32 13.1533308,5.4699985 13.66,5.77 C14.1666692,6.0700015 14.5699985,6.4799974 14.87,7 C15.1700015,7.5200026 15.32,8.079997 15.32,8.68 C15.32,9.280003 15.1700015,9.8333308 14.87,10.34 C14.5699985,10.8466692 14.1666692,11.2499985 13.66,11.55 C13.1533308,11.8500015 12.600003,12 12,12 Z',
			fill: '#007799'
		}
	},
	help: {
		viewbox: '0 0 24 24',
		size: {width: 24, height: 24},
		path: {
			d: 'M11,18 L13,18 L13,16 L11,16 L11,18 L11,18 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 L12,20 Z M12,6 C9.79,6 8,7.79 8,10 L10,10 C10,8.9 10.9,8 12,8 C13.1,8 14,8.9 14,10 C14,12 11,11.75 11,15 L13,15 C13,12.75 16,12.5 16,10 C16,7.79 14.21,6 12,6 L12,6 Z'
		}
	},
	checkmark: {
		viewbox: '0 0 12 12',
		size: {width: 20, height: 12},
		path: {
			d: 'M6.398 9.29L2.349 5.226 1 6.58 6.398 12 17 1.355 15.65 0z',
			fill: '#007799'
		}
	},
	address: {
		viewbox: '0 0 32 32',
		size: {width: 32, height: 32},
		path: {
			d: "M15 18.984V7.128L9 5.016v11.856l6 2.112zM20.496 3c.128 0 .244.052.348.156.104.104.156.22.156.348V18.6c0 .112-.04.212-.12.3a.625.625 0 0 1-.264.18L15 21l-6-2.112L3.528 21a.508.508 0 0 1-.372-.156.482.482 0 0 1-.156-.348V5.4c0-.112.04-.212.12-.3a.625.625 0 0 1 .264-.18L9 3l6 2.112 5.352-2.064.144-.048z"
		}
	},
	locationPin: {
		viewbox: '0 0 20 32',
		size: {width: 20, height: 32},
		path: {
			d: "M19.063 9.312c0-5.134-4.101-9.312-9.142-9.312s-9.143 4.178-9.143 9.312c0 1.136 0.201 2.25 0.596 3.31l0.005-0.002c0.065 0.207 0.208 0.554 0.471 1.193l7.173 17.385c0.077 0.188 0.373 0.802 0.915 0.802 0.364 0 0.66-0.269 0.878-0.802l7.651-18.576c0.395-1.060 0.596-2.174 0.596-3.31zM18.172 9.312c0 0.003 0 0.006 0 0.009 0 1.065-0.196 2.084-0.553 3.023l0.020-0.058-7.644 18.562c-0.026 0.061-0.049 0.11-0.069 0.148-0.028-0.042-0.055-0.091-0.077-0.143l-0.003-0.007-7.515-18.218-0.123-0.329c-0.341-0.884-0.538-1.908-0.538-2.977 0-0.003 0-0.007 0-0.010v0.001c0-4.635 3.701-8.404 8.251-8.404s8.251 3.77 8.251 8.404zM16.84 9.244c0-3.893-3.098-7.049-6.919-7.049s-6.92 3.156-6.92 7.049c0 3.892 3.098 7.048 6.92 7.048s6.919-3.156 6.919-7.049zM13.023 8.053l-1.847 1.442 0.662 2.273-1.917-1.345-1.917 1.345 0.662-2.273-1.848-1.442 2.326-0.060 0.776-2.236 0.775 2.236 2.327 0.060z",
			fill: '#ffffff'
		}
	},
	hand: {
		viewbox: '0 0 37 32',
		size: {width: 30, height: 32},
		path: {
			d: "M36.435 9.371c-0.617-1.554-3.011-2.64-3.73-2.936-0.64-0.263-2.825-1.081-4.029-0.565-0.533 0.229-1.077 0.471-1.586 0.703 0.175-0.185 0.352-0.37 0.526-0.551 0.144-0.141 0.883-0.422 1.424-0.626 1.523-0.579 3.101-1.178 3.32-2.202 0.063-0.291 0.039-0.737-0.434-1.206-0.903-0.895-2.768-1.057-4.174-1.031-1.6 0.027-3.554 0.323-4.551 0.784-0.002-0.090-0.011-0.176-0.027-0.26l0.002 0.010c-0.073-0.401-0.35-0.953-1.254-1.306-2.496-0.981-7.279 2.218-8.029 3.141-0.718 0.882-3.139 7.141-3.609 8.367-0.158 0.366-0.238 0.754-0.238 1.154v16.793c0 0.903 0.741 1.653 1.649 1.672l2.053 0.047c0.351 0.019 10.121 0.568 12.061 0.637 0.056 0.002 0.144 0.005 0.261 0.005 1.427 0 7.109-0.328 8.895-5.435 0.514-1.131 0.023-2.541-1.097-3.139-0.903-0.483-2.346-0.429-3.463 1.313-1.28 2.111-3.923 2.506-5.838 1.979-1.825-0.501-2.914-1.719-2.914-3.257 0-2.41 1.137-4.381 2.967-5.144 1.814-0.754 3.966-0.178 5.763 1.546 0.24 0.305 0.496 0.574 0.744 0.834 0.191 0.2 0.385 0.403 0.571 0.625 0.474 0.563 1.878 1.389 2.879 0.958 0.36-0.155 0.938-0.605 0.777-1.856-0.594-4.966-5.295-6.777-7.843-7.399l3.833-1.906c0.533-0.265 1.545-0.178 2.438-0.103 1.15 0.101 2.143 0.186 2.594-0.414 0.239-0.317 0.258-0.731 0.059-1.232zM35.495 9.958c-0.24 0.109-1.064 0.035-1.619-0.011-1.037-0.089-2.21-0.19-3.017 0.213l-6.961 3.459 1.881 0.177c0.079 0.007 7.786 0.798 8.499 6.759 0.018 0.152 0.069 0.653-0.134 0.741-0.361 0.152-1.282-0.267-1.611-0.661-0.211-0.245-0.413-0.464-0.62-0.678l0.003 0.003c-0.239-0.242-0.467-0.497-0.681-0.763l-0.015-0.019-0.051-0.058c-2.126-2.057-4.73-2.726-6.97-1.793-2.239 0.935-3.63 3.285-3.63 6.134 0 2.021 1.422 3.665 3.709 4.295 2.298 0.632 5.486 0.131 7.051-2.45 0.602-0.941 1.36-1.289 2.023-0.933 0.551 0.294 0.946 1.047 0.608 1.797-1.661 4.738-7.043 4.795-8.11 4.754-1.954-0.070-11.949-0.632-12.049-0.637l-2.080-0.049c-0.325-0.007-0.586-0.271-0.589-0.596v-16.792c0-0.255 0.050-0.502 0.159-0.754 1.083-2.822 2.977-7.514 3.448-8.093 0.568-0.698 4.016-2.936 6.072-2.936 0.263 0 0.505 0.037 0.714 0.119 0.352 0.137 0.549 0.306 0.584 0.498 0.086 0.462-0.543 1.203-0.811 1.45l-1.897 1.344c-0.183 0.13-0.324 0.309-0.403 0.518l-0.003 0.008-1.566 4.263 1.827-1.951s2.529-2.704 4.223-4.501c0.629-0.583 6.337-1.397 7.682-0.064 0.094 0.093 0.149 0.179 0.139 0.221-0.098 0.454-1.821 1.109-2.648 1.422-0.975 0.371-1.539 0.594-1.823 0.89-0.474 0.493-1.286 1.347-2.097 2.201l-0.394 0.419-2.029 2.144 2.663-1.294c0.023-0.011 2.149-1.042 4.137-1.896 0.434-0.186 1.666-0.050 3.181 0.571 1.603 0.661 2.835 1.577 3.137 2.336 0.043 0.107 0.056 0.173 0.069 0.193zM8.109 29.569v-16.374c0-0.987-0.81-1.79-1.806-1.79h-4.499c-0.992 0-1.803 0.801-1.803 1.789v16.376c0 0.987 0.809 1.79 1.806 1.79h4.496c0.997 0 1.806-0.802 1.806-1.79zM5.874 15.41c0 1.043-0.857 1.893-1.909 1.893-0.002 0-0.005 0-0.008 0-1.047 0-1.896-0.845-1.903-1.891v-0.001c0-1.043 0.857-1.893 1.91-1.893 1.054 0 1.91 0.849 1.91 1.893z",
			fill: '#ffffff'
		}
	},
	cart: {
		viewbox: '0 0 32 32',
		size: {width: 28, height: 32},
		path: {
			d: "M32 27.17c0-0.34-0.306-0.616-0.682-0.616h-1.74v-14.215c0-3.124-1.294-6.105-3.646-8.394-2.342-2.28-5.521-3.67-8.949-3.915l-0.345-0.025-1.364-0.005-0.348 0.022c-7.136 0.452-12.726 5.862-12.726 12.318v14.215h-1.518c-0.376 0-0.682 0.276-0.682 0.616 0 0.339 0.306 0.615 0.682 0.615h30.636c0.376 0 0.682-0.276 0.682-0.615zM28.215 22.742h-2.862v-9.39c0-0.35-0.274-0.615-0.638-0.615h-5.832v-0.368c0-1.439-1.279-2.61-2.85-2.61h-0.066c-1.62 0-2.938 1.171-2.938 2.61v0.368h-5.744c-0.387 0-0.726 0.288-0.726 0.615v9.39h-2.994v-10.402c0-6.13 5.529-11.117 12.325-11.117s12.325 4.987 12.325 11.117v10.403zM12.148 22.742v-8.774h7.616v8.774h-7.616zM14.393 12.737v-0.368c0-0.748 0.72-1.38 1.574-1.38h0.066c0.833 0 1.486 0.607 1.486 1.38v0.368h-3.126zM3.697 26.553v-2.58h24.518v2.581h-24.518zM2 30.499c0 0.829 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v0c-0-0.829-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0 0 0 0 0.001v-0zM27 30.499c0 0.829 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v0c0-0.829-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5v0z",
			fill: '#ffffff'
		}
	},
	guest: {
		viewbox: '0 0 32 32',
		size: {width: 14, height: 14},
		path: {
			d: "M16 19.84c1.89 0 3.961 0.274 6.217 0.823 2.56 0.64 4.633 1.493 6.217 2.56 1.89 1.25 2.834 2.651 2.834 4.206v3.84h-30.537v-3.84c0-1.554 0.944-2.955 2.834-4.206 1.584-1.067 3.657-1.92 6.217-2.56 2.256-0.549 4.327-0.823 6.217-0.823zM16 16c-0.016 0-0.035 0-0.054 0-1.38 0-2.672-0.382-3.773-1.047l0.033 0.018c-1.159-0.686-2.080-1.607-2.766-2.766-0.646-1.069-1.029-2.36-1.029-3.74 0-0.019 0-0.038 0-0.057l-0 0.003c0-1.371 0.343-2.651 1.029-3.84s1.607-2.126 2.766-2.811c1.069-0.646 2.36-1.029 3.74-1.029 0.019 0 0.038 0 0.057 0l-0.003-0c1.371 0 2.635 0.343 3.794 1.029s2.080 1.623 2.766 2.811c0.686 1.189 1.029 2.469 1.029 3.84 0 0.016 0 0.035 0 0.054 0 1.38-0.382 2.672-1.047 3.773l0.018-0.033c-0.686 1.159-1.607 2.080-2.766 2.766-1.069 0.646-2.36 1.029-3.74 1.029-0.019 0-0.038-0-0.057-0l0.003 0z",
			fill: '#9e9e9e'
		}
	},
	calendar: {
		viewbox: '0 0 27 32',
		size: {width: 12, height: 14},
		path: {
			d: "M3.072 27.429v-16.786h21.285v16.786h-21.285zM3.072 2.999c-0.83 0-1.547 0.304-2.158 0.914s-0.914 1.328-0.914 2.158v21.358c0 0.83 0.304 1.536 0.914 2.121 0.545 0.543 1.296 0.878 2.126 0.878 0.011 0 0.022-0 0.034-0h21.283c0.017 0 0.037 0.001 0.057 0.001 0.827 0 1.577-0.336 2.119-0.878l0-0c0.552-0.523 0.896-1.261 0.896-2.079 0-0.015-0-0.030-0-0.044l0 0.002v-21.358c0-0.83-0.297-1.547-0.896-2.158-0.597-0.61-1.323-0.914-2.176-0.914h-1.499v-2.999h-3.072v2.999h-12.142v-2.999h-3.072v2.999h-1.499zM6.071 13.714v2.999h3.072v-2.999h-3.072zM12.215 13.714v2.999h2.999v-2.999h-2.999zM18.286 13.714v2.999h3.072v-2.999h-3.072z",
			fill: '#9e9e9e'
		}
	},
	logo: {
		viewbox: '0 0 96 32',
		size: {width: 120, height: 40},
		path: [
			{
				d: 'M28.158.166h.005c.3.002.44.305.44.305l3.89 8.34c.216.465-.248.68-.248.68L7.85 20.868c-.464.216-.465.214-.465.214v-.002c-.03.014-.053.03-.08.043a5.112 5.112 0 1 1-4.322-9.266c.027-.013.056-.022.082-.034v-.004L27.924.223a.56.56 0 0 1 .233-.057zm-26.57 16.39a3.594 3.594 0 1 0 7.19 0 3.594 3.594 0 0 0-7.19 0z',
				fill: '#00718f'
			},
			{
				d: 'M65.422 17.943h-2.64l-1.06 3.995H60.35l-.258.843h1.37l-2.135 8.482c-1.366 2.14-3.793 4.675-6.375 4.675-1.996 0-2.863-1.577-2.863-3.41 0-1.134.3-2.16.563-3.187 6.974-.036 9.31-2.455 9.31-4.764 0-1.76-1.583-3.006-3.618-3.006-4.522 0-9.197 4.875-9.197 9.456 0 .44.057.875.152 1.298-1.413 1.835-3.467 3.613-5.628 3.613-1.998 0-2.865-1.577-2.865-3.41 0-1.134.302-2.16.566-3.187 6.973-.036 9.31-2.455 9.31-4.764 0-1.76-1.583-3.006-3.62-3.006-3.73 0-7.56 3.32-8.786 7.057l-1.07.024c.532-1.82.817-3.605.817-4.953 0-1.1-.512-2.127-1.245-2.127-.734 0-1.43.44-1.43 1.247 0 1.906 1.685 1.1 1.685 2.42 0 1.61-2.565 10.518-5.68 10.518-1.43 0-1.576-1.21-1.576-2.456 0-3.41 1.794-8.137 2.565-11.362h-2.53c-1.21 3.957-2.748 8.172-4.947 11.398-.843 1.21-1.723 2.53-2.822 2.53-.477 0-.696-.406-.733-.81 0-.22 2.86-10.333 2.86-11.543 0-1.32-.696-1.943-1.944-1.943-2.138 0-3.896 2.13-4.792 4.146-2.177-4.534-9.427-5.01-9.427-8.872 0-2.786 2.236-4.618 4.8-4.618 2.603 0 4.362 1.282 4.51 6.01l.88.11 1.39-6.267h-.696l-1.428 1.136c-1.246-1.1-2.786-1.797-4.435-1.797-4.068 0-6.89 3.225-6.89 7.293 0 7.146 9.31 6.193 9.31 11.946 0 2.895-2.457 5.534-5.535 5.534-3.958 0-5.46-2.933-5.46-6.45l-.88-.22L0 36.486h.55l2.088-1.356C3.958 36.377 5.754 37 7.513 37c5.827 0 8.54-4.838 8.54-8.466 0-.67-.088-1.278-.242-1.832h.094c.404-1.173 2.09-3.957 3.226-3.957.183 0 .513.29.513.33 0 .915-2.785 11.285-2.785 11.652 0 1.21.916 2.126 2.162 2.126 2.015 0 3.848-1.172 6.56-6.67l.072.037c-.108.88-.256 2.455-.256 2.896 0 1.574.588 3.737 3.042 3.737 3.036 0 5.337-3.756 6.572-7.57h1.074a7.424 7.424 0 0 0-.217 1.743c0 3.006 2.337 5.827 5.654 5.827 2.62 0 4.657-1.57 6.06-3.614.82 2.043 2.75 3.613 5.22 3.613 2.59 0 4.606-1.53 6.008-3.54-.213.787-.386 1.313-.386 1.707 0 1.284 1.32 1.833 2.347 1.833 2.966 0 5.018-3.114 5.68-5.827l-.698-.256c-.77 2.675-2.382 4.985-3.995 4.985-.512 0-.733-.295-.733-.845 0-.22.184-.77.403-1.574l2.677-10.555h2.82l.258-.842H64.36l1.062-3.995zm-9.756 4.47c.904 0 1.62.806 1.62 1.686 0 2.42-1.996 4.47-6.444 4.47.603-2.09 2.187-6.156 4.824-6.156zm-11.28 0c.904 0 1.62.806 1.62 1.686 0 2.42-1.997 4.47-6.444 4.47.603-2.09 2.185-6.156 4.823-6.156zm65.91 8.832c-.513 1.357-1.723 4.436-3.408 4.436-.44 0-1.026-.146-1.026-.733 0-.293 2.602-9.235 2.602-10.335 0-2.38-1.393-3.042-3.225-3.042-1.725 0-4.18 1.394-5.425 3.372l-.073-.036.88-3.336c-1.394.147-3.886.368-4.912.368h-.698l-.255.843h2.933l-2.416 9.384c-.623 1.49-1.678 3.517-3.046 3.517-.44 0-1.026-.146-1.026-.733 0-.293 2.602-9.235 2.602-10.335 0-2.38-1.394-3.042-3.224-3.042-1.724 0-4.178 1.394-5.425 3.372l-.073-.036.88-3.336c-1.393.147-3.884.368-4.91.368h-.698l-.256.843h2.93L80.43 32.885c-.945 1.516-2.373 2.957-3.79 2.957-1.217 0-1.455-.375-1.47-.967-.007-.278 2.353-8.856 3.364-12.48a5.232 5.232 0 0 1-.43.023 5.08 5.08 0 0 1-1.314-.178 2.6 2.6 0 0 1-.182-.047 4.996 4.996 0 0 1-.726-.29l-2.864 10.995c-.152.587-.377 1.577-.377 2.052 0 1.32 1.637 1.906 2.806 1.906 2.1 0 3.507-.836 4.53-2.21l-.465 1.807h2.64l1.503-6.01c.99-4.106 3.262-7.733 6.046-7.733.77 0 1.648.22 1.648 1.392 0 1.21-2.6 8.575-2.6 10.773 0 1.357 1.062 1.98 2.307 1.98 1.55 0 2.658-.803 3.504-1.92l-.39 1.517h2.64l1.502-6.01c.99-4.106 3.263-7.733 6.047-7.733.77 0 1.65.22 1.65 1.392 0 1.21-2.604 8.575-2.604 10.773 0 1.357 1.064 1.98 2.31 1.98 2.93 0 4.286-2.86 5.276-5.314l-.696-.295',
				fill: '#00718f'
			},
			{
				d: 'M-2.962 17.17l.48 1.033L32.043 2.105l-.496-1.028L-2.962 17.17m0 4.995l.48 1.034L34.26 6.066l-.386-1.08-36.836 17.178m0-2.56l.48 1.035L32.98 4.105l-.34-1.1-35.602 16.6m-1.22-4.343l.482 1.034L30.93.15l-.376-1.085-34.736 16.198m-1.153-1.94l.48 1.034L29.776-1.79 29.4-2.876-5.335 13.322m3.404 10.954l.48 1.035L35.29 8.18 34.905 7.1-1.93 24.276',
				fill: '#00718f'
			}
		]
	},
	location: {
		viewbox: '0 0 24 24',
		size: {width: 24, height: 24},
		path: {
			d: "M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z",
			fill: '#616161'
		}
	},
	giftcard: {
		viewbox: '0 0 24 24',
		size: {width: 24, height: 24},
		path: {
			d: "M18,4 L15.82,4 C15.93,3.69 16,3.35 16,3 C16,1.34 14.66,0 13,0 C11.95,0 11.04,0.54 10.5,1.35 L10,2.02 L9.5,1.34 C8.96,0.54 8.05,0 7,0 C5.34,0 4,1.34 4,3 C4,3.35 4.07,3.69 4.18,4 L2,4 C0.89,4 0.01,4.89 0.01,6 L0,17 C0,18.11 0.89,19 2,19 L18,19 C19.11,19 20,18.11 20,17 L20,6 C20,4.89 19.11,4 18,4 Z M13,2 C13.55,2 14,2.45 14,3 C14,3.55 13.55,4 13,4 C12.45,4 12,3.55 12,3 C12,2.45 12.45,2 13,2 Z M7,2 C7.55,2 8,2.45 8,3 C8,3.55 7.55,4 7,4 C6.45,4 6,3.55 6,3 C6,2.45 6.45,2 7,2 Z M18,17 L2,17 L2,15 L18,15 L18,17 Z M18,12 L2,12 L2,6 L7.08,6 L5,8.83 L6.62,10 L9,6.76 L10,5.4 L11,6.76 L13.38,10 L15,8.83 L12.92,6 L18,6 L18,12 Z",
			fill: '#007799'
		}
	},
	lock: {
		viewbox: '0 0 24 24',
		size: {width: 24, height: 24},
		path: {
			d: "M12.0000709,4 C9.32467729,4 7.14800231,6.0989965 7.14800231,8.67909675 L7.14800231,11.3514489 C7.14800231,11.3818168 7.10914223,11.4329859 7.07861538,11.4427714 C6.81623186,11.5271511 6.60313914,11.6002692 6.40807341,11.672786 C6.17545144,11.7592705 6,12.0078722 6,12.2510891 L6,18.3914008 C6,18.6329503 6.17431767,18.8817707 6.40546573,18.9701138 C8.19390833,19.653543 10.076199,20 12.0000425,20 C13.923886,20 15.8061767,19.653461 17.5947043,18.9700318 C17.8257674,18.881716 18,18.6329503 18,18.3914008 L18,12.2510891 C18,12.0078722 17.8245769,11.7592705 17.5918416,11.672704 C17.3966908,11.6001872 17.1836264,11.5270691 16.9214413,11.4426894 C16.8909995,11.4329038 16.8521394,11.3817075 16.8521394,11.3513395 L16.8521394,8.67901475 C16.8519977,6.0989965 14.6754644,4 12.0000709,4 L12.0000709,4 Z M10.6784878,14.121219 C10.6784878,13.416852 11.2701759,12.8468585 11.9999858,12.8468585 C12.7297391,12.8468585 13.3214271,13.4167974 13.3214271,14.121219 C13.3214271,14.5879451 13.0484995,14.9787103 12.6606923,15.2002241 L12.6606923,17.3071475 C12.6606923,17.6593719 12.3651743,17.9443277 11.9999575,17.9443277 C11.6347124,17.9443277 11.3392227,17.6593719 11.3392227,17.3071475 L11.3392227,15.2002241 C10.9514438,14.9787103 10.6784878,14.5879451 10.6784878,14.121219 L10.6784878,14.121219 Z M15.1837351,8.67901475 L15.1837351,10.9847648 C14.1396998,10.7681164 13.0685957,10.6583982 12.000496,10.6583162 C10.9328782,10.6583162 9.86200087,10.7680617 8.81634996,10.9845188 L8.81634996,8.67901475 C8.81634996,6.98609047 10.2445077,5.60887258 11.9999858,5.60887258 C13.7554356,5.60884525 15.1837351,6.98609047 15.1837351,8.67901475 L15.1837351,8.67901475 Z",
			fill: '#1CC13E'
		}
	},
	fullArrow: {
		viewbox: '0 0 24 24',
		size: {width: 24, height: 24},
		path: {
			d: "M7.41421356,13 L11.781429,17.3672154 C12.1701559,17.7559424 12.1714215,18.3849276 11.7781746,18.7781746 C11.3876503,19.1686989 10.7488644,19.163078 10.3672154,18.781429 L4.70385237,13.1180659 C4.46330797,12.8775215 4.37112794,12.5449789 4.42898303,12.2332241 C4.37911154,11.9251605 4.47223355,11.5988343 4.70385237,11.3672154 L10.3672154,5.70385237 C10.7559424,5.31512544 11.3849276,5.31385983 11.7781746,5.70710678 C12.1686989,6.09763107 12.163078,6.73641695 11.781429,7.11806593 L7.89949494,11 L18.992516,11 C19.5489341,11 20,11.4438648 20,12 C20,12.5522847 19.5510798,13 18.992516,13 L7.41421356,13 Z",
			fill: '#565656'
		}
    },
    cube: {
        viewBox: '0 0 32 32',
        size: {width: 32, height: 32},
        path: [{
            d: "M2.891 8.255v15.491l13.109 8.255v-15.491z",
            fill: "#b87fd9",
        }, {
            d: "M16 16.509v15.491l13.109-8.255v-15.491z",
            fill: "#933ec5",
        },{
            d: "M29.109 8.255l-13.109-8.255-13.109 8.255 13.109 8.255z",
            fill:"#d5b4e8",
        }]
    }
};

export default IconsList;