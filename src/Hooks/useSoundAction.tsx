import useSound from "use-sound";
import { sound } from "@/assets/sound/sounds";

const useSoundAction = () => {
  const [lipSound] = useSound(sound.lip, { volume: 1 });
  const [popSound] = useSound(sound.pop, { volume: 1 });
  return { lipSound, popSound };
};
export default useSoundAction;
