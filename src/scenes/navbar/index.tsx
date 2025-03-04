import Logo from "@/assets/Logo.png"
import Link from "./Link.tsx";
import {SelectedPage} from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";  //  // The 24 its the size
import {useState} from "react";
import ActionButton from "@/shared/ActionButton.tsx";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"  // apply taiwlidn css classes, flex item center jsutify
    // between represents justify-between move dvis in oposite sides, and items its center
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")  // this will give as a bool if we are above this weight
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
    return (
        <nav>
            {/*// OUTER fixed repesentes us positionin the navbar on the op and fixing it (scrolling it always its there) and always in top the z-30 always pop it. w-full alwyas take all the with... and py-6 padding of y (up and down ) direction*/}
            <div className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                {/*this repensent the (percent 5/6 of with) inner width and mx-aout center it in the center position. its the "center div of inside the other div. that cointains all "*/}
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    {/* this repesent inte other div of the logo*/}
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/*LEFT SIDE*/}
                        <img src={Logo} alt="logo"/>
                        {/*RIGHT SIDE*/}
                        {isAboveMediumScreens ? (  // First ocnditio ndestop second bmobile screen
                            <div className={`${flexBetween} w-full`}>
                                {/*INNER LEFT SIDE (Home benefits our calses etc)*/}
                                {/*GAP-8 space better so we dont have to add antyhign to the childs it is like marging left and tight but BETTER*/}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link page={"Home"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                    <Link page={"Benefits"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                    <Link page={"Our Classes"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                    <Link page={"Contact Us"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                </div>
                                {/*INNER RIGHT SIDE (Sig in Become a Member)*/}
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sig In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div> ) : (
                                // Padding p-2 all arround
                                <button className={"rounded-full bg-secondary-500 p-2"} onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                                    <Bars3Icon className={"h-6 w-6 text-white"}/>
                                </button>
                            )}
                    </div>
                </div>
            </div>
        {/*  MOBILE MOENU MODAL  */}
            {!isAboveMediumScreens && isMenuToggled && (
                // its a modal, position of fixed, set it to the rihgt side and align to the bottom, z-40 pop up over everything. we need [] for TS
                <div className={"fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"}>
                {/*  CLOSE ICON */}
                    <div className={"flex justify-end p-12"}>
                        <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className={"h-6 w-6 text-gray-400"}/>
                        </button>
                    </div>
                {/*  MENU ITEMS  */}
                    {/*  THis flxess the flex from row to col, the we add a gap  */}
                    <div className={"ml-[33%] flex flex-col gap-10 text-2xl"}>
                        <Link page={"Home"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={"Benefits"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={"Our Classes"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={"Contact Us"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar