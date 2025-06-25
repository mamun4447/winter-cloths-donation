import { useSpring, animated } from "@react-spring/web";

const MyAnimation = ({ children }) => {
  const styles = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return <animated.div style={styles}>{children}</animated.div>;
};
export default MyAnimation;
