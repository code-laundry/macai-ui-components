import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

export default function AllInbox(props: SvgIconProps) {
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
          d="M19 3H5C3.9 3 3 3.9 3 5V12C3 13.1 3.9 14 5 14H19C20.1 14 21 13.1 21 12V5C21 3.9 20.1 3 19 3ZM5 10H8.13C8.34 10.78 8.8 11.47 9.4 12H5V10ZM19 12H14.6C15.2 11.47 15.66 10.78 15.87 10H19V12ZM19 8H14V9C14 10.07 13.07 11 12 11C10.93 11 10 10.07 10 9V8H5V5H19V8ZM17 15H14V16C14 16.47 13.81 16.9 13.52 17.25C13.15 17.7 12.6 18 12 18C11.4 18 10.85 17.7 10.48 17.25C10.19 16.9 10 16.47 10 16V15H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15H17ZM5 17H8.13C8.15 17.09 8.19 17.17 8.22 17.25C8.46 17.93 8.87 18.53 9.4 19H5V17ZM19 19H14.6C15.14 18.53 15.55 17.93 15.78 17.25C15.81 17.17 15.85 17.09 15.87 17H19V19Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </SvgIcon>
  )
}
