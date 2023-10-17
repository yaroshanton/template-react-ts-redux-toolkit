// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@images': path.resolve(__dirname, 'src/assets/images/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@styles': path.resolve(__dirname, 'src/assets/styles/'),
			'@api': path.resolve(__dirname, 'src/core/api/'),
			'@components': path.resolve(__dirname, 'src/shared/components/'),
			'@store': path.resolve(__dirname, 'src/store/'),
			'@constants': path.resolve(__dirname, 'src/utils/constants/'),
			'@enums': path.resolve(__dirname, 'src/utils/enums/'),
			'@types': path.resolve(__dirname, 'src/utils/types/'),
			'@helpers': path.resolve(__dirname, 'src/utils/helpers/'),
		},
	},
};
