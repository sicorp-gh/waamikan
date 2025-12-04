import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import TextBox from "../components/TextBox";

import { useState } from "react";

function NavbarLayout() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Container className="sm:my-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <Nav className="flex justify-end sm:justify-start" />
        </div>

        <div className="col-span-1 text-[1.5rem] text-white sm:text-gray-700 fixed sm:top-0 top-[14px] sm:right-0 right-14 z-50 sm:relative flex items-center justify-end space-x-3">
          <motion.button
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
          >
            <IoSearch className="cursor-pointer" />
          </motion.button>
          <motion.button whileHover={{ scale: 2.0 }} whileTap={{ scale: 0.9 }}>
            <FaShoppingCart className="cursor-pointer" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {isModalOpen && (
          <Modal handleClose={closeModal} title="Search Products">
            <TextBox type="search">
              <CiSearch />
            </TextBox>
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default NavbarLayout;
