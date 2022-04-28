import "./Tooltip.scss";

import { cloneElement, isValidElement, useMemo, useState } from "react";

import { usePopper } from "react-popper";

function RenderTooltip({ trigger, backgroundColor, children }) {
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const { styles, attributes } = usePopper(trigger, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 8] } },
    ],
  });
  return (
    <div
      className="popper"
      ref={setPopperElement}
      style={{ ...styles.popper, backgroundColor }}
      {...attributes.popper}
    >
      {children}
      <div
        className="popper-arrow"
        ref={setArrowElement}
        style={styles.arrow}
      />
    </div>
  );
}

export default function Tooltip({ contents, backgroundColor, children }) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [shouldRender, setShouldRender] = useState(false);

  const cloned_trigger_content = useMemo(
    () =>
      isValidElement(children) ? (
        cloneElement(children, {
          ref: setReferenceElement,
          onMouseOver: () => setShouldRender(true),
          onMouseOut: () => setShouldRender(false),
          className: children.props.className + " popper-content",
        })
      ) : (
        <div ref={setReferenceElement} className="popper-content">
          {children}
        </div>
      ),
    [children]
  );

  return (
    <>
      {cloned_trigger_content}

      {shouldRender && (
        <RenderTooltip
          trigger={referenceElement}
          backgroundColor={backgroundColor}
        >
          {contents}
        </RenderTooltip>
      )}
    </>
  );
}
