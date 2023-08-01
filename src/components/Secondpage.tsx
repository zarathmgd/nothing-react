import { motion, useAnimation, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import { Iperfume } from "./redux";
import { useEffect, useRef } from "react";

export default function Secondpage() {
  const perfume = useSelector((state: any) => state.perfume);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);

  return (
    <div className="secondpage">
      <h1>OUR PERFUMES</h1>
      <div className="container" ref={ref}>
        {perfume.map(({ id, linkBottle, name, description, notes }: Iperfume, i: number) => {
          return (
            <motion.div
              className="perfume"
              key={id}
              initial={i % 2 ? { opacity: 0, x: "100vw" } : { opacity: 0, x: "-100vw" }}
              animate={mainControls}
              transition={{ duration: 1, delay: i * 0.3, type: "tween" }}
            >
              <img src={linkBottle} alt="perfume bottle" />
              <div className="perfume-informations">
                <h6>{name}</h6>
                <p>{description}</p>
                <p className="perfume-notes">Notes : {notes}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
