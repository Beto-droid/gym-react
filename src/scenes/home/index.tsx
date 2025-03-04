import {SelectedPage} from "@/shared/types.ts";
import ActionButton from "@/shared/ActionButton.tsx";
import useMediaQuery from "@/hooks/useMediaQuery.ts"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    // For ancholink we need ID.
    // the md its a media query. that we can applit  for only gull high
    return (
        <section id={"home"} className={"gap-16 bg-gray-20 py-10 md:h-full md:pb-0"}>
        {/*IIMAGE AND MAIN HEADER*/}
        {/*    THe md what it does its the mediaquery selector so it when its md it will do a fullscren setup or add in thi s case flex
        mx-auto it centers if it needed the w-5/6 its a percentage adnd imtes-center it aligns in the center center and justify center it aligns header and img in the middle */}
            {/*The onviewportenter. allows us wto determine to trigger a function when nwe enter a viewport mostly */}
            <motion.div
                className={"md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"}
                onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}>
            {/*  MAIN HEADER  */}
            {/*  the z-10 it makes ait in a fornt a littble . the margin its aa lot of margin .
            and basis of 3/5 its flex basis it does the same as with but does more extra propertly with FLEX ALWAYS USE BASIS WITH FLEX */}
                <div className={"z-10 mt-32 md:basis-3/5"}>
                {/*  HEADINGS  */}
                {/*  We setup the ghigh so it goes up a little bit  */}
                {/*  the motion div its theooen that moves to right*/}
                {/*   the initial and whileview its sef descriptin the viewport it does that only 1 time it runs it the amout its how much we awhant to see it  when it triggers.*/}
                {/*    then we set the initial whielinview its setted up in the variants tab */}
                    <motion.div
                        className={"md:-mt-20"}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{once:true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x:0}
                        }}>
                        {/*When se setup something that its above of under something, its better to use relative. for multiple screens*/}
                        {/*We always whant to set  the relative to the parent div of the image*/}
                        <div className={"relative"}>
                            {/*THe chidl were we put the image it going to be absolute position so we can create a image relative to somethign else*/}
                            {/*  this mean the image that we puttign in the before tag then its -top from the top or right avove it*/}
                            {/* The before:contet-evolvetext come frosmt the tailwind.config.js content . super interesting*/}
                            {/*then suing the before the -lef does move it to the left then the mefore its a little on BACKGORUND*/}
                            {/*We can chain the md with before or selectors*/}
                            <div className={"before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext"}>
                                <img alt={"home-page-text"} src={HomePageText}/>
                            </div>
                        </div>
                        <p className={"mt-8 text-sm"}>
                            Unrivaled Gym. Unparalleled Training Fitness Classes.
                            Studios to get the Body Shapes That you Dream off.. Get Your Dream Body Now.
                        </p>
                    </motion.div>
                    {/*  ACTIONS  */}
                    {/*I added a "delay" so it  feels niec like stagger for the koin and learomre*/}
                    <motion.div
                        className={"mt-8 flex items-center gap-8"}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{once:true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x:0}
                        }}>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className={"text-sm font-bold text-primary-500 underline hover:text-secondary-500"}
                                    onClick={()=> setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/*  IMAGE  */}
                {/* the basis it trsi to take mushc scpace as possible, the jsutify-center its the middle location the z is so the iamge its infront */}
                <div className={"flex basis-3/5 justify-center md:z-10 md:ml40 md:mt-16 md:justify-items-end"}>
                    <img src={HomePageGraphic} alt={"home-pageGraphic"}/>
                </div>
            </motion.div>
            {/*SPONSORS*/}
            {isAboveMediumScreens && (
                //
                <div className={"h-[150px] w-full bg-primary-100 py-10"}>
                    {/*thw with its for the left and right gap*/}
                    <div className={"mx-auto w-5/6"}>
                        {/**/}
                        <div className={"flex w-3/5 items-center justify-between gap-8"}>
                            <img src={SponsorRedBull} alt={"redbull-sponsor"}/>
                            <img src={SponsorForbes} alt={"forbes-sponsor"}/>
                            <img src={SponsorFortune} alt={"fortune-sponsor"}/>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home