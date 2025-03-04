import {SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import {useForm} from "react-hook-form";
import React from "react";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }

    }

    return (
        <section id={"contactus"} className={"mx-auto w-5/6 pt-24 pb-32"}>
            <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
            {/*    HEADER*/}
                <motion.div
                    className={"md:w-3/5"}
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}>
                        {/*This is another way of for example adding a diferent color to a text interesting*/}
                        <HText>
                            <span className={"text-primary-500"}>
                                JOIN NOW
                            </span> TO GET IN SHAPE
                        </HText>
                    <p className={"my-5"}>
                        t vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                        dolorum fuga. Et harum quidem rerum facilis est et exp
                    </p>
                </motion.div>
            {/*    FORM AND IMAGE*/}
            {/*    NOTE THE MD flex when its bigger xcreen we add a flex (it makes the iamge and text i nth e same row)*/}
                <div className={"mt-10 justify-between gap-8 md:flex"}>
                    <motion.div
                        className={"mt-10 basis-3/5 md:mt-0"}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{once:true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, y:50},
                            visible: {opacity: 1, y:0}
                        }}>
                        {/*NOTE use YOUR OWN EMAIL*/}
                        <form target="_blank"
                              onSubmit={onSubmitHandler}
                              action={"https://formsubmit.co/domikap884@jomspar.com"}
                              method={"POST"}
                        >
                            {/*Name*/}
                            <input type="text" className={inputStyles} placeholder={"NAME"} {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}/>
                            {errors.name && (
                                <p className={"mt-1 text-primary-500"}>
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "MAX Length is 100 char"}
                                </p>
                            )}
                            {/*Email*/}
                            <input type="text" className={inputStyles} placeholder={"EMAIL"} {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}/>
                            {errors.email && (
                                <p className={"mt-1 text-primary-500"}>
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}
                            {/*TEXT AREA*/}
                            <textarea
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" &&
                                        "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                </p>
                            )}
                            {/*BUTTON OF FORM */}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className={"w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext"}>
                            <img
                                className={"w-full"}
                                alt={"contact-us-page-graphic"}
                                src={ContactUsPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs