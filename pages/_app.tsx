import "../styles/globals.css";
import "../styles/Modal.css";
import type { AppProps } from "next/app";
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "../context/modal";

const Modal = ({ visible = false, close = () => {}, children = [] }: any) => {
  if (!visible) return null;

  return (
    <div className="modal">
      <AiOutlineClose className="menu-close" onClick={close} style={{}} />
      {children}
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [modalContext, setModalContext] = useState({
    content: null,
    update: () => {},
  });
  return (
    <ModalContext.Provider
      value={{
        ...modalContext,
        update: setModalContext,
        close: () => setModalContext({ ...modalContext, content: null }),
      }}
    >
      <Modal
        visible={!!modalContext.content}
        close={() => {
          setModalContext({ ...modalContext, content: null });
        }}
      >
        {modalContext.content}
      </Modal>
      {/* <Toaster toastOptions={{ className: "rw-toast", duration: 6000 }} /> */}
      <Component {...pageProps} />
    </ModalContext.Provider>
  );
  return;
}
