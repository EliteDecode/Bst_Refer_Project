import { Box } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import DescriptionText from "../common/DescriptionText";
import TitleText from "../common/TitleText";

const Globe = () => {
  const controls = useAnimation();
  const [_, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 3,
        transition: { duration: 2 },
      });
    }
  }, [controls, inView]);

  return (
    <Box>
      <Box className="bg-tetiary my-10 " id="Global">
        <Box className="custom-c p-5 py-16 relative rounded-md">
          <TitleText title="Global Presence" />
          <Box className="space-y-2">
            <DescriptionText
              description=" The impact of BST spans across the globe,
              delivering transformative tech training programs that empower
              individuals and organizations. Our comprehensive courses and
              hands-on workshops are designed to equip participants with the
              latest skills and knowledge in technology, enabling them to thrive
              in a rapidly evolving digital landscape."
            />
            <Box className="sm:block hidden">
              <DescriptionText
                description=" BST has a global footprint, significantly
              influencing the tech industry through our extensive training
              programs. We are dedicated to fostering innovation and excellence
              by providing high-quality education and practical experience in
              cutting-edge technologies. Our mission is to bridge the skills gap
              and prepare the next generation of tech professionals for
              successful careers worldwide."
              />
            </Box>
          </Box>

          {/* <Box className="sm:mt-44 mt-24 border">
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                className="sm:mt-32 mt-2 bg-dark">
                <div className="flex items-center justify-center">
                  <motion.div
                    ref={ref}
                    initial={{ scale: 0 }}
                    animate={controls}>
                    <ComposableMap className="sm:w-[85%] w-[45%] m-auto">
                      <Geographies geography={globe}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              style={{
                                default: {
                                  fill: "#000",
                                },
                                hover: {
                                  fill: "#4b0064",
                                },
                                pressed: {
                                  fill: "#02d202",
                                  border: "2px solid red",
                                },
                              }}
                            />
                          ))
                        }
                      </Geographies>
                    </ComposableMap>
                  </motion.div>
                </div>
              </Grid>
            </Grid>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Globe;
