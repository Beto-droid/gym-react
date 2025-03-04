import {GymClassType, SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import GymClass from "./GymClass"

const gymClasses:Array<GymClassType> = [
    {
        name: "Weight Training Classes",
        description: "Sapien curabitur eget per varius neque habitant " +
            "aenean luctus. Auctor auctor fermentum faucibus duis eleifend " +
            "commodo netus pellentesque. Ac dolor vehicula, adipiscing eget cras fusce.",
        image: image1,
    },
    {
        name: "Adventure Classes",
        description: "Sapien curabitur eget per varius neque habitant " +
            "aenean luctus. Auctor auctor fermentum faucibus duis eleifend " +
            "commodo netus pellentesque. Ac dolor vehicula, adipiscing eget cras fusce.",
        image: image2,
    },
    {
        name: "Yoga Classes",
        description: "Sapien curabitur eget per varius neque habitant " +
            "aenean luctus. Auctor auctor fermentum faucibus duis eleifend " +
            "commodo netus pellentesque. Ac dolor vehicula, adipiscing eget cras fusce.",
        image: image3,
    },
    {
        name: "Acrobatics Classes",
        // description: "Sapien curabitur eget per varius neque habitant " +
        //     "aenean luctus. Auctor auctor fermentum faucibus duis eleifend " +
        //     "commodo netus pellentesque. Ac dolor vehicula, adipiscing eget cras fusce.",
        image: image4,
    },
    {
        name: "Not Another Gym Classes",
        // description: "Sapien curabitur eget per varius neque habitant " +
        //     "aenean luctus. Auctor auctor fermentum faucibus duis eleifend " +
        //     "commodo netus pellentesque. Ac dolor vehicula, adipiscing eget cras fusce.",
        image: image5,
    },
    {
        name: "Relaxing Classes",
        description: "Sapien curabitur eget per varius neque habitant " +
            "aenean luctus. Auctor auctor fermentum faucibus duis eleifend " +
            "commodo netus pellentesque. Ac dolor vehicula, adipiscing eget cras fusce.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section id={"ourclasses"} className={"w-full bg-primary-100 py-40"}>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    className={"mx-auto w-5/6"}
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}>
                    <div className={"md:w-3/5"}>
                        <HText>OUR CLASSES</HText>
                        <p className={"py-5"}>
                            Non lacus dui interdum ad odio quisque condimentum. Nullam amet phasellus eu laoreet
                            efficitur ligula. Dui vestibulum felis malesuada dolor auctor per. Massa taciti sapien
                            eu, integer consequat etiam? Fusce id duis suspendisse congue vehicula gravida lacinia?
                            Ut ultrices eleifend pharetra quis aliquam, congue hac.
                        </p>
                    </div>
                </motion.div>
                {/*This makes a carrusel or overflow*/}
                <div className={"mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden"}>
                    {/*To make the overlfow happens the child needs to have a very long width*/}
                    <ul className={"w-[2800px] whitespace-nowrap"}>
                        {gymClasses.map((item:GymClassType, index) => (
                            <GymClass key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image}/>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses