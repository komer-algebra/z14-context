import PropTypes from "prop-types";
import { useContext } from "react";
import ContextName from "../Context";

export default function ConsumerParagraph({ children }) {
  const [text, number] = useContext(ContextName);
  return (
    <p>
      A ovaj paragraf kao \&quot;context consumer\&quot; - konzumira {number} {text}! {children}
    </p>
  );
}

ConsumerParagraph.propTypes = {
  children: PropTypes.string
}
