import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

export default function Offer(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.41 2.58L21.41 11.58C21.77 11.94 22 12.45 22 13C22 13.55 21.78 14.05 21.41 14.41L14.41 21.41C14.05 21.78 13.55 22 13 22C12.45 22 11.95 21.78 11.59 21.42L2.59 12.42C2.22 12.05 2 11.55 2 11V4C2 2.9 2.9 2 4 2H11C11.55 2 12.05 2.22 12.41 2.58ZM4 11L13 20.01L20 12.99L11 3.99V4H4V11ZM8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </SvgIcon>
  )
}
