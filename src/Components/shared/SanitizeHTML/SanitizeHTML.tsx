import { createElement, HTMLAttributes } from "react";
import sanitize from "sanitize-html";

type SanitizeHTMLProps = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
  const sanitizeHTML = sanitize(children, {
    allowedTags: ["img", "strong", "em", "u", "b", "i"],
  });
  return createElement(tag, { ...rest }, sanitizeHTML);
};
