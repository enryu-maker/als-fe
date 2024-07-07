import { motion } from "framer-motion";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGooglePopup } from "../firebase.utils";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import { getCatInfo } from "../Store/actions";

export default function Header() {
  const variants = {
    hidden: { opacity: 1, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.3,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 1 } },
  };
  const [show, setShow] = React.useState(false);
  const logo = useSelector((state) => state.Reducers.icon);
  const cat = useSelector((state) => state.Reducers.cat);
  const [data,setData] = React.useState({})
  const [current,setCurrent] = React.useState("")

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  const dispatch = useDispatch()
  useGoogleOneTapLogin({
    onError: (error) => console.log(error),
    onSuccess: (response) => console.log(response),
    googleAccountConfigs: {
      client_id:
        "14559057366-dk91v9omvbvk1gov8sgqbel2pdu7t0hm.apps.googleusercontent.com",
    },
  });
  return (
    <div className=" w-full sticky top-0 z-50">
      <div
        className={`h-[70px] font-Montserrat w-full bg-white ${
          show ? "shadow-none" : "shadow-lg"
        } flex justify-center items-center  `}
      >
        <div className="w-[78%] h-full flex justify-between items-center ">
          <div className="space-x-4 flex items-center ">
            {cat?.map((item, index) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => {
                  setShow(true);
                  setCurrent(item?.name)
                  dispatch(getCatInfo(item?.id,setData))
                }}
                key={index}
                className="  hidden sm:flex hover:text-primary font-bold text-base tracking-wide text-black"
              >
                {item?.name}
              </motion.button>
            ))}
          </div>
          <a href="#/">
            {" "}
            <img
              alt={logo[1]?.name}
              src={logo[1]?.logo_image}
              className="h-[40px]"
            />
          </a>
          <div className="flex space-x-4 items-center justify-center">
            <a
              href="#/saved-property"
              className=" hidden sm:flex hover:text-primary font-bold text-base tracking-wide text-black"
            >
              Saved Property
            </a>
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.2 }}
              onClick={logGoogleUser}
              className="tracking-widest bg-primary flex justify-center items-center font-Montserrat text-white  px-3 py-[5px] font-bold"
            >
              <h1>Signin</h1>
            </motion.button>
          </div>
          <motion.button className="sm:hidden flex" whileHover={{ scale: 1.2 }}>
            <IoIosMenu size={30} />
          </motion.button>
        </div>
      </div>
      {show && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="w-full h-[300px] flex justify-center items-center bg-white transition-all shadow-lg"
        >
          <div className="flex justify-evenly items-center sm:w-[20%] w-[88%] absolute right-5 bottom-5">
            <img
              alt={logo[1]?.name}
              src={logo[1]?.logo_image}
              className="sm:h-[35px] h-[30px]"
            />
            <p className="font-Montserrat text-sm sm:text-sm text-primary font-bold tracking-widest">
              by
            </p>
            <img
              alt={logo[0]?.name}
              src={logo[0]?.logo_image}
              className="sm:h-[35px] h-[30px]"
            />
          </div>
          <div className="w-[88%] h-[78%] flex justify-evenly items-start">
          <div className="w-[45%] sm:w-auto flex flex-col">
              <p className="font-Montserrat text-lg sm:text-lg tracking-widest">
                Building Type
              </p>
              {data?.building_type?.map((item, index) => (
                <motion.a
                  key={index}
                whileHover={{ scale: 1.1 }}
                  href={`#/property/${current}/${item?.name}/${item?.id}/`}
                  className="font-medium font-Montserrat text-sm hover:text-primary sm:text-sm tracking-wide text-gray-500"
                  variants={variants}
                >
                  {item?.name}
                </motion.a>
              ))}
            </div>
            <div className="w-[1px] h-[78%] bg-primary" />
            <div className="w-[45%] sm:w-auto flex flex-col">
              <p className="font-Montserrat text-lg sm:text-lg tracking-widest">
                Property Type
              </p>
              {data?.property_type?.map((item, index) => (
                <motion.a
                  key={index}
                  className="font-medium font-Montserrat text-sm sm:text-sm tracking-wide text-gray-500"
                  variants={variants}
                >
                  {item?.name}
                </motion.a>
              ))}
            </div>
            <div className="w-[1px] h-[78%] bg-primary" />
            <div className="w-[45%] sm:w-auto flex flex-col">
              <p className="font-Montserrat text-lg sm:text-lg tracking-widest">
                Popular Location
              </p>
              {data?.popular_location?.map((item, index) => (
                <motion.a
                  key={index}
                  className="font-medium font-Montserrat text-sm sm:text-sm tracking-wide text-gray-500"
                  variants={variants}
                >
                  {item?.name}
                </motion.a>
              ))}
            </div>
            <div className="w-[1px] h-[78%] bg-primary" />
            <div className="w-[45%] sm:w-auto flex flex-col">
              <p className="font-Montserrat text-lg sm:text-lg tracking-widest">
                Status
              </p>
              {data?.status?.map((item, index) => (
                <motion.a
                  key={index}
                  className="font-medium font-Montserrat text-sm sm:text-sm tracking-wide text-gray-500"
                  variants={variants}
                >
                  {item?.value}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}