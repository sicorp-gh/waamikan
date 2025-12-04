import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Nav from "../components/Nav";
import Modal from "../components/Modal";

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

        <div className="col-span-1 hidden sm:flex items-center justify-end space-x-3">
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

      <AnimatePresence>
        {isModalOpen && (
          <Modal handleClose={closeModal} title="Search Products" />
        )}
      </AnimatePresence>
    </Container>
  );
}

export default NavbarLayout;
