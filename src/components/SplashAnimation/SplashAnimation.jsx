import "./splashAnimation.scss"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TADUM_SOUND_URL } from "../../requests";
import { motion } from "framer-motion";

const SplashAnimation = () => {

	let history = useHistory();

	const soundNotification = () => {
		const sound = new Audio(TADUM_SOUND_URL);
		const promise = sound.play();

		if (promise !== undefined) {
			promise.then(() => {}).catch(error => console.error(error));
		}
	}

	useEffect(() => {
		setTimeout(() => {
			soundNotification();
		}, 200)
		setTimeout(() => {
			history.push('/browse')
		}, 300)
	}, [history])

	return (
		<motion.div
			id="SplashAnimation__wrp"
			className='SplashAnimation'
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			
		</motion.div>
	)
}

export default SplashAnimation