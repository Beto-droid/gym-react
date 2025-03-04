import {BenefitType, SelectedPage} from "@/shared/types.ts";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import Benefit from "@/scenes/benefits/Benefit.tsx";
import ActionButton from "@/shared/ActionButton.tsx";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


// Array of benefits
// const benefits: Array<object> = [
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className={"h-6 w-6"}/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque scelerisque curae ultricies ut dolor."
    },
    {
        icon: <UserGroupIcon className={"h-6 w-6"}/>,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque scelerisque curae ultricies ut dolor."
    },
    {
        icon: <AcademicCapIcon className={"h-6 w-6"}/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque scelerisque curae ultricies ut dolor."
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


// this is for the child stagger animation
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const Benefits = ({setSelectedPage}: Props) => {

    return (
        // The min h full so it takes the full high from the minimun amount (repsonsive desing)
        // The onviewport its highlihgint where we are in the navigation
        <section id={"benefits"} className={"mx-auto min-h-full w-5/6 py-20 "}>
            <motion.div
                onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
                {/*REMEMBER THE MD, super usefull . this makes that when it md it goes back to 3/5 and in mobile not.*/}
                {/*HEADER*/}
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}
                    className={"md:my-5 md:w-3/5"}>
                    {/*ANOTHER SHARED :)*/}
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className={"my-5 text-sm"}>
                        We provide world class fitness equipment, trainers and classes to get you to your
                        ultimate fitness goals with ease. We provide true care into each and every member.
                    </p>
                </motion.div>
                {/*  BENEFITS  */}
                {/*This has a sattager child animation*/}
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once:true, amount:0.5}}
                    variants={container}
                    className={"md:flex items-center justify-between gap-8 mt-5"}>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>
                    ))}
                </motion.div>
            {/*  Graphics AND DESCRIPTTION  */}
                <div className={"mt-16 items-center justify-between gap-20 md:mt-28 md:flex"}>
                {/*  GRAPHIC  */}
                {/*    THE MX-AUTO it centers remember*/}
                    <img className={"mx-auto"} src={BenefitsPageGraphic} alt="benefits-page-graphic"/>
                {/*    DESCRIPTION*/}
                    <div>
                    {/*    TITTLE*/}
                        <div className={"relative"}>
                            {/*This is a setup for having a background image form other using ralative and then absolute*/}
                            <div className={"before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"}>
                                {/*HOTE THIS WILL PASS A SPAN IN THE SAME LINE SUPER INTERESTING*/}
                                {/*THE {"  "} FORCES A SPACE*/}
                                <motion.div
                                    initial={"hidden"}
                                     whileInView={"visible"}
                                     viewport={{once:true, amount: 0.5}}
                                     transition={{duration: 0.5}}
                                     variants={{
                                         hidden: {opacity: 0, x:50},
                                         visible: {opacity: 1, x:0}
                                     }}>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{"  "}
                                        <span className={"text-primary-500"}>FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                    {/*    DESCRIPTION*/}
                    {/*    THe play with the my and mb it generates that nice space.*/}
                        <motion.div
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{once:true, amount: 0.5}}
                            transition={{delay: 0.2, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x:50},
                                visible: {opacity: 1, x:0}
                            }}>
                            <p className={"my-5"}>
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque scelerisque curae ultricies ut dolor.
                                Sem vitae faucibus quisque primis dapibus torquent magnis. Eget gravida posuere ultricies interdum ullamcorper
                                leo scelerisque curae rhoncus. Magnis eu dictumst eu eu lobortis sodales posuere posuere. Accumsan nam facilisi
                                velit ac nisi habitant purus. Tincidunt tempor fusce risus iaculis dolor faucibus ornare libero posuere.</p>
                            <p className={"mb-5"}>
                                Quis dapibus aliquet magnis; eget turpis class et consectetur. Convallis est et volutpat
                                tempus magna ultricies condimentum diam. Fames arcu netus sem convallis erat sit finibus lectus.
                                Dapibus augue accumsan lacinia nisi et vel laoreet pellentesque. Varius parturient diam suscipit
                                magnis semper consequat venenatis. Non integer libero cras ridiculus ridiculus. Nisi venenatis suscipit
                                hendrerit adipiscing sociosqu facilisis molestie nostra.
                            </p>
                        </motion.div>
                    {/*BUTTON*/}
                        <div className={"relative mt-16"}>
                            <div className={"before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"}>
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits