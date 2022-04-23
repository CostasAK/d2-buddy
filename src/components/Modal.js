import "./Modal.scss";

import {
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
  useState,
} from "react";

import DestinyIcon from "./DestinyIcon";
import Measure from "react-measure";
import ReactModal from "react-modal";
import SimpleBarReact from "simplebar-react";

function Modal({ triggerContent, className, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(500);

  const cloned_trigger_content = useMemo(
    () =>
      isValidElement(triggerContent)
        ? cloneElement(triggerContent, { onClick: () => setIsOpen(true) })
        : triggerContent,
    [triggerContent]
  );

  const modal = useCallback(
    (isOpen, width) => (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className={"modal " + (className ? className : "")}
        overlayClassName="modal-overlay"
        closeTimeoutMS={250}
        appElement={document.getElementById("root")}
        style={{ content: { width: width + 2 } }}
      >
        <DestinyIcon
          icon={["controllers", "playstation", "Cross"]}
          className="close"
          onClick={() => setIsOpen(false)}
        />
        <SimpleBarReact className="modal-scroll">
          <Measure
            scroll
            onResize={(contentRect) => {
              setInnerWidth(contentRect.scroll.width);
            }}
          >
            {({ measureRef }) => (
              <div ref={measureRef} className="modal-inner">
                {children}
              </div>
            )}
          </Measure>
        </SimpleBarReact>
      </ReactModal>
    ),
    [children, className]
  );

  return (
    <>
      {cloned_trigger_content}
      {modal(isOpen, innerWidth)}
    </>
  );
}

export default Modal;
