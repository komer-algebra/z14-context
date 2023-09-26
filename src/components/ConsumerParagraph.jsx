import { useContext } from "react";
import ContextName from "./ContextComponent";

export default function ConsumerParagraph({children}) {
  const [txt, num] = useContext(ContextName);
  return (
    <p>A ovaj paragraf kao &quot;context consumer&quot; - konzumira {num} {txt}! {children}
    </p>
  );
}
