import facebookLightIcon from '../../assets/images/svg/facebook-letter-logo.svg';
import facebookDarkIcon from '../../assets/images/svg/facebook-logo2.svg';
import googleLightIcon from '../../assets/images/svg/google-plus-logo.svg';
import googleDarkIcon from '../../assets/images/svg/google-plus-logo2.svg';
import twiiterLightIcon from '../../assets/images/svg/twitter-logo-silhouette.svg';
import twiiterDarkIcon from '../../assets/images/svg/twitter-logo2.svg';
import linkedinLightIcon from '../../assets/images/svg/linkedin-logo.svg';
import linkedinDarkIcon from '../../assets/images/svg/linkedin.svg';
import noIcon from '../../assets/images/svg/no-camera.svg';

export const SocialIcons = (title, type) => {
	switch (title) {
		case 'facebook': {
			return type === 'light' ? facebookLightIcon : facebookDarkIcon
		}
		case 'google': {
			return type === 'light' ? googleLightIcon : googleDarkIcon
		}
		case 'linkedin': {
			return type === 'light' ? linkedinLightIcon : linkedinDarkIcon
		}
		case 'twitter': {
			return type === 'light' ? twiiterLightIcon : twiiterDarkIcon
		}
		default:
			return noIcon
	}
}